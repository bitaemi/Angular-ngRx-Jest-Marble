import { Observable, empty, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';

class RouterStub {
  navigate(params) {

  }
}

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

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the user\'s page after saving', () => {
    let router = TestBed.get(Router);
    // / we already use a stub and there is no need to .and.callFake...
    let spy = spyOn(router, 'navigate'); 
    component.save();
    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should redirect the user to the not found page if an invalid user id is passed', () => {
    let router = TestBed.get(Router);
    // put a spy on the route to assert the navigate method has been called
    let spy = spyOn(router, 'navigate');
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });
    // we need to push a value in the observable stream of route's params
    // on route.params we have only methods to read, not to push any data,
    // but we'll use the ActivatedRouteStub, to have fake needed route's params
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
