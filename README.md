# simple imported script test

## purpose

The only purpose of this poc is to explore what needs to be added to a project to add jest testing.
Will start with a very simple app and add layers of testing to it and record what needs to be done here.

## steps
* npm install -g express-generator@4
* express simple-imported-script-test
* cd simple-imported-script-test
* npm install
  * (npm start  - find it at localhost:3000)
  * default app uses jade for views and routes, but also has default handling for static HTML, 
  I'm just going to have a static HTML importing a script that I'm going to bring under test
* npm install jest -g  (this gives me the jest command line testing command)
* npm install --dev jest (add it to package.json as a dev dependency)
* added __tests__ directory (although the defaul globs look like they would include tests in other directories:
testMatch: **/__tests__/**/*.js?(x),**/?(*.)+(spec|test).js?(x)  )

## todo
* add in babel config (and install babel packages) - need this for ES6 in jest, i.e. to use import 
* add jsdom so I can test script that manipulates the dom (first off one that uses window?) 
* add .gitignore 
* get this in source control so I can start doing incremental commits to track layers and allow branches
