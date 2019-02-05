<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [NgRx Implementation](#ngrx-implementation)
  - [Why REACTIVE](#why-reactive)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# NgRx Implementation

## Why REACTIVE

{

 - WHY: scale insanely, reduce latency

 - Reactive example : Microsoft EXCEL, everything in IT, nowdays is reactive interaction.

 - Programming in reactive + functional style.

 - functional = (functional composition + lazy evaluation);

 - lazy evaluation == efficiency (avoiding things that shouldn't be done in the first place)

 - do not expose your datatabase(never share databases!), instead export your data

}

Understanding the OBSERVABLE PATTERN is the key for understanding RxJs Library and using the operators to programm in a reactive style.

Understanding the REDUX PATTERN is the key for understanding ngRx Library and using it to programm in a reactive style.

 - reactive programming = dataflow computing:
 
 a) using OBSERVABLE == STREAM OF DATA - from a big stream of data we extract that particular data to complete required data processing
  
 b) using REDUX == Single STATE TREE(a big Plain JavaScript Object) inside STORE - we use a REDUCER (Pure function) to update the STATE:

respond to acton types, returning a new state.

Both in a) and b) rective styles we use immutable update patterns: 

![One-way DataFlow Diagram](reactive-dataFlow.png)

we do not change the data stream from the input, but rather obtain a new data, and use it.

NgRx library allows to react to state change in an observable stream, we have an observable driven state management.

Understanding the REDUX PATTERN is the key for understanding ngRx Library and using it to programm in a reactive style.

 - manage state using the ngRx STORE

 - redux with observables = manage the state usesing observables streams of data

 - immutable @Inputs (modify the copies of objects, and create new objects using the reference of the initial object)

 - performance benefits because object reference checks are fast (use ChangeDetectionStrategy.OnPush to compare object references, not objects)

 - root and feature module support for: eagerly loaded modules & lazily loaded modules

 - if objects changed after a mutation, we ignore the ChangeDetectionStrategy and we use observables to push new changes down the component tree

 ## Implementation

``ng serve`` will start Angular app at port 4200

  - install @ngrx/effects lib to handle side effects

  - install @ngrx/store-devtools lib to inspect different states before changing a state

  - install on dev @ngrx/store-freeze lib for safety mesure to prevent to modify a state in the wrong way -  in a reducer for example, this package prevents

  us to modify the state - use it only on dev, appling to each reducer a metareducer, like this:

  ```JavaScript
  export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];
  ```
Start the app with proxy server:

``npm run start:proxy`` (see the package.json config)

We use db.json(! outside of /src/assets/ or /src/app/ folder -   to avoid Angular from keeping a watch on data file) as fake server to mock data so:

``npm install json-server --save-dev``

The implementation using the json-server will use port 3000:

``npm run mock:server`` to start json server to watch after data changes inside db.json

Article about using json server with Angular 7 [here](https://medium.com/@kaustubhtalathi/mock-data-for-angular-5-applications-with-json-server-part-1-d377eced223b).


