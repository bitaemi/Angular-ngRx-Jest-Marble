<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. TOOLS for Angular Development](#1-tools-for-angular-development)
  - [1.1. Visual Studio Code](#11-visual-studio-code)
  - [1.2. Using Angular CLI for development](#12-using-angular-cli-for-development)
    - [1.2.1.Start a new project](#121start-a-new-project)
    - [1.2.2. Development server](#122-development-server)
    - [1.2.3. Code scaffolding](#123-code-scaffolding)
    - [1.2.4. Build](#124-build)
    - [1.2.5. Running unit tests](#125-running-unit-tests)
    - [1.2.6. Running end-to-end tests](#126-running-end-to-end-tests)
    - [1.2.6. Further help](#126-further-help)
    - [1.2.7. External references](#127-external-references)
- [2. Angular Notes - Features to Use](#2-angular-notes---features-to-use)
  - [2.1. Angular App Sructure](#21-angular-app-sructure)
  - [2.2. Webpack](#22-webpack)
  - [2.3. - Typescript Fundamentals](#23---typescript-fundamentals)
  - [Services](#services)
- [Modules](#modules)
- [Libs and Bundles](#libs-and-bundles)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 1. TOOLS for Angular Development

#### 1.1. Visual Studio Code

Installed extensions:

    - VS Live Share
    - npm Intellisense
    - Debugger For Chrome
    - TS Lint

MUST USE Shortcuts with VS Code:

    Shift + Ctrl + P - open comans pallet
    Ctrl + X - cut line
    Ctrl + Shift + K - delete line
    Ctrl + W - close current tab
    Alt + arrow left/right - swith to the next door tab
    Ctrl + ` - open console / terminal
    Ctrl + Shift + V - preview current file
    Ctrl + K Ctrl + O - open Directory
    q - quit/exit log screen from terminal 
    
#### 1.2. Using Angular CLI for development

##### 1.2.1.Start a new project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

or run ```ng new myNewProject```

##### 1.2.2. Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### 1.2.3. Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##### 1.2.4. Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##### 1.2.5. Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

##### 1.2.6. Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

##### 1.2.6. Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##### 1.2.7. External references

[Start an Angular 7 app](https://medium.freecodecamp.org/whats-new-in-angular-7-0-and-how-to-upgrade-f2ed22a79e28)

[Angular Crush Course](https://www.udemy.com/angular-crash-course)

[Angular in depth](https://www.udemy.com/angular-from-beginner-to-advanced)

[RxJs Reactive Programming](https://github.com/angular-university/reactive-patterns-course)


### 2. Angular Notes - Features to Use

- [Angular CLI](#using-angular-cli)
- [Visual Studio Code](#visual-studio-code)
- [Components](#components)
- [Modules](#modules)
- [Directives](#directives)
- [Services](#services)
- [Enum, Interface](#enum-interface)
- [Libraries and Bundles](#libs-and-bundles)

#### 2.1. Angular App Sructure

- e2e folder holds automated tests that simulate a real user.
- node_modules folder is purely for development (add to git ignore)

And this is where we store all the third party libraries that our application may depend upon. Now this folder is purely for development,

so when we compile our application, parts of this third party libraries are put in a bundle and deployed with our application.

Run ```npm i``` and this will install all the missing dependencies

- src folder - the actual source code of the app 
    - app - at least one module and one component inside : AppModule, AppComponent
    - assets - images, style files
    - environment -  store configurations settings for different environments
    - main.ts - the starting point of the application -this is bootstraping the main module of the app: AppModule
    - polyfills.ts, which basically imports some scripts that are required for running Angular. Because the Angular framework uses features
    
    of JavaScript that are not available in the current version of JavaScript supported by most browsers out there. So these polyfills 
    
    fill the gap between the features of JavaScript that Angular needs and the features supported by the current browsers.
    - styles.css - the global styles of the app
    - test.ts - used for setting the test env
    - edit.config - make sure that all devs in the team use the same settings in their editors
    - karma.config.js is a test runner for JavaScript code
    - package.json - e standard file that every node project has: 
        - some basic settings 
        - dependencies wich determine the libraries your app is dependent on
        - devDependencies - required for app development, not on production (includes karma dependencies for testing)
    - protractor,conf.js - a tool for running end-to-end tests for Angular
    - tsconfig.json - has a bunch of settings for TypeScript Compiler to compile .ts into .js code
    - tslint.json -  a static analize tool for .ts code (it checks for readability, maintainability, and functionality errors)

#### 2.2. Webpack 

Angular's CLI uses a tool called Webpack, which is a build automation tool. It gets all of our scripts and style sheets,combines them, puts them in a bundle, and then minifies that bundle, and this is for optimization.

Each time you change your code Webpack automatically recompiles your application and refreshes your bundles(Hot Module Replacement). 

Webpack automatically injects all the scripts into our index.html, at runtime:
    -styles.bundle.js is a container for all the styles of the app compiled into one bundle

No need to do it with Angular CLI, but just to mention it: [Set-up Webpack and Babel for your web-server](https://gist.github.com/bitaemi/d429293325696eb11aaba058fd094f67)

#### 2.3. - Typescript Fundamentals

- super set of JavaScript 
    - strong typing for safe and easy debug
    - OO features
    - compile time errors (intellicense)

    ```Npm install -g typescript```

    ```tsc --version```
    ```tsc main.ts``` - transpile main.ts into .js
    ```node main.js``` - execute the file

 #### 2.3.1. Declare variables:
   ``` var varAvailableOutsideDeclaringBlock; //scoped to the nearest function ``` or use:
   ```let varAvailableOnlyInsideDeclaringBlock; //scoped to the nearest block```

#### 2.3.2. Types

```TypeScript
    var a;
    var b;
    var c;
    var d;
    var e = [2, 3, 4];
    var f = ['sda', 4, false];
```

#### Services 
Details and Logic should be in services, not in components

```export class CourseService {
    getCousses() {
        return [c1, c2;]
    }
}
```

### Modules

Module = container of related components


### Libs and Bundles

Common libraries to include at need:

@angular/core
@angular/compiler
@angular/http
@angular/router






