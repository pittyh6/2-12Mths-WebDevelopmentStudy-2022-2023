# Web Developer Study
## 12 months web developer study. I decided to dedicate at least 12 months to learn web development.

![Begin Banner](/Documentation/top-1200x350.gif)
 ## What I learned/used
* NPM
    * commandLine Terminal
        * version 
            * npm -v
            * npm --version
        * help page
            * npm
            * npm help
    * Package.json File
        * create package
            * npm init
                * package name
                * version
                * Description
                * entry point
                * test command
                * git repository
                * keywords
                * author
                * license
            * npm init --yes 
            * npm init -y 
        * Modify/config default
            * npm config set init-nameProperty "whatYouWantToAddOrChange"
                * npm config set init-author-name "Pitty" //full line code
                * npm set init-license "MIT" //dont  need to use set
                * npm init --yes
        * Get the information from the package.json file
            * npm config get init-nameProperty //full command line
            * npm get init-nameProperty // without config. Do not need write config
                * npm get init-author-name
        * delete default
            * npm config delete init-nameProperty
                * npm config delete init-author-name
            * npm init -y
    * install modules
        * npm install nameModule
        * lodash
            * npm install lodash --save //is important to put --save
    * instal specific version
        * npm  install nameModule@version
            * npm install lodash@4.17.3 --save
    * Update to the latest version
        * npm update nameModule
            * npm update lodash
    * add modules to the file.js
        * const nameConst = require('nameModule')
            * const _ = require('lodash')
    * run file
        * node nameFile.js
            * node index.js
    * dev dependencies -> only going to be used in development and for dev not in production
        * install
            * npm install --save-dev nameModule namePlugins
                * npm instal --save-dev gulp gulp-sass
    * Dependencies -> after clone the projects
        * because you install with --save
            * npm install //it will install everything (modules) that needs to run your project. It going to look inside the package.json and install all dependencies.
    * instal regular Dependencies -> after clone the projects
        * because you install with --save & --save-dev
            * npm install --production
    * UnInstall dependencies
        * uninstall, remove, rm, un
            * npm uninstall nameDependencies --save-dev
                * npm uninstall gulp-sass --save-dev
            * npm uninstall nameDependencies --save
                * npm rm lodash --save
            * npm remove nameDependencies --save-dev
    * Semantic Versioning
        * numbers
        * symbols
            * ^
            * ~ 
            * ""
            * "*"

    * GLOBAL MODULES
        * root paths
            * npm root -g
        * install
            * npm install -g nameModule // -g means globally
                * npm install -g nodemon
        * run nodemon
            * nodemon
        * stop nodemon
            * ctrl + c
        * live-server
            * install
                * npm install live-server -g
            * run
                * live-server
            * stop live
                * ctrl + c
        * UnInstall
            * npm remove -g nameModule
            * npm uninstall -g nameModule
                * npm remove -g live-server
    * list 
        * npm list //everything
        * npm list --depth 0 // for top list
        * npm list --depth 1 
        * npm list --depth 2
        * npm list --depth theNumberyouWantToCheck
    * NPM Scripts
        * "start": "node index.js"
            * run
                * npm start

        


![End Banner](/Documentation/botton-1200x350.gif)   
