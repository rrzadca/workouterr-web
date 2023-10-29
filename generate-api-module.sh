#!/usr/bin/env bash

docUrl=$1

if [ -z "$1" ]; then
  echo ❗ Error: Doc swagger url not found.
  exit 0
fi

projectRootDirectory=$(git rev-parse --show-toplevel)
echo ❇️  Project directory: $projectRootDirectory
echo
echo ❇️  Downloading swagger doc from: $docUrl

# get API schema json
wget $docUrl

# clean up existing files
rm -rf $projectRootDirectory/src/app/api/*.ts
rm -rf $projectRootDirectory/src/app/api/api
rm -rf $projectRootDirectory/src/app/api/model
echo
echo ❇️  Generating API module...
echo
# generate API module
swagger-codegen generate --config $projectRootDirectory/generate-api-config.json --input-spec api-json --lang typescript-angular --template-dir $projectRootDirectory/src/swagger-get/typescript-angular-handlebars --output $projectRootDirectory/src/app/api
echo
echo ❇️  Removing temporary files
echo
# clean up
rm api-json
rm -rf $projectRootDirectory/src/app/api/.swagger-codegen
rm $projectRootDirectory/src/app/api/.gitignore
rm $projectRootDirectory/src/app/api/.npmignore
rm $projectRootDirectory/src/app/api/.swagger-codegen-ignore
rm $projectRootDirectory/src/app/api/git_push.sh
rm $projectRootDirectory/src/app/api/ng-package.json
