# Web Developer Study
## 12 months web developer study. I decided to dedicate at least 12 months to learn web development.

![Begin Banner](Documentation/top-1200x350.gif)
 
# Result
![Middle Banner](/WDS-22_NPM-1_NPM_Crash_Course/wds-22.png)
   
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
    * add modules to the file.js
        * const nameConst = require('nameModule')
            * const _ = require('lodash')
    * run file
        * node nameFile.js
            * node index.js
    * after clone the projects
        * because you install with --save
            * npm install //it will install everything (modules) that needs to run your project. It going to look inside the package.json and install all dependencies.








![End Banner](Documentation/botton-1200x350.gif)   
