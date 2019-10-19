
Init your project

    create-kintone-plugin yourproject


Add kplugin-template

    cd yourproject
    git init
    git submodule add https://github.com/tincanbox/kplugin-template.git
    git submodule init --recursive


Init kplugin-template.

    ./kplugin-template/run/init


Make your watch.local file and update with your credential.

    cp ./run/watch ./run/watch.local


Confirm your src/ dir is replaced.
Then edit your manifest.json, package.json and make first commit.


case: update submodules and req-file contents.

    ./kplugin-template/run/update


