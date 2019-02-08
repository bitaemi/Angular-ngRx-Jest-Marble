<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Angular for busy devs](#angular-for-busy-devs)
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
      - [3.5.1. Services and Dependency Injection](#351-services-and-dependency-injection)
      - [3.5.2. Generating Services Using Angular CLI](#352-generating-services-using-angular-cli)
  - [4. Displaying Data and Handling Events](#4-displaying-data-and-handling-events)
    - [4.1. Property Binding](#41-property-binding)
    - [4.2. Attribute Binding](#42-attribute-binding)
    - [4.3. Adding Bootstrap](#43-adding-bootstrap)
    - [4.4. Class binding and Style Binding](#44-class-binding-and-style-binding)
    - [4.5. Event Binding](#45-event-binding)
    - [4.6. Event Filtering](#46-event-filtering)
    - [4.7. Template variables](#47-template-variables)
    - [4.8. Two way data-binding](#48-two-way-data-binding)
    - [4.9. Pipes](#49-pipes)
  - [5. Building Reusable Components](#5-building-reusable-components)
      - [5.1. Component API, Input and Output Properties](#51-component-api-input-and-output-properties)
      - [5.2. Templates and Styles](#52-templates-and-styles)
    - [5.3. View Encapsulation](#53-view-encapsulation)
    - [5.4. ngContent and ngContainer](#54-ngcontent-and-ngcontainer)
  - [6. Directives](#6-directives)
    - [6.1. Built-In Directives](#61-built-in-directives)
      - [ngIf](#ngif)
      - [Hidden Property](#hidden-property)
      - [ngSwitch Case](#ngswitch-case)
      - [ngFor](#ngfor)
      - [ngFor and Change Detection](#ngfor-and-change-detection)
      - [ngFor and trackBy](#ngfor-and-trackby)
      - [The Leading Asterisk](#the-leading-asterisk)
      - [ngClass](#ngclass)
      - [ngStyle](#ngstyle)
      - [Safe Traversal Operator](#safe-traversal-operator)
        - [Creating Custom Directives](#creating-custom-directives)
  - [7. Template driven forms](#7-template-driven-forms)
    - [7.1. Building a Bootstrap Form](#71-building-a-bootstrap-form)
    - [7.2. Types of forms](#72-types-of-forms)
    - [7.3. Adding Validation](#73-adding-validation)
    - [7.4. Specific validation errors](#74-specific-validation-errors)
    - [7.8. Styling Invalid Input Fields](#78-styling-invalid-input-fields)
    - [7.9. ngForm](#79-ngform)
    - [7.10. NgModelGroup](#710-ngmodelgroup)
    - [7.11. Control Classes and Directives](#711-control-classes-and-directives)
    - [7.12. Disabling the Submit Button](#712-disabling-the-submit-button)
    - [7.13. Working with Check Boxes](#713-working-with-check-boxes)
    - [7.14. Working with Drop-Down Forms](#714-working-with-drop-down-forms)
    - [7.15. Working with Radio Buttons](#715-working-with-radio-buttons)
  - [8. Reactive forms](#8-reactive-forms)
    - [8.1. Implementing Custom Validation](#81-implementing-custom-validation)
    - [8.2. Asynchronous Operations and Validation](#82-asynchronous-operations-and-validation)
    - [8.3. Validating the form upon submit](#83-validating-the-form-upon-submit)
    - [8.4. Nested FormGroups](#84-nested-formgroups)
    - [8.5. FormArray](#85-formarray)
    - [8.6. FormBuilder](#86-formbuilder)
  - [9. Consuming HTTP Services](#9-consuming-http-services)
  - [10. Routing and Navigation](#10-routing-and-navigation)
    - [10.1. Configure Routes](#101-configure-routes)
    - [10.2. RouterOutlet](#102-routeroutlet)
    - [10.3. RouterLink](#103-routerlink)
    - [10.3. RouterLinkActive](#103-routerlinkactive)
    - [10.4. Getting the Route Parameters](#104-getting-the-route-parameters)
    - [10.5. Routes with multiple parameters](#105-routes-with-multiple-parameters)
    - [10.6. Query Parameters](#106-query-parameters)
    - [10.8. SwitchMap Operator](#108-switchmap-operator)
    - [10.9. Programmatic navigation](#109-programmatic-navigation)
- [NgRx Implementation](#ngrx-implementation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

##  Angular for busy devs

### 1. TOOLS for Angular Development

#### 1.1. Visual Studio Code

Install node:

`npm i`

`npm node-sass`

Installed extensions:

  VS Live Share

  npm Intellisense

  Debugger For Chrome

  TS Lint

  Auto Import

  Sass

  Npm

MUST USE Shortcuts with VS Code:

    Shift + Ctrl + P - open commands pallet
    Ctrl + X - cut line
    Ctrl + Shift + K - delete line
    Ctrl + W - close current tab
    Alt + arrow left/right - switch to the next door tab
    Ctrl + ` - open console / terminal
    Ctrl + Shift + V - preview current file
    Ctrl + K Ctrl + O - open Directory
    q - quit/exit log screen from terminal
    Ctrl + P and type a distinctive file name fragment e.g. authors.html
    Ctrl + . when cursor is over the name of the class/interface you want to import
    Ctrl + K + W - close all tabs
    Ctrl + Tab keep Ctrl pressed and use Tab or up/down arrows to navigate between opened files
    Shift + Ctrl + O - go to method

#### 1.2. Using Angular CLI for development

```npm i -g @angular/cli``` - install Angular Command Line Interface
```npm i -g typescript``` - install typescript (ts server and tsc compiler)

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

Sometimes rebuild of some components is required. For example, after installing node v11.5.
  had to run with admin rights: npm --add-python-to-path='true' --debug install --global windows-build-tools


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
  polyfills.ts, which basically imports some scripts that are required for running Angular. Because the Angular framework uses features

    of JavaScript that are not available in the current version of JavaScript supported by most browsers out there. So these polyfills

    fill the gap between the features of JavaScript that Angular needs and the features supported by the current browsers.

  - styles.css - the global styles of the app

  - test.ts - used for setting the test env

  - edit.config - make sure that all devs in the team use the same settings in their editors

  - karma.config.js is a test runner for JavaScript code

  - package.json - e standard file that every node project has:

    - some basic settings

    -  dependencies which determine the libraries your app is dependent on

    -  devDependencies - required for app development, not on production (includes karma dependencies for testing)

  - protractor.conf.js - a tool for running end-to-end tests for Angular

  - tsconfig.json - has a bunch of settings for TypeScript Compiler to compile .ts into .js code

  - tslint.json -  a static analize tool for .ts code (it checks for readability, maintainability, and functionality errors)


#### 2.2. Webpack

Angular's CLI uses a tool called Webpack, which is a build automation tool. It gets all of our scripts and style sheets,combines them, puts them in a bundle, and then minifies that bundle, and this is for optimization.

Each time you change your code Webpack automatically recompiles your application and refreshes your bundles(Hot Module Replacement).

Webpack automatically injects all the scripts into our index.html, at runtime:
  tyles.bundle.js is a container for all the styles of the app compiled into one bundle

No need to do it with Angular CLI, but just to mention it: [Set-up Webpack and Babel for your web-server](https://gist.github.com/bitaemi/d429293325696eb11aaba058fd094f67)

#### 2.3. Typescript Fundamentals

- super set of JavaScript
  strong typing for safe and easy debug
  OO features
  compile time errors (intellicense)

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

Cohesion = things related should go together => Introduce classes. A class groups properties and functions that are highly related.

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

A COMPONENT = encapsulates : the DATA, HTML template and the PRESENTATION LOGIC

Example of componets tree:
  pp
      Navbar
      Sidebar
      Courses
          Course
          Course
            ...

A MODULE = A CONTAINER, A GROUP OF RELATED COMPONENTS

Example of modules:

- Courses MODULE
- Messaging MODULE
- Instructor MODULE (includes all the components for the instructor dashboard which you don't see)
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
courses; //add required fields of the component
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
    title = ' courses ';
    website = ' udemy ';

    getWebsite() {
        return this.website;

    }
}
```
 #### 3.4. Directives

```*ngFor```
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
        <li *ngFor="let course of courses; index as i">
        {{ i }} - {{ course.name }}
        </li>
    </ul>
    `
})

export class CoursesComponent {
   title = 'List of courses ';
   courses = [
        { id: 1, name: 'course1'},
        { id: 2, name: 'course2'}
   ]
```
#### 3.5. Services

##### 3.5.1. Services and Dependency Injection

Details and Logic required in multiple places should be in services, not in components:

Naming convention: courses.service.ts:

```TypeScript
export class CourseService {
    getCousses() {
        return [c1, c2;]
    }
}
```
Our service should be injectable to decouple the component from the service logic. Inject the service into the component's constructor:

```TypeScript
courses; //add required fields for the component
constructor(service: CoursesComponent) {
    this.courses = service.getCousses();
}
```
Angular will automatically instantiate component's dependencies and inject those dependencies into the constructor when a new instance of the component is created because Angular has a dependencies injection framework built into it.

In order for that to work, we need to register dependencies in the module's **providers**.

app.module.ts:

```TypeScript
//...
@NgModule({
    //...
    providers: [
        //..
        CoursesService //Enter and autocomplete will include the service file on top of module's file
    ]
})
```
When you register a dependency as a provider in a module, Angular will create **a single instance** of that service class for that entire module.

So imagine in this module we have 100 components and 50 of these components need the courses's service.

**In the memory we're going to have only a single instance of courses service** and Angular will pass the same instance to all its components =>

Service is a Singleton.

SINGLETON PATTERN (use it for caching and optimization resons).

Also, when unit testing we can create fake instances of the service, and not use the HTTP service on the back-end.

##### 3.5.2. Generating Services Using Angular CLI

```ng g s email``` -  generate the email service

This willl generate an injectable service. We need the ```@Injectable()``` decorator function to be applied if this service has dependencies in its constructor.

```TypeScript
//...
    @Injectable()
    export class EmailService {
        constructor(logService: LogService) {
        }
        //..
    }
```
### 4. Displaying Data and Handling Events

 #### 4.1. Property Binding

 INTERPOLATION =  ```{{}}``` syntax for binding data inside the HTML component - when Angular compiles the templates translates these interpretations into **property binding**.

 ```HTML
    <img src="{{imageUrl}}" />
    ```
 PROPERTY BINDING - bind a property of DOM element to a field or a property in the component.

```HTML
    <img [src] = "imageUrl" />
```
where src is a DOM property and the imageUrl is a field in the component:

```TypeScript
export class CoursesComponent {
    imageUrl = "http://lorepixel.com/400/200";
}
```
So the result of interpolation is the same with the one of property binding.

Property binding works only one way: from component to the DOM. Any update from component will update the DOM, but any changes in the DOM are not reflected back into the component.

 #### 4.2. Attribute Binding

DOM =  a tree model of objects in memory. HTML is a markup language that we use to represent DOM in text.

Most of the HTML attributes have a one to one mapping to propperties of DOM objects, but we have a few exceptions, e.g. colspan attr:

```HTML
<!-- target the colspan attribute of the HTML element because we don't have a colspan property in DOM -->
<td [attr.colspan] = "colSpan"></td>
```
#### 4.3. Adding Bootstrap

Get more info about this great CSS library from [getbootstrap.com](http://getbootstrap.com)

Add bootstrap and store it in the node_modules folder, running:

```npm i bootstrap --save```

The save flag adds bootstrap as a dependency in package.json

In the main style.sass file add the import of the minified css framework located in node_modules:

```scss
@import "~bootstrap/dist/css/bootstrap.min.css"
```

#### 4.4. Class binding and Style Binding

Add the .active class to the HTML element, dinamically, based on the  isActive condition (isActive is a boolean field in the component):
```HTML
<button class="btn btn-primary" [class.active]="isActive"></button>
```

- Apply inline style based on a condition
- Use [HTML DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp) to find and see the properties of the 'Style' Object


```HTML
<button [style.backgroundColor]="isActive ? 'blue' : 'white'"></button>
```
#### 4.5. Event Binding

We bind the click event to a method in our component.
Sometimes we need to get access to the event object that was raised in the event handler, for example with mouse movements the event object

will tell us that x and y position. To get access to that event object we need to pass the ```$event``` as a parameter here to the method.

```$event``` is the standard DOM event object seen in vanila JavaScript.

```HTML
<div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
</div>
```
All the DOM events bubble up the DOM tree (from the inner element to the outer element), unless a handler along the way prevents further bubbling.

```TypeScript

onDivClicked() {
    console.log('Div was clicked');
}

onSave($event) {
    $event.stopPropagation(); //this will prevent the parser engine to go up in the DOM tree to handle the next click event
    console.log('Button was clicked: ', $event);
}

```
Console log: I: Button was clicked: Mouse Event {...}

The EVENT QUEUE: button click, div click

#### 4.6. Event Filtering

In Angular, when handleing an event we can apply a filter.
```HTML
<input (keyup.enter)="onKeyUp($event)" />
```

#### 4.7. Template variables

To get the value typed into the input field:
I) pass the ```$event``` object to the method and read the value using ```$event.target.value``` or faster:

II) in Angular we can **declare variables in the template**: ```#variableName```, that reference the input field, and read the value of the variable with:
```variableName.value```

```HTML
<input #email (keyup.enter)="onKeyUp(email.value)" />
```
#### 4.8. Two way data-binding

In OOP we do not pass unnecessary parameters to methods, so in components we use fields.

For two-way binding from the component to DOM and from DOM to component, we use the ```ngModel ``` directive.

```HTML
<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
```
in the module file:
```import { FormsModule } from '@angular/forms';```
and add the FormsModule to @ngModule's imports array.
#### 4.9. Pipes

Another Building block in Angular is PIPES - used to format data.

Buit-in PIPES:

      uppercase

      lowercase

      decimal

      currency

      percent

PIPES are chainable.
 Supply arguments to some pipes using `:`

```HTML
<div>{{ course.title | uppercase}}
<!-- supply: (number of integer digits - adds 0 in front if we specify more)
.(min-max digits number after the decimal point): -->
{{ course.title | number: '1.2-2' }}
<!-- displays the currency sign and formats the value: -->
{{ course.price: currency:'AUD':true:'3.2-2' }}
{{ course.releaseDate | date: 'shortDate }}
```
 - no need to import ```CommonModule``` in your module's imports because the ``BrowserModule`` import brings the CommonModule

    **Custom Pipes**

```html
{{ text | summary : 10 }}
```
Nameing convention: summary.pipe.ts holds pipe's implementation
```TypeScript
    import { Pipe, PipeTransform } from '@angular/core';
    //apply a pipe decorator:

    @Pipe({
        name: 'summary'
    })
    //the pipe class should have the exact form as PipeTransform interface
    export SummaryPipe implements PipeTransform {
        transform(value: string, limit: number) {
            if (!value) {
                return null;
            }
            let actualLimit = (limit)? limit : 50;
            return value.substring(0, limit ) + '...';
        }
    }
```
Also add the SummaryPipe in the module's @ngModule declarations array.

or simply generate your pipe files: ```ng g p title-casing```
### 5. Building Reusable Components

   ##### 5.1. Component API, Input and Output Properties


To make a component more reusable we add input and output properties.
We use input properties e.g. ```[notFavorite]``` to pass input or STATE to a component and we use OUTPUT properties e.g. ```(change)``` to RAISE/PRODUCE/YEILD EVENTS from these custom components.

   Inside outer's component template we include inner components like:

```HTML
   <app-favorite [notFavorite]="post.notFavorite" (change)="onFavoriteChange()"></app-favorite>
```
    where:
          post is a field with notFavorite property, inside the outer component.
          [notFavorite] is the input field in the inner component:
```TypeScript
    export class FavoriteComponent implements OnInit {

    @Input() notFavorite: boolean;
    //...
```
   Input Propertie is another decorator in Angular for marking fields and properties as input properties.

   Aliasing input properties:

```TypeScript
    //..
        @Input('not-favorite') notFavorite: boolean;
    //...
```
We keep the contract of the component stable using the aliass 'not-favorite'. In the HTML template we give the input field like ```['not-favorite']``` and if notFavorite is

changed to another name in the component, the template won't brake if you use the allias input field, but you still have to manually refactor the templates.

We use the OUTPUT propertie ```(change)``` to RAISE a change EVENT from the favorite component and capture the output in the outer component (app.component.ts):

```HTML
    <app-favorite [notFavorite]="post.notFavorite"  (change)="OnFavoriteChange($event)"></app-favorite>
```
   The ```$event``` is a JS object that has the property called: ```newObjProperty```because the ``(change)`` output
```TypeScript
//import the output decourator function
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class FavoriteComponent implements OnInit {

 //..
  @Output() change = new EventEmitter();
  //..
  clickFavor() {

    this.change.emit({newObjProp: this.notFavorite});
    //..
  }
```
In the outer component we have:

```TypeScript

onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed:', eventArgs );
  }
```

 Aliasing Output properties :

 ```TypeScript
     //..
  @Output(changeAliass) newChangeEvent = new EventEmitter();
  //..
  ```
  ``change`` is the allias wich will work if is used when calling the inner component in the template of the outer component:

  ```HTML
  <app-favorite [notFavorite]="post.notFavorite"  (changeAliass)="OnFavoriteChange($event)"></app-favorite>
  ```
  ##### 5.2. Templates and Styles

Each component has a template (HTML file) to render component's view. But all our external templates are actually

bundled along with our Javascript code (all show under one  request: main.bundle.js)

So there are no separate requests to the server to download these templates.

STYLES:

There are two ways of declaring styles your component. The style declaration that comes the last is the one that takes effect.

```TypeScript
    @Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.sass'],
    styles: [
        ` .fa-star {color: blue;}`
    ]
    })
```
   #### 5.3. View Encapsulation

Styles applied to a component, are scoped to that component and will not leak outside the template for that component.

SHADOW DOM = A specification that enables DOM tree and styles encapsulation. Allows to apply scoped styles to elements without bleeding out to the outer world.

```JavaScript
    var el = document.querySelector('favorite');
    var root = el.createShadowRoot();
    //the style will be scoped only to the 'el' element
    root.innerHTML = `
    <style>h1 { color: red}</style>
    <h1>Hello</h1>
    `;
```

VIEW ENCAPSULATION - is an enum defined in the ```@angular/core``` and we have to include it in the ```@Component```'s definition if we do not want the default value,

 ``Emulated``

```TypeScript
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass'],
  styles: [
    ` .fa-star {color: blue !important;}`
    ],
  encapsulation: ViewEncapsulation.Emulated
  //this is the default setting in Angular wich enables style encapsulation for all browser, even thouse old browsers,
  // where ShadowDom is not available, Angular will emulate the concept
})
```
```TypeScript
 //...
  encapsulation: ViewEncapsulation.Native
  //instead of generating the attributes dinamically, Angular uses the native ShadowDom of the browser, and this
  //is not going to work in most browsers out there
  //also the common styles @imported in /src/styles.sass file won't be applied to this component,
  // you have to @import those manually  inside the .sass file of the component - NOT a good practice - DON'T DO THIS!
```
In your browser's developer settings activate 'Show User Agent Shadow DOM' and you'll be able to inspect

the favorite component element and see that all styles from the favorite component are not available outside

the component and are under the ```#shadow-root``` element of the component.

```TypeScript
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: [
    ` .fa-star {color: blue}
    * {color: green}
    `
],
encapsulation: ViewEncapsulation.None
})
  //  Styles defined here will leak outside component's template so all  text in the Angular app will be green
```
#### 5.4. ngContent and ngContainer
 Write css syntax to automatically generate html contentent:

```SCSS
 div.panel.panel-default>div.panel-heading+div.panel-body
 ```
   If you're building reusable components and you want the consumer of this components to be able to provide custom content, use the ```<ng-content></ng-content>``` element:

```HTML
    <div class="panel-heading">
        <!-- at runtime the ng-content element will be replace entirely with:
        <div class="heading">Heading</div> -->
        <ng-content select=".heading"></ng-content>
        <!-- the select could bu also `#element_id` or html selector: h3, button ...-->
    </div>
    <div class="panel-body">
        <!-- no need for: <ng-content select=".body"></ng-content> when we use ng-container in consumer's component-->
        Body
    </div>
```
   The consumer is able to inject text or markup into this component:

```HTML
    <app-bootstrap-panel>
      <div class="heading">Heading</div>
      <!-- better, less noise: at runtime ng-container will just display the ng-content element-->
      <ng-container class="body">Body</ng-container>
    </app-bootstrap-panel>
```
### 6. Directives

   #### 6.1. Built-In Directives

   #####  ngIf

```HTML
<div *ngIf="courses.length > 0; then coursesList else noCourses">
</div>
<ng-template #coursesList>
    List of Courses
</ng-template>
<ng-template #noCourses>
    No couses yet!
</ng-template>
```
    This will add to DOM only ONE div, depending on the result of if condition

   ##### Hidden Property

   This will add all divs with ``hidden`` attribute to the DOM, but hide the ones with true expression assignment:

```HTML
    <div [hidden]="courses.length == 0">List of courses</div>
    <div [hidden]="courses.length > 0">No courses yet</div>
```
If you're dealing with a small tree of objects it doesn't matter which approach you choose, it's purely a personal preference.

If you're working with a large tree, first check to see if building that tree is going to be costly or not.

If it's costly ( if the user is going to click a button to toggle something to show or hide that part of the page), use the hidden property to keep it in the dark but hide it.

Otherwise it's better to use ``*ngIf`` to remove it from the DOM and free up the resources.

   ##### ngSwitch Case

```HTML
    <ul class="nav nav-pills">
        <li [class.active]="viewMode == 'map'">
            <a (click)="viewMode == 'map'" href="">Map View</a>
        </li>
        <li [class.active]="viewMode == 'list'">
            <a  (click)="viewMode == 'list'" href="">like Component</a>
        </li>
    </ul>
    <div [ngSwitch]="viewMode">
        <div *ngSwitchCase="'map'">Map View Content</div>
        <div *ngSwitchCase="'list'">List View Content</div>
        <div *ngSwitchDefault>Otherwise</div>
    </div>
```
   ##### ngFor

   Search in angular.io for ``ngForOf`` to see local variables/values  of this directive (index, even, odd ...).

```HTML
    <ul>
        <li *ngFor="let course of courses; index as i">
        {{ i }} - {{ course.name }}
        </li>
    </ul>

    <ul>
    <li *ngFor="let course of courses; even as isEven">
    {{ course.name }} - <span *ngIf="!isEven">EVEN</span>
    </li>
    </ul>
```
   ##### ngFor and Change Detection

    Wenever you click a button or, when around Ajax requests, or a timer function completes, angular performs a CHANGE DETECTION mechanism.

    Angular will refresh the DOM automatically.

```HTML
<span (click)="onAdd()">Add anew course</span>

<ul>
  <li *ngFor="let course of courses">
  {{ course.name }}   <button (click)="onRemove(course)">Remove</button>
  </li>
</ul>
```
```TypeScript
    onRemove(course) {
        const index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }
```


   ##### ngFor and trackBy

   Angular by default tracks objects by their identity (the reference into the memory).

   Each time the loadCourses() is called will create new objects in memory, though the content of the newly created objects is the same with previous ones.

   To prevent this default behaviour and if we want to track objects by their ids, we add ``trackBy`` and the name of the method as a reference in the *ngFor directive.

```TypeScript
    loadCourses() {
        this.courses = [
            { id: 1, name: 'course1 loaded'},
            { id: 2, name: 'course2 loaded'},
            { id: 3, name: 'course2 loaded'},
            { id: 4, name: 'course2 loaded'},
            { id: 5, name: 'course2 loaded'}
        ];
    }
    trackCourse(index, course) {
        return course ? course.id : undefined;
    }
```
```HTML
    <button (click)="loadCourses()">Testing TrackBy - Load Courses Button</button>
    <span></span>
    <ul>
        <li *ngFor="let courses of course; trackBy: trackCourse">
            {{ course.name }}
        </li>
    </ul>
```
   So Angular is not re-rendering the list items, because each time we call loadCourses we are using the same course objects.

   If you're dealing with a large list with complex markup and you do observe performance problems, on a given page,

   you can try using ``trackBy`` to improve the performance of that page.

   Don't use it by default in every page because you have to write more code and you won't gain any performance benefits.

   ##### The Leading Asterisk

   When we use the **leading asterisk** with our structural directives like ``*ngIf, *ngFor, *ngSwhich``,
   Angular is going to rewrite that block using an ``<ng-template>``, so you don't have to write that by yourself.

```HTML
    <div *ngIf="courses.length > 0; else noCourses">
    </div>
        <ng-template   #noCourses>
        No couses yet!
    </ng-template>
```
gets gets parsed into:

```HTML
    <ng-template [ngIf]="courses.length > 0">
        <div>
            List of Courses
        </div>
    </ng-template>
    <ng-template   [ngIf]="!(courses.length > 0)">
        No couses yet!
    </ng-template>
```
   ##### ngClass

  **ngClass** is an attribute directive used to modify attributes on existing DOM elements.

  ```TypeScript
  <span [class.is-liked-class]="isLiked" [class.not-liked-class]="!isLiked">
```
    ... a cleaner way to deal with class binding is to use ```[ngClass]``` directive, where we do not have to repeat class binding:

  ```HTML
    <span [ngClass]="{
      'is-liked-class': isLiked,
      'not-liked-class': !isLiked
      }"
      >The button
      </span>
  ```

   ##### ngStyle

```HTML
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'"
            [style.color]="isActive ? 'red' : 'green'"
            [style.fontWeight]="isActive ? '900' : 100'">
            Save
    </button>
```
    Clean up multiple style bindings using the ``ngStyle`` directive:

```HTML
<button [ngSyle]="{
        'backgroundColor': isActive ? 'blue' : 'white',
        'color': isActive ? 'red' : 'green'
        'fontWeight': isActive ? '900' : 100'
        }">
        Save
    </button>
```

   ##### Safe Traversal Operator

   Sometimes, when you're dealing with complex objects, it is possible that the value of a property may be unknown or undefined for a certain period of time(maybe for a fraction of a second).

   For example, you might want to call different endpoints to get these objects from the server. There are two solutions to solve this problem:

 use ```*ngIf``` or:

 when dealing with complex objects, use safeTraversal operator (the **'?'**) to keep the element in the DOM:

   ```HTML
    <span>{{ task.assignee?.name }}</span>
   ```
   ###### Creating Custom Directives

   Implement simple directives to use, for example for formating fields.

   ``ng g d input-format``

    Use the ``@HostListener`` DECORATOR, to subscribe to the events raised from the host:

```TypeScript
    @Directive({
    selector: '[appInputFormat]'
    })
    export class InputFormatDirective {

        @Input('appInputFormat') format;
        constructor(private el: ElementRef) { }

        @HostListener('blur') onBlur() {
            const value: string = this.el.nativeElement.value;

            if (this.format === 'lowercase') {
            this.el.nativeElement.value = value.toLowerCase;
            } else {
            this.el.nativeElement.value = value.toUpperCase;
            }
        }
    }
```
    If is required only one parameter for that directive, we can use the name of the directive as input aliass and use it like this:

```HTML
 <input type="text" [appInputFormat]="'uppercase'"/>
 ```
 instead of:

 ```HTML
 <input type="text" appInputFormat [format]="'uppercase'"/>
 ```
 ### 7. Template driven forms

   #### 7.1. Building a Bootstrap Form

``ng g c contact-form``
 Use bootstrap classes(.from-group, .form-control):
```CSS
  div.form-group

  label+input[type='text'].form-control

  div.form-group>label[for='comment']=textarea[id='comment'].form-control
```
#### 7.2. Types of forms

    For our forms we create required form controls (for validation) in two ways:

- Using Directives: **Template driven forms**
- Writing more code for more control over the validation logic of complex forms: **REACTIVE FORMS**

When you apply ``ngModel`` directive, along with the name attribute, on an input field in its simplest form, without any binding, Angular will create a CONTROL OBJECT and associate it with the input field,

under the hood:

```HTML
      <input ngModel name="firstName" id="firstName" type="text" class="form-control">
```
   ``NgModel`` is an object with properties like: ``{_parent: NgForm, name: "firstName", valueAccessor: DefaultValueAccessor, _rawValidators: Array(0), _rawAsyncValidators: Array(0), control: FormContol …}``
   ``control`` is an instance of the ``FormControl`` class, with properties like: ``dirty`` (field touched - boolean) and ``prestine``(field untouched), ``invalid``, ``valid``, ``errors``(object of validation errors with properties like required, minlenght, name ...).

   We use this form control class to track state changes and the validity of input fields.

#### 7.3. Adding Validation

   The attribute ``required`` is a available to use on form fields.
   ``valid`` property of ``ngModel`` is a computed property, wich internally delegates to the underlaying FormContol object.

```HTML
    <input ngModel name="firstName" required id="firstName" type="text" class="form-control" placeholder="Fill in the name">
    <div class="alert alert-danger" *ngIf="firstName.touched && !firstName.valid">First name is required.</div>
```
#### 7.4. Specific validation errors

```HTML
      <input
        required
        minlength="4"
        maxlength="50"
        pattern="[a-zA-Z0]+"
        ngModel
        name="firstName"
        id="firstName"
        #firstName="ngModel"
        type="text"
        class="form-control"
        placeholder="Fill in the name" />
      <div
        class="alert alert-danger"
        *ngIf="firstName.touched && !firstName.valid">
        <div *ngIf="firstName.errors.required">
          First name is required.
        </div>
        <div *ngIf="firstName.errors.minlength">
          First name has to contain at least {{ firstName.errors.minlength.requiredLength }} characters.
        </div>
        <div *ngIf="firstName.errors.pattern">
          First name has to contain non-numeric characters.
        </div>
      </div>
```
   Use the ``#firstName`` template variable to referece the FormControl instance created with the ngModel directive and to read properties of the  that input object.
#### 7.8. Styling Invalid Input Fields

```CSS
.form-control.ng-touched.ng-invalid {border: 2px red solid};
```
#### 7.9. ngForm

```HTML
<!-- set the 'f' template variable referencing the ngForm,  just to inspect the ngForm instance, for learning purposes-->
<form #f="ngForm" (ngSubmit)="devSubmitToInspectBehavior(f)">
  <!-- f parameter passed to devSubmitToInspectBehavior is a reference to ngForm object-->
```
Angular, by default, applies the ``ngForm`` directive to the ``<form>`` element. This directive has (exposes) a ``ngSubmit`` OUTPUT property( used to REISE custom events).
As seen, in Angular we have FormControl class (an instance of this class -``control`` represents one input field), FormGroup class (an instance of this class - ``form`` represents a group of input fiels =  form control objects).

When the ``ngForm`` directive is applied to a ``<form>`` element, it basically creates the ``form`` object and it exposes its properties:
    form: FormGroup {
        controls: {firstName: FormControl, comment: FormControl}

        dirty: (...)

        disabled: (...)

        enabled: (...)

        errors: null

        invalid: (...)

        parent: (...)

        pending: (...)

        pristine: true

        root: (...)

        status: "INVALID"

        statusChanges: EventEmitter {_isScalar: false, observers: Array(0), closed: false, isStopped: false, hasError: false, …}

        touched: false

        untouched: (...)

        updateOn: (...)

        valid: (...)

        validator: null

        value: {firstName: "", comment: ""}

        valueChanges: EventEmitter {_isScalar: false, observers: Array(0), closed: false, isStopped: false, hasError: false, …}

        _onCollectionChange: ƒ ()

        _onDisabledChange: []

        __proto__: AbstractControl }

        These are computed properties, which basically delegate to the underlying FormGroup object.

So we can access all this properties (f.invalid, f.errors ...).

The ``value`` property is an object: f.value = {firstName: "The submitted first name", comment: "the submitted comment"}, wich can be easily used as a JSON representation of our form,  that we can send to an API, on the server, for persistence.

#### 7.10. NgModelGroup

When you're working with complex forms you want to have multiple groups in your form.
```HTML
<div ngModelGroup="contact" #contact="ngModelGroup">
    <div *ngIf="!contact.valid">...</div>
      <div class="form-group">
          ...
      </div>
    </div>
</div>

 Inspecting the DOM we observe form's object properties available for use:

```JavaScript

    {
        form: FormGroup
            {
                controls:
                    {
                    contact: FormGroup,
                    comment: FormControl
                    },
                value:
                    {
                        comment: "",
                        contact:
                            {
                                firstName: ""
                            }
                    }
            }
    }
```

#### 7.11. Control Classes and Directives

As seen above, in Angular we have two CLASSES to keep track of the state of the input fields and their validity:

    CLASSES         <--------     DIRECTIVES


    FormControl     <--------     ngModel

    FormGroup       <--------     ngForm

                    <--------     ngModelGroup

When we apply the ``NgModel`` DIRECTIVE to an input field, Angular automatically creates a FormControl object and associates that with an input field.

A FormGroup class is used to represent an entire form and optionally groups within a form.

We have a directive called ``ngForm`` that is automatically applied to all `<form>` elements.

And this will internally create a FormGroup object and associate it with your form and

with this FormGroup object we can track the state changes of the form and its validity.

If you have a complex form, with multiple subgroups, we can optionally apply the ngMdel directive

on a subgroup and this directive, similar to the ngForm directive, will also create a FormGroup

object, for that group.

The difference  between ``ngForm`` and ``ngModelGroup`` is that ``ngForm`` has the OUTPUT property: ``ngSubmit``.

#### 7.12. Disabling the Submit Button

Add the ``[disable]`` attribute to the element to disabable:

```HTML
<button class="btn btn-primary" [disabled]="!f.valid">
```
#### 7.13. Working with Check Boxes

div.checkbox>label[type='checkbox']
```HTML
<div class="checkbox">
    <label>
        <input type="checkbox" ngModel name="isSubscribed" />
    </label>
</div>
```
Apply the `ngModel` directive, along with the `name` attribute.

#### 7.14. Working with Drop-Down Forms

```HTML
    <div class="form-group">
        <label for="contactMethod">
          Contact Method
        </label>
        <select multiple ngModel name="contactMethod" id="contactMethod" class="form-control">
          <option value=""></option>
          <option *ngFor="let method of contactMethods" [value]="method.id">{{ method.name }}</option>
        </select>
      </div>
```
Adding the ``multiple`` attribute to the ``<select>`` element, allows user to select multiple options, holding the Shift key.

#### 7.15. Working with Radio Buttons

``div.radio>label>input[type='radio'][name='contactMethod']``

    Similarly, we apply ngModel and we use property binding for the value attribute:

```HTML
    <div *ngFor="let method of contactMethods" class="radio">
        <label>
        <input
            ngModel
            name="contactMethod"
            [value]="method.id"
            type="radio">
            {{ method.name }}
        </label>
    </div>
```
### 8. Reactive forms

In the last section you saw that with template driven forms we apply the ngModel directive to our input fields and

this directive will internally create an instance of the FormControl class and associate it with the input field.

When building REACTIVE FORMS we should create these FormControl objects explicitly in the code:

```TypeScript
  myReactiveForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
```
FormControl and FormGroup inherit from the AbstractControl base(parent) class.

Add ``formControlName`` property and set it to your input name (instance name).

```HTML
<input
    formControl="username"
    id="username"
    type="text"
    class="form-control">
```
...
For reactive forms validation we do not use the HTML5 attributes (required, minlenght, maxlength ...) because  we have a ``Validators`` class available to work with.

All the validators we have in template driven forms, exist here as well and are static methods in the ``Validators`` class.

So, there is no need to create a new instance of ``Validators`` class, to access these methods (static members belong to the class itself and are not bound to class instances).

```username: new FormControl('', [Validators.required, Validators.minLenght(4)]) ```

Simply passing a reference to this function because the second argument for the constructor of FormControl

requires a validator function which is basically a function reference (we do not call the required or minLenght methods - just pass references to them).

#### 8.1. Implementing Custom Validation

Our custom validationfunctions should implement the interface:

```TypeScript

interface ValidatorFn {
    (c: AbstractControl): ValidatorsErrors|null
}
```
All the validation methods should go into one class.

We decorate these methods with static and then from the outside we can simply  call ``UsernameValidators.cannotContainSpace``

```TypeScript
export class UsenameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true};
        }
        return null;
    }
}
```
#### 8.2. Asynchronous Operations and Validation

Async validators are usefull for validating input fields in place.

Asynchronous Operations = NON BLOCKING = the process that executes the code doesn't block while waiting the operation to be completed:

  calling the server (AJAX)

  timer functions

The ``validator`` function has to return a promise of ``validation errors | null``.

When the call to the server completes or the timer function completes the result that we are going to get is either a validation error or null:

```TypeScript
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'bitaemi') {
                    resolve({ shouldBeUnique: true });
                } else {
                resolve(null);
                }
            }, 2000);
        });
    }
```
Also, in the constructor of your input field you have to supply as argument the AsyncronousValidationErrors parameter:

```TypeScript
username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        UsernameValidators.cannotContainSpace
        ],
      UsernameValidators.shouldBeUnique),
      //..
```
in the template the ``username`` is a property that reference the FormControl object wich has available for use different properties (pending, errors, touched, invalid ...):

```HTML
<input
    formControlName="username"
    id="username"
    type="text"
    class="form-control">
    <div *ngIf="username.pending">Checking for uniqueness ...</div>
    <div *ngIf="username.touched && username.invalid" class="alert alert-danger">
        <div *ngIf="username.errors.required">Username is required</div>
        <div *ngIf="username.errors.cannotContainSpace">Username cannot contain space</div>
        <div *ngIf="username.errors.minLength">Username should be minimum {{ username.errors.minLength.requiredLength }}</div>
        <div *ngIf="username.errors.shouldBeUnique">Username should be unique ( already registered)</div>
    </div>
```
``.pending`` returns true if, at least one async validator is in progress - display a loading icon while an async validator is in progress:

```HTML
<div *ngIf="username.pending">Checking for uniqueness ...</div>
```
#### 8.3. Validating the form upon submit

Sometimes we need to do validation upon submitting the form to the server, so we cannot validate input fields in isolation.

```HTML
<form [formGroup]="myReactiveForm" (ngSubmit)="login()">
    <div *ngIf="myReactiveForm.errors" class="alert alert-danger">Form has errors on submit</div>
```

```TypeScript
 login() {
    let isValid = AuthorsService.login(this.myReactiveForm.value);
    if (!isValid) {
      this.myReactiveForm.setErrors({
        invalidLogin: true
      });

    }
  }
  ```
  #### 8.4. Nested FormGroups

  In complex forms we group form controls into form groups:

```HTML
<div formGroupName="account">
        <div class="form-group">
            <input
                formControlName="username"
                ...
            >
        </div>
        <div class="form-group">
            <input
                formControlName="password"
                ...
```

```TypeScript
 myReactiveForm = new FormGroup({
    account: new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    })
  });

  get username() {
    return this.myReactiveForm.get('account.username');
  }

  get password() {
    return this.myReactiveForm.get('account.password');
  }
```
  #### 8.5. FormArray

   When we are dealing with an array of objects in a form, instead of ``FormControl`` we use the ``FormArray`` class.

```TypeScript
  myFormArray = new FormGroup({
    topics: new FormArray([])
  });
  //..
  get topics() {
      //we need to explicity cast the return value because the get method returns a FormControl obj  wich doesn't have the .push method:
    return this.myFormArray.get('topics') as FormArray;
  }
    //topic is not an json object, is a HTMLInputElement:
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
```
```ul.list-group>li.list-group-item```:

```HTML
 <input type="text" class="form-control" (keyup.enter)="addTopic(topic)" #topic>
  <ul class="list-group">
    <li class="list-group-item" *ngFor="let topic of topics.controls">
      {{ topic.value }}
    </li>
  </ul>
```
  Iterate over the FormControl objects using the ``controls`` property.
  Remove an element from ``FormArray`` using the ``removeAt`` property.

```TypeScript
removeTopic(topic: FormControl) {
this.topics.removeAt(this.topics.controls.indexOf(topic));
```

  #### 8.6. FormBuilder

We can declare the form field like this:

```TypeScript
  myFormArray = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });
```
or we can use the constructor method (equivalent way):

```TypeScript
  this.myFormArray = constructor(fb: FormBuilder) {
    fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
```
### 9. Consuming HTTP Services


        POST - CREATE

        PATCH - UPDATE

        PUT - UPDATE

        DELETE - DELETE

        GET - READ

  - [9.1. Getting Data](./src/app/modules/consuming-http-services/README.md#91-getting-data)
  - [9.2. Creating Data](./src/app/modules/consuming-http-services/README.md#92-creating-data)
  - [9.3. Updating Data](./src/app/modules/consuming-http-services/README.md#93-updating-data)
  - [9.4. Deleting Data](./src/app/modules/consuming-http-services/README.md#94-deleting-data)
  - [9.5. OnInit Interface](./src/app/modules/consuming-http-services/README.md#95-oninit-interface)
  - [9.6. Separation of Concerns](./src/app/modules/consuming-http-services/README.md#96-separation-of-concerns)
  - [9.7. Extracting a Service](./src/app/modules/consuming-http-services/README.md#97-extracting-a-service)
  - [9.8. Handling Errors](./src/app/modules/consuming-http-services/README.md#98-handling-errors)
  - [9.9. Handling Unexpected Errors](./src/app/modules/consuming-http-services/README.md#99-handling-unexpected-errors)
  - [9.10. Throwing Application Specific Errors](./src/app/modules/consuming-http-services/README.md#910-throwing-application-specific-errors)
  - [9.11. Handling Bad Requests Errors](./src/app/modules/consuming-http-services/README.md#911-handling-bad-requests-errors)
  - [9.12. Importing Observable Operators and Factory Methods](./src/app/modules/consuming-http-services/README.md#912-importing-observable-operators-and-factory-methods)
  - [9.13. Global Error Handling](./src/app/modules/consuming-http-services/README.md#913-global-error-handling)
  - [9.14. Extracting a reusable Error Handling Method](./src/app/modules/consuming-http-services/README.md#914-extracting-a-reusable-error-handling-method)
  - [9.15. Extracting a reusable Data Service](./src/app/modules/consuming-http-services/README.md#915-extracting-a-reusable-data-service)
  - [9.16. The Map Operator](./src/app/modules/consuming-http-services/README.md#916-the-map-operator)
  - [9.17. Optimistic vs. Pesimistic Updates](./src/app/modules/consuming-http-services/README.md#917-optimistic-vs-pesimistic-updates)
  - [9.18. Observables vs. Promises](./src/app/modules/consuming-http-services/README.md#918-observables-vs-promises)

### 10. Routing and Navigation

Modules in Angular:

- Forms

- ReactiveForms

- Http

- Router

Steps:

- Configure routes

- Add a router outlet

- add links

#### 10.1. Configure Routes

```TypeScript
    RouterModule.forRoot([
      {
        path: 'followers/:username',
        component: ConsumingHttpServicesComponent
      },
      {
        path: 'followers',
        component: DisplayFollowersComponent
      },
      {
        path: '**',
        component: DisplayFollowersComponent
      }
    ])
```

RouterModule``.forRoot`` is a static method defining the root route for the application.

#### 10.2. RouterOutlet

``<router-outlet></router-outlet>`` has to be present in the mai app template.

#### 10.3. RouterLink

We **DO NOT** use `href` attribute on a link, instead we use ``routerLink`` directive!!!

This makes the App a Single Page App (SPA) - resources are downloaded from the server one time

and as the user navigates from  one page to another, only the content of the current page is downloaded.

Use routerLink as attribute:

```HTML
<a routerLink="/followers">Display Followers Component</a>
```

and, when dealing with route parameters, use property binding to an expression:

```HTML
<a [routerLink]="['/followers', follower.id]">Follower name</a>
```
In  this expr. we have an array containing the path and the subsequent elements are the route parameters.

#### 10.3. RouterLinkActive

We use the ``routerLinkActive`` to set the CSS class for the selected links in the navigation bar.

#### 10.4. Getting the Route Parameters

```TypeScript
// in app.module's imports array:
RouterModule.forRoot([
      {
        path: 'followers/:id',
        component: GithubProfileComponent
      },
      // ..

// In GithubProfileComponent:
import { ActivatedRoute } from '@angular/router';

//..
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id'); //transform the returned string into integer
        // service.getProfile(id);
      });
  }
```
As seen above Route Parameters are Observables. That's because, when navigating within the same route path, but with different parameters,

it doesn't make sense for Angular to destroy the component from the DOM, only to recreate it straight away.

Anger is not going to destroy this component and it's going to keep it in the DOM.

An Observable is technically a collection of asynchronous data that arrives over time (a streaming of data wich we can filter using a

 `.pipe` or `.subscribe` to get notified of new incoming data)

So, clicking on the `Next follower` button, inside the same component, Angular won't recreate the Component

(as seen, won't start a new Life Cycle for the component - The OnInit method doesn't execute once again)

We have only one instance of the component and so, in order to find the new parameters we need to subscribe the route parameters.

```HTML
<button [routerLink]="['/followers', 44355]" class="btn btn-active">
Next follower
</button>
```

If you don't have this kind of scenario, if you don't allow the user to stay on the same page and navigate 

back and forth there is a simpler way to get access to route parameters, without using an Observable:

```TypeScript
this.route.snapshot.paramMap
```

#### 10.5. Routes with multiple parameters

```TypeScript
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
```
and:

```HTML
<a [routerLink]="['/followers', follower.id, follower.login]">{{ follower.login }}</a>
```
#### 10.6. Query Parameters

 - Sending optional parameters(not required for the page to load): 

```HTML
 <a 
    routerLink="/followers"
    [queryParams]="{ page: 1, order: 'newest'}">
    Display Followers Component
</a>
``` 
 - Getting optional parameters:

 ```TypeScript
    //..
    constructor(
        private service: FollowersService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        //get the required params
        this.route.paramMap.subscribe();
        let id = this.route.snapshot.paramMap.get('id');
        //get optional params:
        this.route.queryParamMap.subscribe();
        let page = this.route.snapshot.queryParamMap.get('page');
        //..
```
#### 10.7. Subscribing to multiple Observables

``import 'rxjs/add/observable/combineLatest';`` is a static method o the observable class that we can use to combine more observables into a new one that we can use.

```TypeScript
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      
      this.service.getAll({ id: id, page: page });
      .subscribe(followers => this.followers = followers);
    });
```
#### 10.8. SwitchMap Operator

The pattern of a .``subscribe`` inside another ``.subscribe`` is frequently seen. In this case we use ``switchMap`` operator:

?? TO fix - the following implementation doesn't seem to work:
```TypeScript Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
          
        return this.service.getAll();
      }))
      .subscribe(followers => this.followers = followers);
    
  }
```
#### 10.9. Programmatic navigation

 For programmatic navigation you have to inject the ``router`` service in the constructor and use the navigate method:

```TypeScript
import { ActivatedRoute, Router } from '@angular/router';

// ..
// the second parameter that we pass to navigate is the NAVIGATION EXTRA OBJECT 
  submit() {
    this.router.navigate(['/followers'],
    {
        queryParams: { page: 1, order: 'newest'},

    });
  }
```
Common libraries to include at need:

@angular/core
@angular/compiler
@angular/http
@angular/router

## NgRx Implementation

Understanding the REDUX PATTERN is the key for understanding ngRx Library and using it to programm in a reactive style.

 - manage state using the ngRx STORE

 - redux with observables = manage the state usesing observables streams of data

 - immutable @Inputs (modify the copies of objects, and create new objects using the reference of the initial object)

 - performance benefits because object reference checks are fast (use ChangeDetectionStrategy.OnPush to compare object references, not objects)

 - support for: eagerly loaded modules & lazily loaded modules


 - [Why REACTIVE](./src/app/store/README.md#why-reactive) 
  - [Implementation](./src/app/store/README.md#implementation)
    - [Step - add action constants and creators](./src/app/store/README.md#step---add-action-constants-and-creators)
    - [Step - create and register the reducer](./src/app/store/README.md#step---create-and-register-the-reducer)
    - [Step: composition with selectors](./src/app/store/README.md#step-composition-with-selectors)
    - [Side Effects Model for ngRx/store](./src/app/store/README.md#side-effects-model-for-ngrxstore)
    - [Optimize Data Structures with Entities](./src/app/store/README.md#optimize-data-structures-with-entities)
    - [Hooking up @ngRx-router-store](./src/app/store/README.md#hooking-up-ngrx-router-store)
    - [Extending the State Tree](./src/app/store/README.md#extending-the-state-tree)
    - [Entity Patterns, CRUD opperations](./src/app/store/README.md#entity-patterns-crud-opperations)
    - [Routing via Dispatch](./src/app/store/README.md#routing-via-dispatch)
    - [State Preload  and Protection via Guards](./src/app/store/README.md#state-preload--and-protection-via-guards)
    - [Observables and Change Detection](./src/app/store/README.md#observables-and-change-detection)
    - [Unit Testing](./src/app/store/README.md#unit-testing)
