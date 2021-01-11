<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Unit testing examples:](#unit-testing-examples)
  - [Setup methods for testing](#setup-methods-for-testing)
  - [Test component that has injected a FormBuilder](#test-component-that-has-injected-a-formbuilder)
  - [Test a component with event emitter](#test-a-component-with-event-emitter)
  - [Test a component that has an injected service](#test-a-component-that-has-an-injected-service)
- [Integration testing examples](#integration-testing-examples)
  - [Testing Templates](#testing-templates)
  - [Testing Navigation](#testing-navigation)
  - [Testing Directives](#testing-directives)
  - [Dealing with asynchronous operations](#dealing-with-asynchronous-operations)

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
Because the standard compile way in Angular is done using Webpack, all components,templates and stules are bundled into one single js file, thus the .compileComponets() is not necessary and we can have just one single beforeEach block.

## Testing Templates

## Testing Navigation
## Testing Directives
## Dealing with asynchronous operations