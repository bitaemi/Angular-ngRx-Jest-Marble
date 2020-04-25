<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Automated tests](#automated-tests)
- [Test Driven Dev - Red, Green, Refactor](#test-driven-dev---red-green-refactor)
  - [When to Introduce TDD :](#when-to-introduce-tdd-)
  - [When NOT to Introduce TDD :](#when-not-to-introduce-tdd-)
  - [Mesure Success with TDD](#mesure-success-with-tdd)
- [Unit testing](#unit-testing)
  - [Angular Tests with Jest](#angular-tests-with-jest)
  - [Jest is better](#jest-is-better)
  - [Installation steps:](#installation-steps)
  - [SnapShot testing](#snapshot-testing)
- [Code coverage](#code-coverage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Automated tests

- sometimes QA can skip flows that can be tested automatically and regresion testing and focus on concurrency or security issues to test
- should always run on local dev
- should also run on servers on the deployment process
- each time we push on server, with the use of continuous integration server automated tests enable frequest evaluations
- CI is configuered such as all tests must pass before the code can be deployed

# Test Driven Dev - Red, Green, Refactor

TDD cycle:

1. Chaoose a small task
2. Write a failing test
3. Write simplest test to make the test pass
4. Refactor
5. Repeat from step. 1 untill the larger task is complete

TDD - is a process that can be used with integration tests, automated tests, unit tests
    - drives the development 
    - is a skill of thinking how to solve a problem, no matter the means of language


## When to Introduce TDD :

    - to solve most important tasks if can resolve internal and external quality problems
    - internal quality problems are: code mess, key people, onbording woes, growing complexity, delays due to missunderstanding of code
    - external  quality issues: large backlog of bugs, frequent reports of issues, no time for feature work, regression tests
    - thus it solves long term productivity and development engagement (dev has to ask first if that is the right way to approach the problem/task)
## When NOT to Introduce TDD :
  - team is focused on short-term productivity 
    - -> rapid prototyping -> !!! in this case: throw the prototype out after validating the ideea
    - -> speed to market

## Mesure Success with TDD

 - a) Quantitative:
  - flow metrics: cycle time, releases, cards completed
  - deploys rolled back
  - time spent on bugs ( categorizing, reproducing, fixing)
 - b) Qualitative:
- dev happiness
- team communication
- sense of ownership
- c) allocate time to see TDD results

# Unit testing

- tests last (prod code is written first, then the tests after)
- tests first (unit tests are written first, after is written the code)

## Angular Tests with Jest

## Jest is better 

Jasmine testing is slow:
 - initial build time slow
 - productivity is low
 - error messages are vague

 That's why JEST (Js testing framework with focus on simplicity) comes in:
  - code coverage out-of-the-box
  - snapshot testing
  - using jsdom under the hood
  - runs tests in parallel
  - immersive wach mode - only runs the tests associated with your git changes
  
## Installation steps:

 - 1)Remove Karma packages
 - Jasmine is also used by protractor, so you have to still keep it
 - `` npm i -D jest @types/jest jest-preset-angular``

 - 2) With Jest you can use the same assertins that you have  used with Jasmine

in package.json:

```json
"scripts": {
    // ..
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
},
"jest": {
    "preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": "<rootDir>/setupJest.js"
}
```
3) in setupJest you import jest-preset-angular package;

For automatic installs use Briebug's Angular-Jst schematics.

In console:
 - ``npm run test:watch``
 - `` jest --watch``
 -  `` jest --coverage``
 - you can run only run one test by writing title and the test name;
 - you can clear the filter and run  tests again

 ## Migrating Codebase

 - no need to change assertions
 - differences in mocking
 - jest-codemods package migrates all unit tests from Jasmine to Jest
 - jest-marbles to test RxJs and Observables
 - vscode-jest - while you are writing the tests the package tells you if tests are failing or not (puts comments)

## SnapShot testing

- take any serializable object, create a snapshot and then compare your changes with the previously taken snapshot
- if you run tests for the first time will create the snapshots automatically -> `expect(fixture).toMatchSnapshot()` assertion


# Code coverage

Code coverage = percentaged of lines executed by tests per total lines of code;

