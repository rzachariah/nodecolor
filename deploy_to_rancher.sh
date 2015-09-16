#!/bin/bash

# TODO: this file should be obtained via wget from the circle.yml file
# Performs a rolling upgrade to the target rancher environment

if !$DEPLOY_ON_PASS; then
    echo "to enable continuous deployment, set the DEPLOY_ON_PASS in the circleCI project settings";
    exit;
fi

echo "installing the rancher-upgrade-prep tool"
git clone https://github.com/robzhu/rancher-upgrade-prep
cp -a ./rancher-upgrade-prep/. ./
npm install

echo "Deploying to rancher server: ${RANCHER_URL}"