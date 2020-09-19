<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [9. Consuming HTTP Services](#9-consuming-http-services)
  - [9.1. Getting Data](#91-getting-data)
  - [9.2. Creating Data](#92-creating-data)
  - [9.3. Updating Data](#93-updating-data)
  - [9.4. Deleting Data](#94-deleting-data)
  - [9.5. OnInit Interface](#95-oninit-interface)
  - [9.6. Separation of Concerns](#96-separation-of-concerns)
  - [9.7. Extracting a Service](#97-extracting-a-service)
  - [9.8. Handling Errors](#98-handling-errors)
  - [9.9.1. Handling Unexpected Errors](#991-handling-unexpected-errors)
  - [9.9.2. Handling Expected Errors](#992-handling-expected-errors)
  - [9.10. Throwing Application Specific Errors](#910-throwing-application-specific-errors)
  - [9.11. Handling Bad Requests Errors](#911-handling-bad-requests-errors)
  - [9.12. Importing Observable Operators and Factory Methods](#912-importing-observable-operators-and-factory-methods)
  - [9.13. Global Error Handling](#913-global-error-handling)
  - [9.14. Extracting a reusable Error Handling Method](#914-extracting-a-reusable-error-handling-method)
  - [9.15. Extracting a reusable Data Service](#915-extracting-a-reusable-data-service)
  - [9.16. The Map Operator](#916-the-map-operator)
  - [9.17. Optimistic vs. Pesimistic Updates](#917-optimistic-vs-pesimistic-updates)
  - [9.18. Observables vs. Promises](#918-observables-vs-promises)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

#### 9. Consuming HTTP Services

- Use the HTTP services provided by: [http://jsonplaceholder.typicode.com/](http://jsonplaceholder.typicode.com/)

##### 9.1. Getting Data

By simply importing HttpModule, we can use injection without the need to register the ```HTTP`` provider in app.module.ts:

```TypeScript
  imports: [
    //...
    HttpModule
  ],
```
The request of ```http.get``` method is an observable so we can chain its ```.subscribe``` method. there are 3 ways to use this ``.subscribe`` method.

```TypeScript

    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response.json();
      });

```
##### 9.2. Creating Data

Let's send an HTTP POST REQUEST to create data on the server:

```TypeScript
createPost(inputTitle: HTMLInputElement) {
    const post = { title: inputTitle.value };
    inputTitle.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post); //add the post at 0 position in posts array
        console.log(response.json());
      });
  }
  ```
##### 9.3. Updating Data

Use PUT or PATCH to update data via HTTP. We use the PATCH method to update only a few properties in an object.

So instead of sending the complete representation of that object to a server we send only the properties that should be modified.

``this.http.patch(this.url, JSON.stringify({ isRead: true}))``

or:

```this.http.put(this.url, JSON.stringify(post))``` if the PATCH method is not supported and your modifieng only a few properties.

Inspect the network in your browser and in the `Request Payload` you'll see the object sent to stringify.


##### 9.4. Deleting Data

```TypeScript
    deletePost(post) {
        this.http.delete(this.url + '/' + post.id)
            .subscribe(response => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
                console.log('deleted: ' + response.json());
            });
    }
```

##### 9.5. OnInit Interface

As a best practice constructors should be very small and lightweight so we shouldn't perform expensive operations like calling the server.

Components in Angular have LIFECICLE HOOKS. So there are special methods that we can add to our component and Angular will automatically call these

methods at specific times during the lifecycle of a component.

For example when Angular:

-  creates a component (like ``ngOnInit()``) wich is calld when Angualar initializes the component
-  renders it
-  creates and renders its children
-  destroys a component

LIFECYCLE HOOKS:

- OnInit

- OnChanges

- DoCheck

- AfterContentInit

These are examples of life cycle events.

At this point Angular will call specific methods or components if they are defined.

```TypeScript
    constructor(private http: Http) {

    }

    ngOnInit() {
        this.http.get(this.url)
        .subscribe(response => {
            this.posts = response.json();
        });
    }
```

##### 9.6. Separation of Concerns

  We have to respect the SINGLE RESPONSABILITY PRINCIPLE, separating presentation logic from data processing logic.

  In the unit tests we do not want to make calls to a server because:
  - if the server is not up and  running, tests will fail, thought the implementation is correct;
  - all the HTTP calls will slow down automated tests - we want to run hundreds or thousands of automated tests in just a few seconds.

  So we delegate the responsability for all data processing to another class, outside component's class - a SERVICE class.

  All this details about working with this back-end is encapsulated in one place and we can reuse these in multiple places.

##### 9.7. Extracting a Service

``ng g s my-service-name`` and register the new service in app.module ``providers: []``

  In our component we should not inject the ``Http`` class - this is a different concern, instead we inject our service.

```TypeScript
    constructor(private service: PostService) {

    }
```
    and we use in COMPONENT the methods implemented in the SERVICE (in this case, allb these methods return an Observable object):

```TypeScript
//..
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);

  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
```
##### 9.8. Handling Errors

    Unexpected Errors:

    - Server is offline

    - Network is down

    - Unhandled exceptions (bugs presence)

    Expected Errors:

    - 404 - Not Found (e.g. Post not found)

    - 400 - Bad Requst (e.g. Username alreay exists)

##### 9.9.1. Handling Unexpected Errors

Add the second param to your ``.subscribe`` method:

```TypeScript

    .subscribe(
        response => { .. },
        error => {
            // .. alert a toast notification here to inform the user about the unexpected error
            // and log the error somewhere on the server
            }
        );
```

##### 9.9.2. Handling Expected Errors

```TypeScript
    response => {
        // process the data obtained from HTTP call
        },
        (error: Response) => {
            if (error.status === 400) {
                //display the erros on the form:
                this.form.setErrors(error.json());
            } else {
                // A toaster message has to notify the user that the error occurred
                // save/log the error somewhere on the server
            }
        }
```
##### 9.10. Throwing Application Specific Errors

  We have to respect the separation of concerns, so in the component we don't use the ``Response`` object

  because is specific to the HTTP protocol and belongs inside service's language.

  DELETE method of Http class returns an OBSERVABLE  wich is a type that is part of a third party library called reactive extensions = RxJS.

  And this type has a bunch of useful methods that we call operators but these operators are not there by default so WE NEED TO IMPORT THOSE .

  To refactor TypeScript code so that it doesn't depend on rxjs-compat, you can use:

  ``npm i -g rxjs-tslint``

  ``npm install --save rxjs-compat``

- [RxJS v5.x to v6 Update Guide](https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/v6/migration.md#deprecations)

Implementation of HTTP  methods inside the service:

- use ``pipe`` to pass the ``catchError`` method and throw the error.

- we call the ``throw`` static method on the ``Observable`` class, not on a Observable object

```TypeScript
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

//..

deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(
          (error: Response) => {
            if (error.status === 404) {
              return Observable.throw(new NotFoundError(error));
            }
            return Observable.throw(new AppError(error));
          })
      );
  }
```
where NotFoundError, BadRequestError extend the AppError custom class that we add in a commons section of the App.

Usage in component:

```TypeScript
deletePost(post) {
        this.service.deletePost(post.id)
            .subscribe(
                response => {
                    let index = this.posts.indexOf(post);
                    this.posts.splice(index, 1);
                    console.log('deleted: ' + response.json());
                },
                (error: AppError) => {
                    if (error instanceof NotFoundError) {
                        alert('This post was already deleted');
                    } else {
                        alert('Post does not exist');
                    }
                }
            );
    }
```
##### 9.11. Handling Bad Requests Errors

the HTTP create method inside the service:

- use ``pipe`` on the return Observable and pass the ``catchError`` method that thows custom app error objects (BadInput, AppError)

- the custom error objects receice as arguments an original Error object


```TypeScript
createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
    .pipe(
      catchError(
        (error: Response) => {
          if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
          }
          return Observable.throw(new AppError(error.json));
        })
    );
  }
```
Usage in component:

```TypeScript
createPost(inputTitle: HTMLInputElement) {
        const post = { title: inputTitle.value };
        inputTitle.value = '';
        this.service.createPost(post)
        .subscribe(
            response => {
                post['id'] = response.json().id;
                this.posts.splice(0, 0, post);

                console.log(response.json());
            },
            (error: AppError) => {
                if (error instanceof BadInput) {
                this.form.setErrors(error.originalError);
                } else {
                    alert('An unexpected error occurred');
                    //save/log the error somewhere on the server
                    console.log(error);
                }
            }
        );
```

##### 9.12. Importing Observable Operators and Factory Methods

- we call the ``throw`` static method on the ``Observable`` class, not on an Observable object:

`` return Observable.throw(new BadInput(error.json()));``

    We use the throw method to create an instance of the Observable class, an this method is categorised as a FACTORY method.

##### 9.13. Global Error Handling

We handle unexpected errors globaly, to avoid repeting code and to write clean code.

We have a global error handler:

```TypeScript
export class AppErrorHandler implements ErrorHandler {
    handleError(error?) {
        alert('An unexpected error occurred');
        // save/log the error somewhere on the server or console
    }
}
```
wich we need to register in app.module's ``providers[]``.

we add:    ``{ provide: ErrorHandler, useClass: AppErrorHandler }`` object in providers array to instruct Angular that

whenever finds the ErrorHandler class, should replace that implementation with the AppErrorHandler class.

```TypeScript
    ngOnInit() {
        this.service.getPosts()
            .subscribe(
                response => {
                    this.posts = response.json();
                });
        //delete the ErrorHandler because we what to handle the error globally
    }
    //...
    .subscribe(
            response => { .. },
            (error: AppError) => {
                if (error instanceof BadInput) {
                this.form.setErrors(error.originalError;
                } else {
                    // we re-throw the error so that it would be handled by the global handler
                    throw error;
                }
            }
        );
```

##### 9.14. Extracting a reusable Error Handling Method

```TypeScript
deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    } else if (error.status === 404) {
        return Observable.throw(new NotFoundError(error));
    }
    return Observable.throw(new AppError(error));
  }
```
Pass to ``catchError`` a reference to ``handleError`` method.

##### 9.15. Extracting a reusable Data Service

Refactor previous implementation by extracting a reusable service for working with HTTP endpoints:

```TypeScript

  constructor(private http: Http, private url: string) { }

  getAll() {
    return this.http.get(this.url);

  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
        catchError(this.handleError)
    );
  }

  update(resource) {
      return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        .pipe(
            catchError(this.handleError)
        );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    } else if (error.status === 404) {
        return Observable.throw(new NotFoundError(error));
    }
    return Observable.throw(new AppError(error));
  }
  ```

##### 9.16. The Map Operator

Observable's `pipe` that filters the streaming data comming as a response from the HTTP server uses

``map`` method as argument and maps = transforms the response object (the streaming of data) to an array of javascript objects:

```TypeScript
return this.http.get(this.url)
          .pipe(
              map(response => response.json()),
              catchError(this.handleError)
          );
```

##### 9.17. Optimistic vs. Pesimistic Updates

Pesimistic updates refer to the fact that after executing some HTTP request, processed data is displayed

with some delay if operations are applied when proccessing the Observable object returned by HTTP method call.

Optimistic updates reffer to the fact that we proccess and display data before getting the response

from an HTTP call, assuming that the request succeeds but in case of error in ``.subscribe`` method

called on the Observable object returned by the HTTP method call we revert data processed previously:

```TypeScript
deletePost(post) {
        // OPTIMISTICALLY delete the post here, NOT below, when handeling the HTTP request

        this.service.delete(post.id)
            .subscribe(
                null,
                (error: AppError) => {
                    // because the call fails put back the post deleted above
                    // ... handle error messages
                }
            );
    }
```

##### 9.18. Observables vs. Promises

Observables are LAZY = nothing happens untill you subscribe to them.

Promisses are EAGER = as soon as you create a promise ( you invoke it's constructor), the code is executed.

With OBSERVABLES we have powerfull operators that do not exist with promisses and allow us to programm in reactive coding style, using RxJs Extensions (libraries).

You can convert observables to promises.
