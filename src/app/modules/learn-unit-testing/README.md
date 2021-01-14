<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Unit testing examples:](#unit-testing-examples)
  - [Setup methods for testing](#setup-methods-for-testing)
  - [Test component that has injected a FormBuilder](#test-component-that-has-injected-a-formbuilder)
  - [Test a component with event emitter](#test-a-component-with-event-emitter)
  - [Test a component that has an injected service](#test-a-component-that-has-an-injected-service)
- [Integration testing examples](#integration-testing-examples)
  - [Test file generation](#test-file-generation)
  - [Test setup](#test-setup)
  - [Testing Templates](#testing-templates)
    - [Testing property and class bindings](#testing-property-and-class-bindings)
    - [Testing Event Bindings](#testing-event-bindings)
  - [Testing with dependencies](#testing-with-dependencies)
    - [Providing Dependencies](#providing-dependencies)
    - [Getting the dependencies](#getting-the-dependencies)
    - [Providing Stubs](#providing-stubs)
  - [Testing Navigation](#testing-navigation)
    - [Dealing with router params](#dealing-with-router-params)
    - [Providing RouterOutlet Components](#providing-routeroutlet-components)
  - [Shallow Component Testing](#shallow-component-testing)
  - [Testing Attribute Directives](#testing-attribute-directives)
  - [Dealing with asynchronous operations](#dealing-with-asynchronous-operations)
  - [NgZone](#ngzone)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
# Unit testing examples:

## Setup methods for testing

```TypeScript
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  // Arrage
  // each test should run in an isolated world
  beforeAll(() => {
    // what needs to be executed before all tests
  });

  beforeEach(() => {
    // setup
    // before each test, component should be reinitialized so that previously runned test won't affect running test
    component = new VoteComponent();
  })

  afterEach(() => {
    // tear down
  });

  // define as many tests as there are execution paths for all methods of the component
  // a test or spec is defined by it() function
  it('should increment totalVotes when upvoted', () => {
    // Act - call a method
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // Act - call a method
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
  afterAll(() => {
    // what needs to be executed after all tests
  })
});
``` 
## Test component that has injected a FormBuilder

```TypeScript
export class TodoFormComponent { 
  form: FormGroup; 

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }
}
```
we have the following unit tests:

```TypeScript
describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();

  });

  it('should make the name control required', () => {
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
```
## Test a component with event emitter
```TypeScript
import { EventEmitter } from '@angular/core'; 

export class VoteComponent { 
  totalVotes = 0; 
  voteChanged = new EventEmitter();

  upVote() { 
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
```
unit test:
```TypeScript
 it('should raise voteChanged event when upvoted', () => {
    // beause event emitter is an observabale we can subscribe to get the event raised
    // INITIALIZATION
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);
    // ACT
    component.upVote();
    // expect(component.totalVotes).not.toBeNull(); this test will pass even though we have a bug in the component
    expect(component.totalVotes).toBe(1);
  });
  ```

## Test a component that has an injected service
Component:

```TypeScript
  import { TodoService } from './todo.service'

export class TodosComponent { 
  todos: any[] = [];
  message; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
```
Testing:
```TypeScript
describe('TodosComponent', () => {
	let component: TodosComponent;
	let service: TodoService;

	beforeEach(() => {
		service = new TodoService(null); // We cheat - anyway we will not use the Http protocol
		component = new TodosComponent(service);
	});


  xit('should set todos property with the items returned from server', () => {
    let todos = [1, 2, 3];
    // Arrange:
    // we want to change the implementation of the getTodos method by using the spyOn method from Jasmine
    // with spyOn we get control over a method in a class - can check if a method has been called, we can change it's implementation or return a different value
    spyOn(service, 'getTodos').and.returnValue(from([[1, 2, 3]]));
    // Action
    component.ngOnInit();
    // Assert
    expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the chages when a new todo item is added'), () => {
    // arrange - make sure that the add method from service is called
    let spy = spyOn(service, 'add').and.callFake(todoItem => {
      return empty();//from([[1, 2, 3, 4]]);
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  }
  it('should add a new todo from the server'), () => {
    let todo = { id: 1 };
    // arrange - make sure that the add method from service is called
    let spy = spyOn(service, 'add').and.returnValue(from([{ id: 1 }]));
    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  }

  it('should set the message property when server gets an error when adding a new todo'), () => {
    let error = 'error from the server';
    // arrange - make sure that the add method from service is called
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));
    component.add();
    expect(component.message).toBe(error);
  }
  it('should call the server to delete a todo item if the user confirms'), () => {
    let todoId = 1;
    // arrange - make sure that the add method from service is called
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(empty());
    // act
    component.delete(todoId);
    expect(spy).toHaveBeenCalledWith(todoId);
  }
  it('should NOT call the server to delete a todo item if the user cancels'), () => {
    let todoId = 1;
    // arrange - make sure that the add method from service is called
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(empty());
    // act
    component.delete(todoId);
    expect(spy).not.toHaveBeenCalled();
  }

});
```
# Integration testing examples

## Test file generation 

Angular's CLI will generate the spec files along with componnet/service/pipe/directive genaration;

For unit testing can rename the .spec file to unit.spec and have separated spec file for integration testing.

A generated .spec file contains:

```TypeScript
 // we run an asynchronous function that will return a normal function to execute before each test execution
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent ]
    })
    .compileComponents(); // the async function execution is done because it takes time to compile all components from 
    // declarations array along with their templates and syles
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
```
Because the standard compile way in Angular is done using Webpack, all components,templates and styles are bundled into one single .js file, thus the compileComponets() is not necessary and we can have just one single beforeEach block.

## Test setup

```TypeScript
describe('VoterComponent', () => {
    let component: VoterComponent;
    let fixture: ComponentFixture<VoterComponent>;
    beforeEach(() => {
        // for integration testing we cannot create the instance of the component
        // we need to ask Angular to create that instance for us
        // using utility methods from TestBed class we, first create a dynamic module for our component
        TestBed.configureTestingModule({
            declarations: [VoterComponent] // for this simple component there's no need of imports or providers array
        });
        // now we instruct Angular to create the component
        // TestBed.createComponent(VoterComponent); // this returns a component fixture of type <VoterComponent>
        // so this component fixture is a wrapper over our component's instance and also over its template
        fixture = TestBed.createComponent(VoterComponent);
        // use it to get an instange of the component, can run change detection manually and also get one or more of the injected dependencies in this component,
        component = fixture.componentInstance;
        // the fixture.nativeElement = the root DOM element for this component's template
        // the fixture.debugElement = a wrapper around nativeElement providing useful methods for quering the DOM
    });

});
```
## Testing Templates
### Testing property and class bindings
  We are interested to check what exactly we have in the DOM (HTML template), thus we use the query method of debuggerElement wrapper to traverse the DOM and find elements corresponding either to css selectors or HTML attributes

For voter componet we have the following template:
```HTML
    <i 
      class="glyphicon glyphicon-menu-up vote-button"
      [class.highlighted]="myVote == 1"
      (click)="upVote()"></i>

  <span class="vote-count">{{ totalVotes }}</span>
```
a) Check if the innerText of the element with `.vote-count` class contains the proper totalVotes string:

```TypeScript

    it('should render total votes', () => {
        component.myVote = 1;
        component.othersVote = 20;
        // need to explicitlly tell Angular when to perform change detection
        // because in testing env, it does not run as it normally does
        fixture.detectChanges();

        let debugElem = fixture.debugElement.query(By.css('vote-count')); 
        // returns first HTML element that matches the interogation
        // can use By with .directive instead of .css and it will return the
        // DOM element on which the specified directive is applied
        let el = debugElem.nativeElement; // debugElement is of type HTMLElement
        expect(el.innerText).toContain(21);// if we would have used toBe the test would have been too fragile
        // when working with strings better use toContain instead of toBe
    });
    
```    
b) Check if, when I have upvoted, then the icon with class `.glyphicon-menu-up` should also have the `highlighted` class;

```TypeScript
it('should highlight the upvoted button, if I had upvoted', () => {
        component.myVote = 1;
        fixture.detectChanges();
        let debugElem = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        // no need for native element to check for the existence of a class on the
        // html element - use classes property of debugElem (can acess also styles and attributes properties)
        expect(debugElem.classes['highlighted']).toBeTruthy();
    });
```    
### Testing Event Bindings
```TypeScript

    it('should increase total votes when I click the upvote button', () => {
        let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        // we need to explicitly trigger the click:
        button.triggerEventHandler('click', null); // this is for integration testing
        // for Unit testing you will simply have: component.upVote();
        expect(component.totalVotes).toBe(1);
    });
```
## Testing with dependencies
### Providing Dependencies
```TypeScript
beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [TodosComponent],
        providers: [TodoService],
        imports:[HttpClient]
      })
      .compileComponents();
    }));
```    
### Getting the dependencies

  If the service is registered in the providers array,at the level of the module,
  this will become a singleton =  a single instace shared accross all components in module
  then you can get this service dependency from the TestBed: 
```TypeScript
      let service = TestBed.get(TodoService);
```  
 If the service is registered directly in the component's metadata, then you will get the corresponding service dependecy, injected in the component, from the debugElement wrapper:
 ```TypeScript
       let service = fixture.debugElement.injector.get(TodoService);    
```  
Delete the ```fixture.detectChanges();``` generated along with component because calling this method before each test execution will make Angular to execute ngOnInit with all it's API calls/methods before getting the chance to spyOn on these methods called in ngOnInit, in order to change the behavior and return testing values.

Thus:
```TypeScript
 it('should load todos from the server', () => {
      let service = TestBed.get(TodoService);
      spyOn(service, 'getTodos').and.returnValue(from([1, 2, 3]));
      fixture.detectChanges(); // trigger Angular's detect change mechanism only after apply spyOn to the methods from ngOnInit 
      expect(component.todos.length).toBe(3);
    });
```    
### Providing Stubs (e.g. a fake router)

Inside user-details.spec.ts we want to ensure that the navigate method of the router is called with the right arguments.
 For:
```TypeScript
  save() { 
    this.router.navigate(['users']);
  }
```  
Testing using the router itself is part of Angular's testing, not our app testing. Thus, we provide a stub = a fake router 
which will be a lightweight implementation of Angular's router that has onlu methods that we have used inside our component.
we need:
```TypeScript
// ...
class RouterStub {
  navigate(params) {

  }
}
// ...
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      // we register RouterStub class as a provider, insted on Router itself
      providers: [
        // we tell Angular that when it sees injected into component's constructor an instance of Router class
        // it should create an instance of RouterStub, and use this object instead of Router's instance 
        { provide: Router, useClass: RouterStub}
      ]
```      
Similarly, use stubs for all the other dependencies that have been injected into the component.

## Testing Navigation
```TypeScript
  it('should redirect the user to the user\'s page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate'); // we already use a stub and there is no need to .and.callFake...
    component.save();
    expect(spy).toHaveBeenCalledWith(['users']);
  });
```  
Second test of route did not work ???. Also running:
``npm test src/app/app-routing.spec.ts`` test failed :-??
```TypeScript
import { UsersComponent } from './components/user-component/users.component';
import { learnUnitTestRoutes } from './learn-unit-testing.module';
describe('learn-unit-testing module\'s routes', () => {
    xit('should contain a route for /users', () =>
    {
        // it does not pass - ???
        let childrenRoutes: Route[] = learnUnitTestRoutes[0].children;
        expect(childrenRoutes).toContain({ path: 'users', component: UsersComponent });
        // I do not know how to fix it
    })
})
```
### Dealing with route parameters

Because inside component's implementation we are using the params property from ActivatedRoute:
```TypeScript
  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === 0)
        this.router.navigate(['not-found']);
    });
  }
```
we need to get and test params passed in the route:

```TypeScript
  it('should redirect the user to the not found page if an invalid user id is passed', () => {
    let router = TestBed.get(Router);
    // put a spy on the route to assert the navigate method has been called
    let spy = spyOn(router, 'navigate');
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    // we need to push a value in the observable stream of route's params
    // on route.params we have only methods to read, not to push any data,
    // but we'll use the ActivatedRouteStub, to have fake needed route's params
    route.push({ id: 0 });
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
```
where:
```TypeScript
class ActivatedRouteStub {
  private subject = new Subject();
  // Subject it is an Observable, but it has also Observer capabilities and 
  // we can use  it to push values into the observable
  push(value) {
    this.subject.next(value);
  }
  // declare params as a public property:
  get params() {
    return this.subject.asObservable();
  }
}
```
For me the test did not pass - no method call ?? anyway, the redirect is done inside ngOnInit, thus before:
``fixture.componentInstance`` - called before each test.
### Providing RouterOutlet Components

We need to ensure that:

```TypeScript
  <router-outlet></router-outlet>
```
it is present inside app.component.ts, thus inside the app.component.spec.ts:

```TypeScript
it('should have a router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement.query(By.directive(RouterOutlet))
    expect(de).not.toBeNull;
  });
```
for this to work we need to use Angular's RouterTestingModule class like this:

```TypeScript
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        // ...
      ],
      //...
```     
For testing if specific router links are present we need to check if specific href value exists among all tags with routerLink attribute, e.g. for:
```HTML
<a class="nav-link" routerLink="about">About Info</a>
```
Will query component's wrapper by the ``RouterLinkWithHref`` directive:
```TypeScript
  it('should have a link to about page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === 'about');
    expect(index).toBeGreaterThan(-1);
  });
```  
## Shallow Component Testing    

For complex templates, with many child templates(components), for testing you will either need to declare each child component inside the testing module, or, the simples way is to add: ``schemas: [NO_ERRORS_SCHEMA]``, after including just the main component in declarations array:

```TypeScript
 beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AboutComponent,
        LoginComponent,
        SignUpComponent,
        AlertDirective,
        RepeaterDirective,
      ],
      // schemas: [NO_ERRORS_SCHEMA], use this when you have too many components in the declarations array
      // thought it is safer for testing to include all your components
      // for me, using schemas, did not work, I had to include components
```      

## Testing Attribute Directives
For testing attribete directives, the key is to use a DirectiveHostComponent and configure testing modules as below:

```TypeScript
@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

// ...
describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));
  //...
    it('should highlight the first element with cyan', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  
  it('should highlight the second element with default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];
    // get the reference to the highlight directive in order to read it's default color
    let directive = de.injector.get(HighlightDirective);
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
```
## Dealing with asynchronous operations
```TypeScript
    it('should load todos from the server via Promise', async(() => {
      let service = TestBed.get(TodoService);
      spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
      fixture.detectChanges(); // at this step ngOnInit is triggered
      // but the async operation to fetch data are not yet completed when below is executed
      // thus, we have to use the whenStable method which resolves a promise when all async operations from our component 
      // are already completed
      fixture.whenStable().then(() => {
        expect(component.todos.length).toBe(3);
      });
      console.log('EXPECTED WAS CALLED'); // because outside whenStable it gets execued before promise's resolve from ngOnInit

    }));
```
or:

```TypeScript

    it('should load todos from the server via Promise fakeAsync', fakeAsync(() => {
      let service = TestBed.get(TodoService);
      spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
      fixture.detectChanges();
      tick(); // this simulates the passage of time
      expect(component.todos.length).toBe(3);
      // because this is after tick, will exe after all async op from component are finished
      console.log('EXPECTED WAS CALLED');

    }));
``` 

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
      // run this code in the background, outside Angular Zone - thus outside component's zone => component view 
      // does not get updated via data binding (e.g {{n}} in the html template)
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