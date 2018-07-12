# CircleCI

## Guide

I'm following the steps for my proeject on the circleci website:

(https://circleci.com/setup-project/gh/JasonGoemaat/google-font-picker)[https://circleci.com/setup-project/gh/JasonGoemaat/google-font-picker]

### Config

Need to create a directory `.circleci` and a file in it called `config.yml`.

Actually I'm going to start with [the one](https://github.com/codediodeio/angular-firestarter/blob/master/.circleci/config.yml) from [angular-firestarter](https://github.com/codediodeio/angular-firestarter)

It looks close to the one on my project page, but I notice they use a node 8
docker image and Angular 6 requires node 8...

Had to add `firebase-tool` to devDependencies because CircleCI needs it to
deploy and doesn't have it (and won't let you) install it globally.

    npm install --save-dev firebase-tools

### Firebase Deploy Token

I used this command to generate a deploy token:

    firebase login:ci

I'm supposed to add that to my project settings at CircleCI as an environment
variable called `$FIREBASE_DEPLOY_TOKEN`, but at this point it says to push the
changes and click 'Start building' and I don't have a CircleCI project yet.
The config only tests for now so I should be able to add it without it
trying to deploy, I'll add the deploy later.
