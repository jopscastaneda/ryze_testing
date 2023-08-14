# ryze_testing
Technical Test for Ryze QA Application

# Framework and Tool Descriptionn

Automation framework tool used is Cypress. With Cypress, you can easily create tests for your modern web applications, 
debug them visually, and automatically run them in your continuous integration builds.
Script is written in Javascript in gherkin form, plain language so anyone can easily understand what the test exeution all about.
Page Object Model is also applied.

Cypress Automation Tool - https://www.cypress.io/

In the project repository:

See feature files under - cypress\integration

See step definition files - cypress\support\step_definitions

See page obeject file - cypress\page-objects

# Pre requites

Download and Install NODE JS - https://nodejs.org/en

Download and install Visual Studio Code - https://code.visualstudio.com/

# setup after cloning this repo
```
1. Open cloned repository in IDE Visual Studio Code
2. Open VS Code terminal run the folllowing commands
 
 npm install 
 npm install cypress --save-dev 

```

# start the test runner 
```
npx cypress open
```

# run all tests
```
npx cypress run
```

# run all tests in a single feautre file
```
npx cypress run --spec "cypress\integration\login.feature\navigate-page.feature.js"
```

# run all the feature files
```
npx cypress run --spec "cypress/integration/**/*.feature"
```1
