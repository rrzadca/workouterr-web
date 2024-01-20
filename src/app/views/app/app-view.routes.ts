import { Route } from '@angular/router';

import { AppViewComponent } from './app-view.component';

export const routes: Route[] = [
    {
        path: '',
        component: AppViewComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            // plopAppend
            {
                path: 'trainings',
                loadChildren: () =>
                    import('./views/trainings-view/trainings-view.routes').then(
                        (r) => r.routes,
                    ),
            },
            {
                path: 'training-plans',
                loadChildren: () =>
                    import(
                        './views/training-plans-view/training-plans-view.routes'
                    ).then((r) => r.routes),
            },

            {
                path: 'exercises',
                loadChildren: () =>
                    import('./views/exercises-view/exercises-view.routes').then(
                        (r) => r.routes,
                    ),
            },

            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./views/dashboard-view/dashboard-view.routes').then(
                        (r) => r.routes,
                    ),
            },
        ],
    },
] as Route[];
