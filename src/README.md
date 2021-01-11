<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Automated tests](#1-automated-tests)
- [2. Test Driven Dev - Red, Green, Refactor](#2-test-driven-dev---red-green-refactor)
  - [2.1 When to Introduce TDD :](#21-when-to-introduce-tdd-)
  - [2.2 When NOT to Introduce TDD :](#22-when-not-to-introduce-tdd-)
  - [2.3 Mesure Success with TDD](#23-mesure-success-with-tdd)
- [3. Unit testing](#3-unit-testing)
  - [3.0. Simple Unit Testing Examples](#30-simple-unit-testing-examples)
  - [NgZone](#ngzone)
  - [3.1. Unit Testing Limitations -> Integration Tests](#31-unit-testing-limitations---integration-tests)
  - [3.2. Angular Tests with Jest](#32-angular-tests-with-jest)
    - [3.2.2. Jest is better](#322-jest-is-better)
    - [3.2.3. Installation steps:](#323-installation-steps)
    - [3.2.5 SnapShot testing](#325-snapshot-testing)
  - [3.3  Unit Testing RxJs with Marble Diagrams](#33--unit-testing-rxjs-with-marble-diagrams)
    - [3.3.2 Marble Syntax - RxJs Empty and Never Observables](#332-marble-syntax---rxjs-empty-and-never-observables)
    - [3.3.3 Write the first marble test](#333-write-the-first-marble-test)
  - [3.3. Model Observables using hot() or cold() methods in unit testing](#33-model-observables-using-hot-or-cold-methods-in-unit-testing)
  - [3.4. Unit testing by mocking Observable values](#34-unit-testing-by-mocking-observable-values)
  - [3.5. Testing RxJS Operators](#35-testing-rxjs-operators)
  - [3.6. Testing Business Code](#36-testing-business-code)
  - [3.7. Handling Errors and Race Conditions](#37-handling-errors-and-race-conditions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Automated testing, TDD, Unit Testing

# 1. Automated tests

- sometimes QA can skip flows that can be tested automatically and regresion testing and focus on concurrency or security issues to test
- should always run on local dev
- should also run on servers on the deployment process
- each time we push on server, with the use of continuous integration server automated tests enable frequest evaluations
- CI is configuered such as all tests must pass before the code can be deployed
- Code coverage = percentage of lines executed by tests per total lines of code;


# 2. Test Driven Dev - Red, Green, Refactor

TDD cycle:

1. Chaoose a small task
2. Write a failing test
3. Write simplest test to make the test pass
4. Refactor
5. Repeat from step. 1 untill the larger task is complete

TDD - is a process that can be used with integration tests, automated tests, unit tests
    - drives the development 
    - is a skill of thinking how to solve a problem, no matter the means of language


## 2.1 When to Introduce TDD :

    - to solve most important tasks if can resolve internal and external quality problems
    - internal quality problems are: code mess, key people, onbording woes, growing complexity, delays due to missunderstanding of code
    - external  quality issues: large backlog of bugs, frequent reports of issues, no time for feature work, regression tests
    - thus it solves long term productivity and development engagement (dev has to ask first if that is the right way to approach the problem/task)
## 2.2 When NOT to Introduce TDD :
  - team is focused on short-term productivity 
    - -> rapid prototyping -> !!! in this case: throw the prototype out after validating the ideea
    - -> speed to market

## 2.3 Mesure Success with TDD

 - a) Quantitative:
  - flow metrics: cycle time, releases, cards completed
  - deploys rolled back
  - time spent on bugs ( categorizing, reproducing, fixing)
 - b) Qualitative:
- dev happiness
- team communication
- sense of ownership
- c) allocate time to see TDD results

# 3. Unit testing

Unit testing means testing the component in isolation

- tests last (prod code is written first, then the tests after)
- tests first (unit tests are written first, after is written the code)

## 3.0. Simple Unit Testing Examples

- no integration with template, file system, database, services, routes
  - in test.ts set the context just the learn-unit-testing path
```TypeScript
const context = require.context('./app/modules/learn-unit-testing/components/', true, /\.spec\.ts$/);
```
 or for  pipes: 
 ```TypeScript
const context = require.context('./app/pipes/', true, /\.spec\.ts$/);
```
  - in console run `ng test` - we use Jasmine framework to write our tests and the Karma engine which will open up a browser window with running tests results
  - to generate the code coverage reports:
  `ng test --no-watch --code-coverage` - this runs test and creates a folder `coverage` in main directory containing coverage reports
  - define as many tests as there are execution paths for all methods of the component
  - a test or spec is defined by it() function
  - each test should run in an isolated world

Example of component testing:  

- [Setup methods for testing](./app/modules/learn-unit-testing/README.md#setup-methods-for-testing)
- [Test component that has injected a FormBuilder](./app/modules/learn-unit-testing/README.md#test-component-that-has-injected-a-formbuilder)
- [Test a component with event emitter](./app/modules/learn-unit-testing/README.md#test-a-component-with-event-emitter)
- [Test a component that has an injected service](./app/modules/learn-unit-testing/README.md#test-a-component-that-has-an-injected-service)

## NgZone

```TypeScript
export class QuestionsIndexComponent
{
  n: number = 0;
  // if you do not need your data update in the view constantly, for operations that happen inside a component
  // then, you would use ngZone - here you will get updated data of component only when click event triggers method1 of component
  constructor(@Inject(NgZone) private zone: NgZone)
  {
    this.zone.runOutsideAngular( () => {
      // run this code in the background, outside Angular Zone - thus outside component's zone => component view does not get updated via data binding (e.g {{n}} in the html template)
      setInterval( () => {
        this.n = this.n + 1;
        console.log(this.n);
      }, 300);
    } );
  }

  method1()
  {
  }
```
```HTML
<span>{{n}}</span>
  <input type="button" value="Click me" (click)="method1()">
```
## 3.1. Unit Testing Limitations -> Integration Tests

- [Integration testing examples](./app/modules/learn-unit-testing/README.md#integration-testing-examples)
  - template bindings: [Testing Templates](./app/modules/learn-unit-testing/README.md#testing-templates)
  - routing: [Testing Navigation](./app/modules/learn-unit-testing/README.md#testing-navigation)
  - [Testing Directives](./app/modules/learn-unit-testing/README.md#testing-directives)
  - [Dealing with asynchronous operations](./app/modules/learn-unit-testing/README.md#dealing-with-asynchronous-operations)



## 3.2. Angular Tests with Jest

### 3.2.2. Jest is better 

Jasmine testing is slow:
 - initial build time slow
 - productivity is low
 - error messages are vague

 That's why JEST (Js testing framework with focus on simplicity) comes in:
  - code coverage out-of-the-box
  - snapshot testing
  - using jsdom under the hood
  - runs tests in parallel
  - immersive watch mode - only runs the tests associated with your git changes
  
### 3.2.3. Installation steps:

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
 - you can run only run one test by writing  test name and press enter;
 - you can clear the filter and run  tests again

 ### 3.2.4 Migrating Codebase

 - no need to change assertions
 - differences in mocking
 - jest-codemods package migrates all unit tests from Jasmine to Jest
 - jest-marbles to test RxJs and Observables
 - vscode-jest - while you are writing the tests the package tells you if tests are failing or not (puts comments)

### 3.2.5 SnapShot testing

- take any serializable object, create a snapshot and then compare your changes with the previously taken snapshot
- if you run tests for the first time will create the snapshots automatically -> `expect(fixture).toMatchSnapshot()` assertion

## 3.3  Unit Testing RxJs with Marble Diagrams

```Bash
npm i -D jasmine-marbles # install jasmine marbles library as a dev dependency
``` 

- test Observable synchronously
- make Observable stream predictable
- mock Observable predicted values
- Marble testing makes your code redable - visualy see the values emitted by the Observable
- allow to write asyn tests in a sync way
- helps to find out race conditions in your code

 - Reactive Extension for Javascript (RxJs) - lib for reactive programming using Observables (streams of data) that makes it easier to compose asynchronous code
 - Marble Testing =  a technique where we draw marble diagrams using ASCII characters while writing unit tests to visualize asynchronous Observables behaviour in a synchronous way
 - model Observables
 - model subscriptions
 - marble = piece of data
 - marbles are drawn over timeline - time ellapsed
 - timeline is composed of time frames - virtual time 
 - LEFT --------------TIME FRAME = 10 ms of time------------------------> RIGHT
 - max 740 frames/project

 ### 3.3.1 Marble Syntax Symbols

 - `-` = time =  each frame  = 10 ms of time
 - `|` = the successful completion of an observable
 - `#` =  an error terminating the observable
 - `^` = subscription point to the hot observable
 - `!` = unsubscription point
 - `a` = any character value being emitted  by the producer
 - `()` = emit a single grouped value on the same timeframe

 examples: 
 - -------O-----1----2|---->  it means emit 3 valus and complete
 - -------0-----1-----X----> it means emit 2 values and error


 ### 3.3.2 Marble Syntax - RxJs Empty and Never Observables

 - "|" - EMPTY - emits no items but terminates normally
 - "-" or "-----" - NEVER emits any item and never terminates normally

### 3.3.3 Write the first marble test

For following Unit Testing RxJs with Marble Diagrams tutorial stop the app and start it using:

- `npm start` - this will start fake JSON server at port 3000 and Angular App at port 4200
- `npm i -d jasmine-marbles` - install on dev dependencies to enable 

- also make sure you have the setup-jest.ts file and the corresponding config in place and after that you can run `npm test`

- marbles syntax offers:

```
- visual testing
- synchronous testing
- supports Jasmine
- mocks Observables
- virtual time
- custom matcher
```

in marble-syntax.spec.ts model observables using cold method and marble operators:

```TypeScript
describe('Marble Syntax', () => {
  describe('EMPTY', () => {
    it('emits no items but terminates normally', () => {
      const provided = EMPTY;  // make the constant for EMPTY observable
      const expected = cold('|'); // make the constant for expected observable using the cold function from marble lib;
      // the assertion will be:
      expect(provided).toBeObservable(expected);
    });
  });

  describe('NEVER', () => {
    it('emits no items and does not terminate', () => {

      const provided = NEVER;
      const expected = cold('-');

      expect(provided).toBeObservable(expected);

      const expected1 = cold ('----');

      expect(provided).toBeObservable(expected1);
    });
  });
});

```
## 3.3. Model Observables using hot() or cold() methods in unit testing

- [Model Observables using hot() or cold() methods in unit testing](./hot-cold/README.md)
  - [1. HOT Observables](./hot-cold/README.md#1-hot-observables)
  - [2. COLD Observables](./hot-cold/README.md#2-cold-observables)
  - [3. Frames in Jasmine and Marble Diagrams](./hot-cold/README.md#3-frames-in-jasmine-and-marble-diagrams)
  - [4. Testing COLD Observables](./hot-cold/README.md#4-testing-cold-observables)
  - [5. Testing Hot Observables:](./hot-cold/README.md#5-testing-hot-observables)

## 3.4. Unit testing by mocking Observable values 
 - [Unit testing by mocking Observable values](./hot-cold/README.md#2-unit-testing-by-mocking-observable-values)

## 3.5. Testing RxJS Operators
  - [Concat](./rxjs-operators/README.md#concat)
  - [Zip](./rxjs-operators/README.md#zip)

## 3.6. Testing Business Code

- [Run async tests in a sync manner using Test Scheduler](./test-scheduler/README.md#run-async-tests-in-a-sync-manner-using-test-scheduler)
- [Race Condition](./test-scheduler/README.md#race-condition)
- [Debounce Time](./test-scheduler/README.md#debounce-time)

## 3.7. Handling Errors and Race Conditions

- [Why Handle Errors](./errors-syntaxes/README.md#why-handle-errors)
- [Marble testing for errors](./errors-syntaxes/README.md#marble-testing-for-errors)