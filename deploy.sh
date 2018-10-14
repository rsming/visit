#!/bin/sh

export CONTEXT_ROOT="visit"

npm run build

aws s3 sync "./static/" "s3://$CONTEXT_ROOT/static" --exclude ".*"
aws s3 website "s3://$CONTEXT_ROOT" --index-document index.html --error-document index.html
