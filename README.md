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
* added \_\_tests\_\_ directory (although the defaul globs look like they would include tests in other directories:
testMatch: **/__tests__/**/*.js?(x),**/?(*.)+(spec|test).js?(x)  )

* copied across the following dependencies and setup from cfclanding project:
  * package.json:     
    * "@babel/core": "7.1.2",
                      "@babel/plugin-transform-regenerator": "7.0.0",
                      "@babel/preset-env": "7.1.0",
                      "babel-core": "7.0.0-bridge.0",
    "eslint-config-airbnb-base": "^13.1.0",
    "eslint-plugin-import": "^2.14.0",
    "jest-runner-eslint": "^0.7.1",
    "jsdom": "^13.0.0",
  * jest.config.json
    * {
        "collectCoverage": true,
        "coverageDirectory": "coverage",
        "collectCoverageFrom": [
          "<rootDir>/public/**/*.js",
          "!**/__tests__/**"
        ],
        "coverageThreshold": {
          "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
          }
        },
        "projects": [
          {
            "displayName": "test/site",
            "clearMocks": true,
            "testEnvironment": "jsdom",
            "rootDir": "./",
            "setupFiles": [
              "<rootDir>/__tests__/test.setup.js"
            ],
            "testMatch": [
              "<rootDir>/__tests__/*.spec.js"
            ]
          },
          {
            "runner": "jest-runner-eslint",
            "displayName": "lint",
            "testMatch": [
              "<rootDir>/public/**/*.js"
            ]
          }
        ]
      }
    * adds code coverage testing and target   
  * .gitignore
  * .jest-runner-eslint
    * {
        "cliOptions": {
          "config": ".eslintrc",
          "fix": true
        }
      }
  * .eslintrc
    * {
        "extends": [
          "airbnb-base"
        ],
        "env": {
          "node": true,
          "browser": true,
          "jest": true
        },
        "rules": {
          "import/no-extraneous-dependencies": [
            "error",
            {
              "devDependencies": [
                "**/project/**/*.js",
                "**/__tests__/**/*.js",
                "**/__mocks__/**/*.js"
              ]
            }
          ],
          "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
          "no-param-reassign": ["error", { "props": false }]
        }
      }
    * specifies what eslint linting config to use, I added no-param-reassign to get around our use of 
    param reassignment for declaring objects on the window scope, I also switched off the linkbreak-style check,
    jest automatically uses this config
    * activated eslint in intellij: File | Settings | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint
  * .eslintignore to prevent linting of the following directories: node_modules
                                                                   .hexagon
                                                                   coverage
                                                                   target
  * .babelrc
    * {
        "presets": ["@babel/preset-env"],
        "plugins": ["@babel/plugin-transform-regenerator"]
      }
          
* npm install eslint -g
* added test.setup.js to \_\_tests\_\_ directory to setup window as jsdom window
* (note I think the babel packages are required for ES6 in jest?)

## todo
* add jsdom so I can test script that manipulates the dom (first off one that uses window?) 
