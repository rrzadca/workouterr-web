#!/usr/bin/env bash

echo START generate API

projectRootDirectory=$(git rev-parse --show-toplevel)
projectApiDirectory=$projectRootDirectory/src/app/api

echo
echo $projectRootDirectory
echo $projectApiDirectory
echo

echo GET API DOC json
wget "http://localhost:3000/api/doc.json"

echo remove API dir
rm -rf "$projectApiDirectory"

echo GENERATE......

openapi-generator-cli generate \
  --generator-name typescript-angular \
  --output "$projectApiDirectory" \
  --input-spec doc.json \
  --config "$projectRootDirectory"/bin/generate-api-config.json \

rm doc.json
rm -rf "$projectApiDirectory"/.openapi-generator
rm "$projectApiDirectory"/.gitignore
rm "$projectApiDirectory"/.openapi-generator-ignore
rm "$projectApiDirectory"/git_push.sh
rm "$projectApiDirectory"/README.md



