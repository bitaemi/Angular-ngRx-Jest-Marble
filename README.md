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
  - [2.3. Typescript Fundamentals](#23-typescript-fundamentals)
    - [2.3.2. Types](#232-types)
    - [2.3.3. Type Assertions](#233-type-assertions)
    - [2.3.4. Arrow Functions](#234-arrow-functions)
    - [2.3.5. Interfaces](#235-interfaces)
    - [2.3.6. Classes, Objects, Constructors](#236-classes-objects-constructors)
    - [2.3.7. Access modifiers, Properties](#237-access-modifiers-properties)
    - [2.3.8. Modules](#238-modules)
- [3. Angular Fundamentals](#3-angular-fundamentals)
  - [3.1. Building Blocks of Angular App](#31-building-blocks-of-angular-app)
  - [3.2. Component](#32-component)
    - [3.2.1. Create a component:](#321-create-a-component)
    - [3.2.2. Register it in a module:](#322-register-it-in-a-module)
    - [3.2.3. Add an element to the HTML markup](#323-add-an-element-to-the-html-markup)
    - [3.2.4. Generate Component Using Angular CLI](#324-generate-component-using-angular-cli)
  - [3.3. Templates](#33-templates)
  - [3.4. Directives](#34-directives)
  - [3.5. Services](#35-services)
  - [3.6. Dependency Injection](#36-dependency-injection)
  - [3.7. Generating Services Using Angular CLI](#37-generating-services-using-angular-cli)
- [Libs and Bundles](#libs-and-bundles)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 1. TOOLS for Angular Development

#### 1.1. Visual Studio Code

Installed extensions:

    - VS Live Share
    - npm Intellisense
    - Debugger For Chrome
    - TS Lint
    - Auto Import

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

```npm i -g @angular/cli``` - instal Angular Command Line Interface
```npm i -g typescript``` - install typescript (tsserver and tsc compiler)

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

#### 2.3. Typescript Fundamentals

- super set of JavaScript 
    - strong typing for safe and easy debug
    - OO features
    - compile time errors (intellicense)

    ```npm install -g typescript```

    ```tsc --version```
    ```tsc main.ts``` - transpile main.ts into .js
    ```node main.js``` - execute the file
    ```tsc main.ts && node main.js``` - combine multiple commands with &&
    ```tsc *.ts --target ES5 && node main.js``` 
 ##### 2.3.1. Declare variables:
   ``` var varAvailableOutsideDeclaringBlock; //scoped to the nearest function ``` or use:
   ```let varAvailableOnlyInsideDeclaringBlock; //scoped to the nearest block```

##### 2.3.2. Types

```TypeScript
    var a;
    var b;
    var c;
    var d;
    var e = [2, 3, 4];
    var f = ['sda', 4, false];

    const ColorRed = 1;
    const ColorGreen = 2; //too verbose, so for this in OO lang we use enum:
    enum Color = { Red = 1, Green = 2, Blue = 3};
    var bgColor = Color.Red;
```
##### 2.3.3. Type Assertions
    Specify the type of the variable so you can access the intellicence
```TypeScript
    let stringVariable;
    stringVariable = 'abs';
    let endsWith = (<string>message).endsWith('s');
    let alternativeWay = (message as string).endsWith('s');
```
##### 2.3.4. Arrow Functions
```TypeScript
    let log = function(message) {
        console.log(message);
    }
 //or, less verbose, nice and clean way to define functions:
 let arrowFunction = (message) => console.log(message);
```
##### 2.3.5. Interfaces

Use interface to define properties of objects:

```TypeScript
//Whith this interface I'm defining the shape of an object
interface Point {
    x: number, 
    y: number,
    draw: () => void
};

let drawPoint = (point: Point) => {
    //...
};

drawPoint({
    x: 1,
    y: 2
});
```
```point: Point``` is a type annotation

Interfaces are purely for declarations.

##### 2.3.6. Classes, Objects, Constructors

Cohesion = things related should go together => Introduse classes. A class groups fproperties and functions that are highly related.

```TypeScript
class Point {
    x: number;
    y: number;
    
    //an unique constructor - add optional params using '?'
    //the method called each time we create an instance of this class:
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    };

    draw() {
        console.log('Trows an err if I log '+ this.x + 'without instantiating the class');
    };

    getDistance() {
        //...
    };
};

let point = new Point(); //no error for missing params because they are optional
point.draw();
```
##### 2.3.7. Access modifiers, Properties

Access modifiers: private, public and protected - apply them on fields(_x, _y), properties and methods(x, y) to restrict access to those members

```TypeScript
    class Point {
    private x: number; //use private only at need
    y: number;
    }

    //no need to specify 'public' access modifier because is the default one
    public draw() {
        //...
    };
    let point = new Point(); 
    point.x = 3; //trows an error
```
The clean approach for the Point class declaration is to prefix the parameters of the constructor with the access modifier:
```TypeScript
    class Point {
        //TypeScript compiler will generate the x and y fields for us
        //!if we want public fields we HAVE TO SPECIFY the public access modifier
        constructor(private _x?: number, private _y?: number) {
        }
        //..
        //define the getter method to read private members of the class from outside
        get x() {
            return this._x;
        }
        //define the setter method to allow some restricted access from outside the class
        set x(value) {
            if (value < 0)
                throw new Error('values cannot be less than 0.');
            this._x = value;
        }
    }

     let point = new Point(); 
     let x = point.x; //access x property of the class
     point.x = 10; //apply the setter method
``` 
##### 2.3.8. Modules

Module = container of related components. A module is a file with an export class declaration:

point.ts file:
```TypeScript
    export  class Point {
        constructor(private _x?: number, private _y?: number) {
        }
    //...
    }
```
main.ts file:
```TypeScript
import { Point } from './point';
//...
```
In each file, we export one or more types, these types can be classes, functions, simple variables or objects, and whenever we need to use these types, we need to import them first.
### 3. Angular Fundamentals

#### 3.1. Building Blocks of Angular App

A COMPONENT = encapsulates : the DATA, HTML template and the LOGIC

Example of componets tree: 
    -App
        - Navbar
        - Sidebar
        - Courses
            - Course
            - Course
            ...

A MODULE = A CONTAINER, A GROUP OF RELATED COMPONENTS

Example of modules:

- Courses MODULE
- Messaging MODULE
- Instructor MODULE (includes all the components for the instructor dashboard wich you don't see)
- Admin MODULE (The area of the side managed by site admins)

#### 3.2. Component

   ##### 3.2.1. Create a component:

```TypeScript
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //in the HTML template is <courses> element
    template: '<h2>Courses</h2>',
})

export class CoursesComponent {

}
```
   ##### 3.2.2. Register it in a module:
        In app.module.ts, add in declarations section, your component name and press enter to automatically import on top of module file:
```TypeScript
        @NgModule({
  declarations: [
    //...
    CoursesComponent
    //...
```
   ##### 3.2.3. Add an element to the HTML markup
    Replace:
 ```template: '<h2>Courses</h2>',``` from @Component declaration with an external template file: courses.component.html and include your element there:

 ```HTML
    <courses></courses>
```
   ##### 3.2.4. Generate Component Using Angular CLI

   Avoid Writing Boiler-Plate Code using the reliable way to create a new component:

   ```ng g c course``` - generate a component named courses 
  
  #### 3.3. Templates
Bind the view to fields from the component using ```{{}}``` syntax - add inside any valid Javascript, using string interpolation: ```{{ "List of " + title + getWebsite()}}```. When the values of fields change the view is automatically notified and updated. 

```TypeScript
  @Component({
    selector: 'courses', //in the HTML template is <courses> element
    template: '<h2>{{ "List of " + title + getWebsite()}}</h2>',//render dinamically in the template the value of the expression - data binding
})

export class CoursesComponent {
    title = " courses ";
    website = " udemy ";

    getWebsite() {
        return this.website;

    }
}
```
 #### 3.4. Directives

```ngFor```
To manipulate the DOM, we use special blocks called directives inside the HTML templates. Use directives to:
 - add/remove DOM elements - change the structure of the DOM - in this case you have to prefix the directive with ```*``` (```*ngFor```)
 - change the class of a DOM element
 - change style of a DOM element
 ...

```TypeScript
  @Component({
    selector: 'courses', 
    template: `
    <h2> {{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    `
})

export class CoursesComponent {
   title = "List of courses ";
   courses = ["course1", "course2"] ;
}
```
#### 3.5. Services

Details and Logic should be in services, not in components:

```TypeScript
export class CourseService {
    getCousses() {
        return [c1, c2;]
    }
}
```
#### 3.6. Dependency Injection
#### 3.7. Generating Services Using Angular CLI

### Libs and Bundles

Common libraries to include at need:

@angular/core
@angular/compiler
@angular/http
@angular/router






