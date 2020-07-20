<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Run async tests in a sync manner using Test Scheduler](#run-async-tests-in-a-sync-manner-using-test-scheduler)
- [Race Condition](#race-condition)
- [Debounce Time](#debounce-time)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Testing Business Code

# Run async tests in a sync manner using Test Scheduler

- Scheduler is a primitive inside RxJs schedules a task to perform an action after certain amount of time(the second optional param of RxJs functions)
- Example: in interval(40, async) async sheduler - the async shedular makes the function to wait 40ms each time it calls the subscriber callback method
- TestSheduler (built in schaduler from RxJs) - works with virtual time thus can be used in unit testing to chage behavior of operators and observables
- getTestSheduler creates a TestScheduler and injects it into the observable created by interval(), and hence we can get the callback method called immediatly -that's synchronous
- In Marble Testing, to call the subscribe callback immediatly or synchronously, we flush the TestScheduler

Steps:
- import getTestSheduler from jasmine-marbles
- create observable
- subscribe to observable
- flush the testScheduler

- in dashbord.component.spec.ts:

- using Angular's TestBed to support unit testing (mock services)

```TypeScript
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        {
          provide: UserApi, // before runnig each test, mock UserApi
          useValue: {
            getAllUsers: jest.fn(),
            searchUser: jest.fn()
          }
        }
      ]
    });
  }));

   beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent); // get component's instance from TestBed setup
    component = fixture.componentInstance;
    userApi = TestBed.get(UserApi);// get userAPI's instance from TestBed setup
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can search user by first name', () => {
    const expected$ = cold('-----a|', { a: [{ first: 'John' }] }); // create the observable
    userApi.searchUser = jest.fn(() => expected$); // mock searchUser function and return the desired observable

    component.search('John');
    getTestScheduler().flush(); // call the subscribe  callback immediatly
    expect(component.users).toEqual([{ first: 'John' } as User]);
  });
```  

# Race Condition

= an undesired situation that occurs when a device or system attempts to perform more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly

- how can we introduce unknowingly race conditions when writing reactive code?

```TypeScript
 it('RACE CONDITION: can search user by first name', () => {
    // mock searchUser() to returrn user called John, after 80ms
    userApi.searchUser = jest.fn(() =>
      cold('--------a|', { a: [{ first: 'John' }] })
    );

    component.search('John'); // search for John

    // mock searchUser() to returrn user named Dan, after 20ms
    userApi.searchUser = jest.fn(() =>
      cold('--b|', { b: [{ first: 'Dan' }] })
    );

    component.search('Dan');
    // after all sequenies are done flush testSheduler to call subscribe callbacks for the component immediatly
    getTestScheduler().flush();
    // assert user returned by search API so that I get user John
    expect(component.users).toEqual([{ first: 'John' } as User]);
  });
```
Test passes because John, which is received after 80ms overwrites the Dan response, receved previously, after 20ms (though the call API for Dan entry was the last call)
In order to fix this issue in the ngOnInit() (where we fetch data from API) we use the switchMap()  operator which cancels the previous HTTP request, whenever next request is received, hence you will always receive the latest result.

```TypeScript
export class DashboardComponent implements OnInit, OnDestroy {
  users: User[];
  searchTerm$ = new Subject<string>(); // create a searchTerm$ subject that will be invoked each time user inputs text for search
  searchUserSubscription: Subscription;

  // constructor ...

   ngOnInit() {
  // Filter the searchTerm stream through switchMap operator, where we call search API to get user by first name
    this.searchUserSubscription = this.searchTerm$
      .pipe(
          switchMap(first => this.userApi.searchUser(first)))
      .subscribe(users => (this.users = users)); // subscribe to this observable stream, containing the latest API call response
  }
  // make a method for invoking the user API onKeyUp event
  onKeyUp(first: string) {
    console.log('doing next on searchTerm$');
    this.searchTerm$.next(first);
  }
  // make sure to unsubscribe the subscription for avoiding unnecessary memory leaks
  ngOnDestroy(): void {
    if (this.searchUserSubscription) {
      this.searchUserSubscription.unsubscribe();
    }
  }
  search(first: string) {
    this.userApi.searchUser(first).subscribe(users => (this.users = users));
  }
}
```
The test will now become:
```TypeScript

  it('RACE CONDITION FIXED: can search user by first name', () => {
    userApi.searchUser = jest.fn(() =>
      cold('--------a|', { a: [{ first: 'John' }] })
    );

    component.onKeyUp('John');

    userApi.searchUser = jest.fn(() =>
      cold('--b|', { b: [{ first: 'Dan' }] })
    );

    component.onKeyUp('Dan'); // the moment we made the new search, switchMap operator cancelled previous search

    getTestScheduler().flush();

    expect(component.users).toEqual([{ first: 'Dan' } as User]);
  });
```
# Debounce Time

In order to eliminate unnecesary API calls  (e.g. search API calls at user text input) we discard etntered values in a shorter specified time, using the debounceTime operator form RxJs.


While in dashboard.component.ts we have:

```TypeScript
  // ...
  debounce = 500; // time to wait after last value entered, in order to make a new API call
  scheduler = asyncScheduler; // introduce the time scheduler to use it to perform API call after a certain period of time
  // ...
  ngOnInit() {
    this.searchUserSubscription = this.searchTerm$
      .pipe(
        tap(s => console.log('going to debounce for, ', this.debounce)),
        debounceTime(this.debounce, this.scheduler), // use the scheduler in order to perform task only if there is no activity in the specified this.debounce amount of time
        // switch to the stream observable for the last initiated call request
        switchMap(first => {
          return this.userApi.searchUser(first);
        })
      )
      .subscribe(s => (this.users = s));
  }
}

```  
And the corresponding test:

```TypeScript
  it('Debounce before searching user by first name', () => {
    component.debounce = 30; // additionaly 30ms will take before the API call will be made
    const response = cold('--a|', { a: [{ first: 'Chandra' }] });
    const expected = cold('------b|', { b: [{ first: 'Chandra' }] });// the expected observable will emit after 60ms because 30ms will take in addition(debounce time) before the API call will be made

    userApi.searchUser = jest.fn(() => response); // use Jest to mock the search result method
    const scheduler = getTestScheduler(); // mock the scheduler in order to function with virtual time
    component.scheduler = scheduler; 

    fixture.detectChanges(); // invoke ngOnInit from DashboardComponent
    component.onKeyUp('Chandra'); // invoke search method
    scheduler.flush(); // flush the scheduler in order to execute the sequence and invoke subscribe function in the DashboardComponent

    // make the assertion
    expect(component.users).toEqual(expected.values['b']);
  });
  ```
  In real time the value of 'b' is emitted after 60ms, but in our tests time is virtualized and sequences are syncronous, thus the value is emitted immediatly.