import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, empty, Observable } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  describe('Unit Testing TodosComponent', () => {
    beforeEach(() => {
      service = new TodoService(null); // We cheat - anyway we will not use the Http protocol
      component = new TodosComponent(service);
    });

    it('should set todos property with the items returned from server', () => {
      let todos = [1, 2, 3];
      // Arrange:
      // we want to change the implementation of the getTodos method by using the spyOn method from Jasmine
      // with spyOn we get control over a method in a class - can check if a method has been called, we can change it's implementation or return a different value
      spyOn(service, 'getTodos').and.returnValue(from([[1, 2, 3]]));
      // Action
      component.ngOnInit();
      // Assert
      expect(component.todos.length).toBe(3);
      expect(component.todos).toContain(1);
      expect(component.todos).toContain(2);
      expect(component.todos).toContain(3);

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

  describe('Integration Testing TodosComponent', () => {
    let fixture: ComponentFixture<TodosComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [TodosComponent],
        providers: [TodoService],
        imports: [HttpClient]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TodosComponent);
      component = fixture.componentInstance;
      // by fixture.detectChanges() we make angular to execute ngOnInit
      // after running fixture.detectChanges() all the API calls/methods from ngOnInit are already executes
      // it will be to late to apply spyOn on methods called in ngOnInit, in order to change the behavior of these methods
      // ang return testing values
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should load todos from the server', () => {
      // if the service is registered in the providers array,at the level of the module,
      // this will become a singleton =  a single instace shared across all components in module
      // then you can take it from the TestBed: 
      let service = TestBed.get(TodoService);
      // if the service is registered directly in the component's metadata, then you will:
      // let service = fixture.debugElement.injector.get(TodoService);
      // we need to change the behavior of getTodos method, using a spy 
      // - basically intercept the response and return a fake stream of data created from a testing array:
      spyOn(service, 'getTodos').and.returnValue(from([1, 2, 3]));
      fixture.detectChanges();
      expect(component.todos.length).toBe(3);

    });
  });
})
