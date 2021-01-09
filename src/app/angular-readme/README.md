<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [HTML 5 semantic tags benefits](#html-5-semantic-tags-benefits)
- [HTML 5 APIs used:](#html-5-apis-used)
- [How to create responsive css pages](#how-to-create-responsive-css-pages)
- [How to create responsive css pages without any css framework](#how-to-create-responsive-css-pages-without-any-css-framework)
- [Place an element at center of page:](#place-an-element-at-center-of-page)
- [How to hide an element on page](#how-to-hide-an-element-on-page)
- [CSS preprocessor](#css-preprocessor)
- [CSS encapsulation](#css-encapsulation)
- [How to create a new array/object from existent array/object](#how-to-create-a-new-arrayobject-from-existent-arrayobject)
- [Imediatlly Invokable Function Expression - IIFE](#imediatlly-invokable-function-expression---iife)
- [How to use IIFE scoped vars globally](#how-to-use-iife-scoped-vars-globally)
- [let vs var](#let-vs-var)
- [Angular lifecycle hooks](#angular-lifecycle-hooks)
- [Passing  data from parent to child component via `@Input` decorator and input property:](#passing--data-from-parent-to-child-component-via-input-decorator-and-input-property)
- [Passing data from child to parent via `@Output` decorator and `EventEmitter`;](#passing-data-from-child-to-parent-via-output-decorator-and-eventemitter)
- [Passing input to sibling(frate) components :](#passing-input-to-siblingfrate-components-)
- [Passing data between non related components - use BehavioralSubject](#passing-data-between-non-related-components---use-behavioralsubject)
- [Using ReplaySubject:](#using-replaysubject)
- [Pass data between component using Angular Route:](#pass-data-between-component-using-angular-route)
- [Subject vs behavior subject](#subject-vs-behavior-subject)
- [`@VewChild`](#vewchild)
- [Http Header Interceptor](#http-header-interceptor)
- [Git stash](#git-stash)
- [Security principles cookies, local storage](#security-principles-cookies-local-storage)
- [Store critical data - observables, ngrx](#store-critical-data---observables-ngrx)
- [foreach vs map](#foreach-vs-map)
- [RXJS observables](#rxjs-observables)
- [Promise vs observable](#promise-vs-observable)
- [Unit testing framework](#unit-testing-framework)
- [CORS - Cross Origin Resouce Sharing](#cors---cross-origin-resouce-sharing)
- [What is `this` object?](#what-is-this-object)
- [How to change `this`? -](#how-to-change-this--)
- [Arrow functions - arrow functions](#arrow-functions---arrow-functions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# HTML 5 semantic tags benefits
- simplify the work for browsers, search engines and developers (header, nav, section, article, aside, footer)
media (video and audio elements) - these come with different JS methods(play, pause, load);

# HTML 5 APIs used:
- media (video and audio elements) - these come with different JS methods(play, pause, load);
- text track API (subtitles, captions, chapters, metadata)
- drag and drop API - brings native drag and drop support to the browser
- Offline - Application Cache API - creates a manifest used by the user browser to keep a copy of the files loded by the site, in the browser
- User Interaction - use contenteditable combine with local storage to track changes to documents
- History, Canvas 2D, Web Storage, Web Sokets - alows page to send 2 way messages between server and browser
- Local Storage - HTML Web Storage API - more secure than cookies and large amounts of data can be stored,
- SSE - Server Sent Events - updates from server to the web page come automatically

# How to create responsive css pages 
- We can do it either using frameworks like: bootstrap, material, ant or using CSS grid layout

# How to create responsive css pages without any css framework

We make use of the powerfull, 2 dimentional CSS grid layout available, supported by most browsers. We combine it with flexbox display and media-queries styles. We can also test using the breaking points offered by google Chrome inspector, but is better to also test on different divices, different browsers (Windows, MacOs, Android, iOS). We have grid: container, items, cells, traks(rows or columns), areas;

The Most Powerful Lines in Grid is fluid width columns that break into more or less columns as space is available, with no media queries!

```CSS
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  grid-gap: 1rem;
  /* This is the standardized property now, but has slightly less support */
  /* gap: 1rem */
}
```
[https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)

# Place an element at center of page:

Use transform: translate with position:fixed:
```CSS
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  // because the translate value from transform is based on the dimention of the element we want to center 
}
```
OR use flexbox:
```CSS
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  width: 100px;
  height: 100px;
}
```
# How to hide an element on page 
 - is better to use `display: none` than hidden attribute; hidden keeps the element in the DOM (element takes space)
# CSS preprocessor 
 LESS, SASS - help in CSS writing, SASS has if/then/else statements, for loops, while loops, and each loops, @extend (extend another class - basicaly copies the code from another CSS class into that class that extends it), @include and different mixins that help to write succint and inteligile code-  for example:

```CSS
.bam {
  @include background(
    image-url("foo.png"),
    linear-gradient(top left, #333, #0c0),
    radial-gradient(#c00, #fff 100px)
  );
}
```
this transpliled turns into the CSS that provide the gradient background required for all browsers:

```CSS
.bam {
  background: url('/foo.png'), -webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #333333), color-stop(100%, #00cc00)), -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 100, color-stop(0%, #cc0000), color-stop(100%, #ffffff));
  background: url('/foo.png'), -webkit-linear-gradient(top left, #333333, #00cc00), -webkit-radial-gradient(#cc0000, #ffffff 100px);
  background: url('/foo.png'), -moz-linear-gradient(top left, #333333, #00cc00), -moz-radial-gradient(#cc0000, #ffffff 100px);
  background: url('/foo.png'), -o-linear-gradient(top left, #333333, #00cc00), -o-radial-gradient(#cc0000, #ffffff 100px);
  background: url('/foo.png'), -ms-linear-gradient(top left, #333333, #00cc00), -ms-radial-gradient(#cc0000, #ffffff 100px);
  background: url('/foo.png'), linear-gradient(top left, #333333, #00cc00), radial-gradient(#cc0000, #ffffff 100px);
}
```
# CSS encapsulation

The styles specified within the `@Component` metadata, apply only inside that component. They are not inherited by any component. We can manipulate the view encapsulation seting the encapsulation in metadata:

```TypeScript
 encapsulation: ViewEncapsulation.None // don't provide any template or style encapsulation

 // use style array or styleURLs array
 ```
# How to create a new array/object from existent array/object

I have tried using ``splice()`` or ``{...oldObj}``(spread operator), however for multiple levels object/arrays, in order not to mutate the initial object, the safe way is: 
```JavaScript
let newObj = JSON.parse(JSON.stringify(initalObj)); // transform object into string(which is unmmutable) and backto object
```
# Imediatlly Invokable Function Expression - IIFE

# How to use IIFE scoped vars globally 
- without `use strict` mode, you can declare variables without the `var` or `let` keywords, thus those variables will be global - on the global object (Window) - but it is a bad practice to cluter global object

# let vs var

Variables declared with `let` are not hoisted (allocated memorie on top of the file) because they are visible only inside their declaration block (not outside - they have a local scope);
Variables declared with `var` are visible inside the block/function where they where declared, and also in the enclosing function (in the outer function of their declaration - this si the closure - scope chain)

# Angular lifecycle hooks 
- with these methods we can respond and act at a specific moment in the life of a component
A Mermaid diagram can be seen below using Mermaid Preview Extention in VSCode (waiting for GitHub support to preview in browser)
```mermaid
gantt
dateFormat  YYYY-MM-DD
title Angular Life Cycle Hooks of Components & Directives

section Create 
Constructor()           :done,    des1, 2014-01-06,2014-01-08
section Initialize Component
OnChanges.ngOnChanges()              :active, des2, 2014-01-08, 3d
OnInit.ngOnInit               :         des3, 2014-01-09, 3d
section Other Change Detections
DoCheck.ngDoCheck()               :active,  des4, after des3, 3d
ngAfterContentInit()                :         des5, after des3, 3d
ngAfterContentChecked()               :         des6, after des3, 3d
ngAfterViewInit()               :         des7, after des3, 3d
ngAfterViewChecked()                :         des8, after des3, 3d
section A Change in View was Detected (e.g. mouse click)
DoCheck.ngDoCheck()               :active,  des11, after des8, 3d
ngAfterContentChecked()               :         des12, after des8, 3d
ngAfterViewChecked()                :         des13, after des8, 3d
section Delete Component(Change route)
ngOnDestroy()                :         des10, after des13, 3d

```      
`ngOnChanges` - once - respond when Angular sets (one time, after componet construction) or resets(after each ngDoCheck) data-bound input properties; receives a SimpleChanges object of current and previous property values

`ngOnInit` - once - initialize the directive or component, after Angular displays for the first time the data-bound props or input props - good to gather here the data coming from API calls
`ngDoCheck` - executes when an event occures, before change "detection process" occures.Used to identify wheather change detection process occures or not. Thus, helps to detect or act upon changes that Angular cannot detect on it's own (if you we use 3rd parties controls that Angular cannot recognize - e.g you have JavaScript code that executes outside like a click event))
`ngAfterContentInit` - exe one time in the life of a component, after suppling the component along with parent component (use it to get the content properties of children components), 
`ngAfterContentChecked` - executes each time, after "change detection" process of the component data,
`ngAfterViewInit` - once, after initializing all elements in the template of the component - use it if we need to manipulate properties of the view children(inner templates),
`ngAfterViewChecked` -  executes each time, after "change detection" process of "View" of the component,
`ngOnDestroy` - use it to cleanup: unsubscribe to observables or detach event handlers, just before Angular destroys the component

  For testing use this file: [https://github.com/bitaemi/Angular-ngRx-Jest-Marble/blob/reactive-forms-auth-interceptors-advance/src/app/admin/components/project/project.component.ts](https://github.com/bitaemi/Angular-ngRx-Jest-Marble/blob/reactive-forms-auth-interceptors-advance/src/app/admin/components/project/project.component.ts)

# Passing  data from parent to child component via `@Input` decorator and input property:
In the child component js we pass the input properties using the `@Input` decorator

```TypeScript
// in child componet:

  @Input() hero: Hero;
  @Input('master') masterName: string; // this aliases the master property to masterName as an input
  // in parent component, in the HTML temlate:

  <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
```
# Passing data from child to parent via `@Output` decorator and `EventEmitter`;

```TypeScript
// in child component we declare:

@Output() childToParent = new EventEmitter<String>();
// we need to buble this event with value, to parent components
sendToParent(name){
  this.childToParent.emit(name);
}
```
In the parent component we have to associate childToParent to the property to the child tag.

```TypeScript
<app-child [childToMaster]=product.productName 
(childToParent)=”childToParent($event)”></app-child>
```
Once the value is receved in the parent component, we have to set it:
```TypeScript
childToParent(name){
this.product.productName=name;
}
```
# Passing input to sibling(frate) components :

- a way is to combine data sharings between parent and child, so that subling components talk with the parent and get data from it;
- a second way: share data using `@ViewChild` decorator - allows child component to be injected in parent components. It allows parents to control child's methods and properties, But a parent can get access to the properties after view init event. That means we have to implement ngAfterViewInit life cycle hook in order to get the properties from parent components.
```TypeScript
@ViewChild(AppChildComponent) child;
constructor() { } 
ngAfterViewInit() { 
  this.product.productName=child.masterName; //<= This will set data
}
```
-  another way is to use the hierarchical dependency injection. We create a shared service and we declare it as a provider of the level of the parent that have as children all the components in need for that service

```TypeScript
    providers: [SharedService],
    directives: [ChildComponent, ChildSiblingComponent]
```
and we inject the service in each child component ( as a param in the constructor) and use the service inside the ngOnInit to get the data.

 # Passing data between non related components - use BehavioralSubject
When there is no relation between the components(components are in different modules) or in  scenarios like: you have a list of products and click on a particular product and then redirect to product details components. In these kinds of scenarios, we have to use data service to share data between components.
For creating data service. We have to define `BehaviorSubject`. `BehaviorSubject` holds the current value and the last value.
```TypeScript
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import {Product} from './product';

@Injectable()
export class SharedDataService {
      constructor(){}
   //Using any
    public editDataDetails: any = [];
    public productData:Product={} as Product;
    private messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    //Using Interfaces
      private productRecord: BehaviorSubject<Product> = new BehaviorSubject<Product>(this.productData);
 
    public getProductRecord(): Observable<Product> {
      return this.productRecord.asObservable();
    }
 
    public setProductRecord(product: Product): void {
      this.productRecord.next(this.productData);
    }
    
}
```
I always prefer to use BehaviorSubject because of following reasons:
- It automatically updates the lates value wherever subscribed.
- Always give last value when called via `getValue()` method.
No need to call next, just create a set and get method in order to get value.
In the data service, I have created messageSource as BehaviorSubject. This accepts editDataDetails as any. We can create editDataDetails as the type of Product interface which is a much better practice. Create changeMessage method which will set the current value of observables.
```TypeScript
export class SharedDataService {
  constructor(){}
  //Using any
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
```
Now we have to share this service for the component where we want to get set the values. Call changeMessage method with value as parameter to set the value. In component where we want to receive the value subscribe it. Once you subscribe you will always get the latest value without any code changes.

```TypeScript
//Set value in component 1
this.sharedDataService.changeMessage("message here");
//Get value in component 2
selectedMessage:any;
ngOnInit() {
 this.sharedDataService.currentMessage.subscribe(message => (this.selectedMessage= message)); //<= Always get current value!
}
```
Bonus 1: Creating Get and Set Property and BehaviourSubject:
In the above example, we can optimize more using Product interface and create a getter and setter method by following method.
```TypeScript
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';
import {Product} from './product';
@Injectable()
export class SharedDataService {
constructor(){}
//Using Interfaces
public productData:Product={} as Product;
private productRecord: BehaviorSubject<Product> = new BehaviorSubject<Product>(this.productData);
public getProductRecord(): Observable<Product> {
return this.productRecord.asObservable();
}
public setProductRecord(product: Product): void {
this.productRecord.next(this.productData);
}
}
```
Now set from the component from where you want to set data. And subscribe the get method to get the latest value of product data.
```TypeScript
//Set value in component 1
var product:Product = {productID:234, productName:"Amazon"}
this.sharedDataService.setProductRecord(product);
//Get value in component 2
selectedProduct: Product;
ngOnInit() {
 this.sharedDataService.getProductRecord().subscribe(p=> (this.selectedProduct= p)); //<= Always get current value!
}
```
# Using ReplaySubject:
 ReplaySubject has a buffer that holds more than one value.
In many scenarios, <b><i>we need subjects to remember old values</i></b>. i.e. in rating product we want to give data to analytic engine in order to check what user selected last three times. In order to achieve this we can create `ReplaySubjects` like this:
```TypeScript
private productRecord: ReplaySubject<Product> = new ReplaySubject<Product>();
```
# Pass data between component using Angular Route:
If you are using router navigation to navigate to other components. You can pass it in the router navigate method.
```TypeScript
//Component 1:
constructor(private router: Router,private renderer: Renderer) {}
this.router.navigate([‘product/productdetail’, { ‘productID’: 21}]);
```
In the above code, we are setting product Id in query param when the component is routing to product details. Now in the product details component grab that id in the constructor.
```TypeScript
//Component 2:
constructor(private route: ActivatedRoute,private router: Router) {
  route.params.subscribe(params => {
    let data = params[‘productID’]
    console.log(`Log the param data ${data}`);
  });
}
```
Here in the second component, you will get productID. Since this data always passes through URL, so it is visible to end users. So avoid passing sensitive information (to prevent any vulnerability). However, you can always leverage this for fewer fields and regular data.

- another way is to use `ngRx` library and to have a centralized store where to store the state of components in a centralized place; The data flow is one way stream of data: from components to the store;

# Subject vs behavior subject

The difference between Subject and BehavioralSubject is that the BehavioralSubject holds one value, Subject doesn't.
BehaviorSubject keeps in memory the last value that was emitted by the Observable. A regular Subject doesn't. If we create a Subject using the RxJs. 

```TypeScript
const subject = new Rx.Subject();
subject.next(1); // even though we push the value 1 on the subject, this is not holded by the subject
subject.subscribe(x => console.log(x));

// while:
const behavioralSubject = new Rx.BehavioralSubject();
behavioralSubject.next(1); // behavioralSubject holds the value 1
behavioralSubject.subscribe(x => console.log(x)); // imediatly after subscribing ve have the value 1, right before we receive the folowing streams of data coming over time from the subscription
```
ReplaySubject has a buffer that holds more than one value.

# `@VewChild` 
- is a property decorator that configures a view query. If the view DOM changes, and a new child matches the selector, the property is updated.

```TypeScript
 @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }
  ``` 
Http header contains: Application, Authorization bearer, Broser type, Origin, Referer

# Http Header Interceptor 

- capture and modify the HTTP requests of the app  - help in secuing the APP implementing JWT ( eg. get the token from the Auth server and then inject it in the request)

- handle HTTP errors in a single,global place
- trace/profile requests - to store those in the cload or for caching resons

So, we implement the ``HttpInterceptor`` and use the `intercept()` method to ``setHeaders: {Authorization: `Bearer ${hardcodedToken`}``
- need to register it in the providers array of the module

```TypeScript
@Injectable()
implements HttpInterceptor {}

```
How to get the entire response from HTTP requst (including the header)?

Using the `get` method of the HTTPClient and providing as params the `url` of the request and also the `{observe: 'response'}` object.

 ```TypeScript
 return this.http
            .get<IItem[]>(url, {observe: 'response'})
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .map( (r: HttpResponse<IItem[]> )  => r.body )
```
# Git stash 

I usualy use the simplest path of working with the stash of code changes :

git stash // when I wand to have the changes I worked on 
git checkout on_some branch or some commit
git stash list // to see what I have in stash
git stash pop // take from stash and put in my working branch

or git stash clear to have a clean stash of changes


# Security principles cookies, local storage 
- Angular is great when it comes to security. Helps with XSS, XSRF, sanitizing inputs. Cookies introduce vulnerabilitie,Nowdays to prevent XSRF, by using web tokens and identity servers we can have secure implementations - like the Single Sign On experience, implementations  of OIDC protocol, OAuth 2;
We can also use less cookies and instead use web tokens, local storage;
We have to pay attention not to send any sensitive date in the router params or in JSON payloads among APIs requests.

# Store critical data - observables, ngrx

# foreach vs map

both are applied to an array and receive a callback fc. as param; `forEach` mutates the array, by alling the callback on each elem of the array; map, does not mutate the array, it returns a new array from the initial array, by apping the function receveide as param, to each element from the initial array

# RXJS observables

RxJs library - used to work with streams of data coming over time;
RxJs operators - some are chainable methods:

- map, 
- subscribe, 
- first, 
- Of - create a stream of data from a provided set of data ,
- pipe - use it to furter process/filter the stream of data
- filter, 
- switchMap operator cancels previous stream of data/subscription, making a new one

# Promise vs observable
# Unit testing framework 
- I've recently used Jest; 
In the past I've used Jasmine with Karma, but Jest is better  because it takes exactly what test fails and at which line. I've tested  Observables in Angular, using Marble Diagrams;

Basically we use moked data to test. For API requests we make the  We use nested `describe` methods in order to provide a description allong side each test. Inside each describe we have fixtures, moked data that we use with methods/syntax like `it` in order to make and check statements like: `expect` `toBeTruthy`, `toBeObservable`. We use the `jest.spyOn()` method to look what happens to a method when we apply a fixture.

```TypeScript
describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // ...
   it('should throw error object', () => {
    const source$ = getData();
    const expected$ = cold('#', {}, new Error('server error'));
    expect(source$).toBeObservable(expected$);
  });
});
```
# CORS - Cross Origin Resouce Sharing 
- is a standard used to allow some cross origin requests, while rejecting others. In sites that offer embeded services we might have to relax some certain restriction, or else we will encouter: CORS error -  the same origin policy disallows reading from remote resource;

# What is `this` object? 
= the CONTEXT, the environment
- inside a function that is the value of a property for an object `ownerObject`, the `this` keyword represents the `ownerObject` object;

# How to change `this`? - 
By the means of:
call / bind / apply - set custom vals for this ( = alter the execution context)
All three functions(call, bind, apply) can be used to set values for `this` object.
The `apply()` method calls a function with a given `this` value, and arguments provided as an array (or an array-like object).
`bind()` creates a new function, from the initial one, where the value of `this` is the value provided as param: const bindedFc= unbindedFc.bind(param)

# Arrow functions - arrow functions
- short notation for anonymous functions, (the `=>` means return). An arrow function expression is similar to what in other programming languages is known as lambda functions;
- a great aspect is that the arrow function alredy binds the `this` keyword from inside the function to the context object where the arrow function is placed; thus if function is declare inside a component, this will be the context of that component;
