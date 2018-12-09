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
    - Sass
    - Npm
    - TSLint

MUST USE Shortcuts with VS Code:

    Shift + Ctrl + P - open commands pallet
    Ctrl + X - cut line
    Ctrl + Shift + K - delete line
    Ctrl + W - close current tab
    Alt + arrow left/right - swith to the next door tab
    Ctrl + ` - open console / terminal
    Ctrl + Shift + V - preview current file
    Ctrl + K Ctrl + O - open Directory
    q - quit/exit log screen from terminal
    Ctrl + P and type a distinctive file name fragment e.g. authors.html
    Ctrl + . when cursor is over the name of the class/interface you want to import
    Ctrl + K + W - close all tabs
    
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
        - dependencies which determine the libraries your app is dependent on
        - devDependencies - required for app development, not on production (includes karma dependencies for testing)
    - protractor.conf.js - a tool for running end-to-end tests for Angular
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
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    `
})

export class CoursesComponent {
   title = 'List of courses ';
   courses = ['course1', 'course2'] ;
}
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
#### 4. Displaying Data and Handling Events

 ##### 4.1. Property Binding

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

 ##### 4.2. Attribute Binding

DOM =  a tree model of objects in memory. HTML is a markup language that we use to represent DOM in text. 

Most of the HTML attributes have a one to one mapping to propperties of DOM objects, but we have a few exceptions, e.g. colspan attr:

```HTML
<!-- target the colspan attribute of the HTML element because we don't have a colspan property in DOM -->
<td [attr.colspan] = "colSpan"></td>
```
##### 4.3. Adding Bootstrap

Get more info about this great CSS library from [getbootstrap.com](http://getbootstrap.com)

Add bootstrap and store it in the node_modules folder, running:

```npm i bootstrap --save```

The save flag adds bootstrap as a dependency in package.json

In the main style.sass file add the import of the minified css framework located in node_modules:

```scss
@import "~bootstrap/dist/css/bootstrap.min.css"
```

##### 4.4. Class binding and Style Binding

Add the .active class to the HTML element, dinamically, based on the  isActive condition (isActive is a boolean field in the component):
```HTML
<button class="btn btn-primary" [class.active]="isActive"></button>
```

- Apply inline style based on a condition 
- Use [HTML DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp) to find and see the properties of the 'Style' Object


```HTML 
<button [style.backgroundColor]="isActive ? 'blue' : 'white'"></button>
```
##### 4.5. Event Binding

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

##### 4.6. Event Filtering

In Angular, when handleing an event we can apply a filter. 
```HTML
<input (keyup.enter)="onKeyUp($event)" />
```

##### 4.7. Template variables

To get the value typed into the input field:
I) pass the ```$event``` object to the method and read the value using ```$event.target.value``` or faster:

II) in Angular we can **declare variables in the template**: ```#variableName```, that reference the input field, and read the value of the variable with: 
```variableName.value```

```HTML
<input #email (keyup.enter)="onKeyUp(email.value)" />
```
##### 4.8. Two way data-binding

In OOP we do not pass unnecessary parameters to methods, so in components we use fields. 

For two-way binding from the component to DOM and from DOM to component, we use the ```ngModel ``` directive.

```HTML
<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
```
in the module file:
```import { FormsModule } from '@angular/forms';```
and add the FormsModule to @ngModule's imports array.
##### 4.9. Pipes 

Another Building block in Angular is PIPES - used to format data.

Buit-in PIPES: 

        - uppercase

        - lowercase

        - decimal

        - currency

        - percent

PIPES are chainable.
 Supply arguments to some pipes using `:`

```HTML
<div>{{ course.title | uppercase}}
<!-- supply: (number of integer digits - adds 0 in front if we specify more).(min-max digits number after the decimal point):  -->
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
#### 5. Building Reusable Components

   ##### 5.1. Component API, Input and Output Properties


   To make a component more reusable we add input and output properties.
   We use input properties e.g. ```[notFavorite]``` to pass input or STATE to a component and we use OUTPUT properties e.g. ```(change)``` to RAISE/PRODUCE/YEILD EVENTS from these custom components.

   Inside outer's component template we include inner components like:
   
```HTML 
   <app-favorite [notFavorite]="post.notFavorite" (change)="onFavoriteChange()"></app-favorite>
```
      - where:
            - post is a field with notFavorite property, inside the outer component.
            - [notFavorite] is the input field in the inner component:
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

    Each component has a template (HTML file) to render component's view. But all our external templates are actually bundled along with our Javascript code (all show under one 
    
    request: main.bundle.js)

    So there are no separate requests to the server to download these templates.

    STYLES

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
   ##### 5.3. View Encapsulation

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

VIEW ENCAPSULATION - is an enum defined in the ```@angular/core``` and we have to include it in the ```@Component```'s definition if we do not want the default value, ``Emulated``

```TypeScript
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass'],
  styles: [
    ` .fa-star {color: blue !important;}`
    ],
  encapsulation: ViewEncapsulation.Emulated 
  //this is the default setting in Angular wich enables style encapsulation for all browser, even thouse old browsers, where ShadowDom is not available, Angular will emulate the concept
})
```
```TypeScript
 //...
  encapsulation: ViewEncapsulation.Native
  //instead of generating the attributes dinamically, Angular uses the native ShadowDom of the browser, and this is not going to work in most browsers out there
  //also the common styles @imported in /src/styles.sass file won't be applied to this component, you have to @import those manually  inside the .sass file of the component - NOT a good practice - DON'T DO THIS!
```
In your browser's developer settings activate 'Show User Agent Shadow DOM' and you'll be able to inspect the favorite component element and see that all styles from the favorite component are not available outside the component and are under the ```#shadow-root``` element of the component.

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
#### 6. Directives

   ##### 6.1. Built-In Directives

   ######  ngIf

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

   ###### Hidden Property

   This will add all divs with ``hidden`` attribute to the DOM, but hide the ones with true expression assignment:

```HTML
    <div [hidden]="courses.length == 0">List of courses</div>
    <div [hidden]="courses.length > 0">No courses yet</div>
```
    If you're dealing with a small tree of objects it doesn't matter which approach you choose, it's purely a personal preference.

    If you're working with a large tree, first check to see if building that tree is going to be costly or not.
    
    If it's costly ( if the user is going to click a button to toggle something to show or hide that part of the page), use the hidden property to keep it in the dark but hide it.

   Otherwise it's better to use ``*ngIf`` to remove it from the DOM and free up the resources.

   ###### ngSwitch Case

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
   ###### ngFor
   ###### ngFor and Change Detection
   ###### ngFor and trackBy
   ###### The Leading Asterisk
   ###### ngClass
   ###### ngStyle
   ###### Safe Traversal Operator
   ###### Creating Custom Directives



### Libs and Bundles

Common libraries to include at need:

@angular/core
@angular/compiler
@angular/http
@angular/router






