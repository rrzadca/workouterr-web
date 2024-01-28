const TEMPLATES_DIR = './plop-templates';

const APP_PATH = `./src/app`;
const COMPONENTS_DIRECTORY = `./${APP_PATH}/components`;
const PIPES_DIRECTORY = `./${APP_PATH}/pipes`;

const PROMPTS = {
    name: {
        type: 'input',
        name: 'name',
        message: 'Name',
    },
    namePlural: {
        type: 'input',
        name: 'namePlural',
        message: 'Name (plural)',
    },
    routingModule: {
        name: 'routingModule',
        type: 'fileSelectorPrompt',
        message: 'Pick parent routing module',
        basePath: `./${APP_PATH}`,
    },
    directory: {
        name: 'directory',
        type: 'directoryPrompt',
        message: 'Pick directory',
        basePath: `./`,
    },
};

//plop: NodePlopAPI
module.exports = function (plop) {
    plop.setPrompt('directoryPrompt', require('inquirer-directory'));
    plop.setPrompt('fileSelectorPrompt', require('inquirer-file-path'));

    plop.setGenerator('Component', {
        description: '',
        prompts: [PROMPTS.name],
        actions: (data) => {
            const actions = [];

            const baseTemplatesDir = `${TEMPLATES_DIR}/component/`;
            const baseDirForComponent = `${COMPONENTS_DIRECTORY}/{{kebabCase name}}`;

            actions.push(
                {
                    type: 'add',
                    templateFile: `${baseTemplatesDir}/component.ts.hbs`,
                    path: `${baseDirForComponent}/{{kebabCase name}}.component.ts`,
                },
                {
                    type: 'add',
                    templateFile: `${baseTemplatesDir}/component.html.hbs`,
                    path: `${baseDirForComponent}/{{kebabCase name}}.component.html`,
                },
            );
            return actions;
        },
    });

    plop.setGenerator('View', {
        description: '',
        prompts: [PROMPTS.name, PROMPTS.routingModule],
        actions: (data) => {
            const viewData = getViewData(data);

            const baseTemplatesDir = `${TEMPLATES_DIR}/view/`;

            const actions = [];
            actions.push(
                //  update parent routing module
                {
                    type: 'append',
                    pattern: new RegExp(/\/\/ plopAppend/),
                    templateFile: `${TEMPLATES_DIR}/partials/routing.entry.ts.hbs`,
                    path: viewData.routingModuleToInsertRoute,
                },
                // routes
                {
                    type: 'add',
                    templateFile: `${baseTemplatesDir}view.routes.ts.hbs`,
                    path: `${viewData.baseDirWithNamePrefix}.routes.ts`,
                },
                // view container
                {
                    type: 'add',
                    templateFile: `${baseTemplatesDir}/view.component.ts.hbs`,
                    path: `${viewData.baseDirForComponents}/{{kebabCase name}}.component.ts`,
                },
                {
                    type: 'add',
                    templateFile: `${baseTemplatesDir}/view.component.html.hbs`,
                    path: `${viewData.baseDirForComponents}/{{kebabCase name}}.component.html`,
                },
            );

            return actions;
        },
    });

    plop.setGenerator('Pipe', {
        description: '',
        prompts: [PROMPTS.name],
        actions: (data) => {
            const actions = [];

            const baseTemplatesDir = `${TEMPLATES_DIR}/pipe/`;
            const baseDirForPipe = `${PIPES_DIRECTORY}/{{kebabCase name}}`;

            actions.push({
                type: 'add',
                templateFile: `${baseTemplatesDir}/pipe.ts.hbs`,
                path: `${baseDirForPipe}/{{kebabCase name}}.pipe.ts`,
            });
            return actions;
        },
    });
};

function getViewData(data, templateDir) {
    const parentRoutingModule = data.routingModule;
    const isChildRoutingSelected = parentRoutingModule.lastIndexOf('/') !== -1;
    let targetViewDirectory;
    if (isChildRoutingSelected) {
        const parentRoutingModuleDirectory = parentRoutingModule.slice(
            0,
            parentRoutingModule.lastIndexOf('/'),
        );
        targetViewDirectory = `${APP_PATH}/${parentRoutingModuleDirectory}/views`;
    } else {
        targetViewDirectory = `${APP_PATH}/views`;
    }

    const routingModuleToInsertRoute = `${APP_PATH}/${parentRoutingModule}`;

    const baseDirWithNamePrefix = `${targetViewDirectory}/{{kebabCase name}}-view/{{kebabCase name}}-view`;
    const baseDirForComponents = `${targetViewDirectory}/{{kebabCase name}}-view/components`;

    return {
        targetViewDirectory,
        routingModuleToInsertRoute,
        baseDirWithNamePrefix,
        baseDirForComponents,
    };
}
