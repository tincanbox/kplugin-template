## What is this

Simple Bootstrapper for kintone-plugin.

- npm
- webpack
- 


## Installation

Init your project FIRST.

DONT forget this.

    create-kintone-plugin yourproject


Add kplugin-template

    cd yourproject
    git init
    git submodule add https://github.com/tincanbox/kplugin-template.git
    git submodule update --init --force --remote --recursive


Init kplugin-template.

    ./kplugin-template/run/init


Make your watch.local file and update with your credential.

    cp ./run/watch ./run/watch.local


Confirm your src/ directory is created.

## Config

Update your
- manifest.json
- run/watch.local
- package.json

And make a first commit then push.


## Building

    npm run start



## MISC

case: update submodules and req-file contents.

    ./kplugin-template/run/update


