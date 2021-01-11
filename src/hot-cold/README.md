<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Model Observables using hot() or cold() methods in unit testing](#1-model-observables-using-hot-or-cold-methods-in-unit-testing)
  - [1. HOT Observables](#1-hot-observables)
  - [2. COLD Observables](#2-cold-observables)
  - [3. Frames in Jasmine and Marble Diagrams](#3-frames-in-jasmine-and-marble-diagrams)
  - [4. Testing COLD Observables](#4-testing-cold-observables)
  - [5. Testing Hot Observables using Marble Diagrams](#5-testing-hot-observables-using-marble-diagrams)
- [2. Unit testing by mocking Observable values](#2-unit-testing-by-mocking-observable-values)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 1. Model Observables using hot() or cold() methods in unit testing

RxJs building blocks:

```
- RxJs PRODUCER (E.G. WEB SOCKET, DOM event) - package sender
- RxJs Observable (ties an observer to producer) - postal operator
- RxJs Observer (listens to producer) - package receiver (the person proving phone number to postal operator in order to be notified about incoming order package)
```

### 1. HOT Observables

```
HOT Observables:
- are required to create resources which are costly to create at each time of subscription (e.g. web sockets, large payloads)
- start emitting values regardless if any subscription to it exists (our live lifes are observed in some point in time by others, though are always available to be observed)
- all subscribers get the latest values at the time they subscribe (e.g: radio channel, cinema theater, mouse clicks event - you only get the latest mouse clicks)
- usually multicast - more subscribers can subscribe but they all listen to the save producer (multiple subs to NETFLIX whatch the same some movies in the same time)
- in RxJs are made using publish() and share()
```

We can translate into an example:
```TypeScript
// source observable
  const source = interval(1000).pipe(
    map(s => s + 1),
    share() // there will be only one producer, shared across the entire subscriers
  )


setTimeout(function() {
  // 1st subscriber after 2 seconds
  log('subscriber1' + ' joined after: ' + 2 + ' seconds');
  source.subscribe(s => log('subscriber1 received: ', s));

  // 2nd Subscriber after 5 Seconds
  setTimeout(function() {
    log('subscriber2' + ' joined after: ' + 5 + ' seconds');
    source.subscribe(s => log('subscriber2 received: ', s));
  }, 5000);
}, 2000);
```
the output of running:
 `node src\hot-cold\hot.js` will be:
```shell
subscriber1 joined after: 2 seconds
subscriber1 received:  1
subscriber1 received:  2
subscriber1 received:  3
subscriber1 received:  4
subscriber2 joined after: 5 seconds
subscriber1 received:  5
subscriber2 received:  5
subscriber1 received:  6
subscriber2 received:  6

``` 
It can be seen that because there is only one producer, both subscribers get the same values at the same time

### 2. COLD Observables

```
COLD Observable (default ngRx Observables):
- creates and activates the producer at the time of subscription
- owns the producer
- there is no data produced until the Observable is subscribed to,by any observer
- subscribers get their own copy of the value coming from producer 
- usually unicast = one subscrieber per producer
- in RxJs are made using Of(), from(), interval()

Examples of COLD Observables:
- watching downloaded movies
- recorded podcasts or songs
- snapshots movies - recorded life time events

```

```TypeScript
const source = interval(1000).pipe(map(s=>s+1));

setTimeout(function() {
  // 1st subscriber after 2 seconds
  log('subscriber1' + ' joined after: ' + 2 + ' seconds');
  source.subscribe(s => log('subscriber1 received: ', s));

  // 2nd Subscriber of the observable source after appears after 5 seconds
  setTimeout(function() {
    log('subscriber2' + ' joined after: ' + 5 + ' seconds');
    source.subscribe(s => log('subscriber2 received: ', s));
  }, 5000); 
}, 2000);
```
 running  `node src\hot-cold\cold.js` we will log:
```bash
subscriber1 joined after: 2 seconds
subscriber1 received:  1
subscriber1 received:  2
subscriber1 received:  3
subscriber1 received:  4
subscriber2 joined after: 5 seconds
subscriber1 received:  5
subscriber2 received:  1
subscriber1 received:  6
subscriber2 received:  2
subscriber1 received:  7
subscriber2 received:  3
subscriber1 received:  8
subscriber2 received:  4
subscriber1 received:  9
subscriber2 received:  5
```
### 3. Frames in Jasmine and Marble Diagrams

- Jasmine-marbles converts observable sequences(streams of data) into frames
- Frame is a JSON that consists of RxJs notification object (the actual value or metadata) that wraps the actual delivered value with additional metadata and message type

```
{
  "frame":0, // frame count encrease by 10 : 0, 10,20 ..
  "notification": {
    "error": undefined|"error",
    "kind":"N"|"C"|"E", // type of the message: next, complete, error
    "hasValue": true|false,
    "value": "a" // value coming from sequence - is undefined for the complete and error kind of messages
  }
```  

- undertanding marble diagrams - examples:

```
'--a--b--|' means first frame is at 0,second at 10, at 20th frame value a is emitted, 30,40 are EMPTY frames, at the 50th frame value b is emitted, at 80th frame the observable is emitting a complete notification

'(a|)' - the value and the complete notifications are emmited at the same time (at frame 0) - this cold observable  is made by calling: `of('a')`
'(ab|)' - val a,b and complete notifications are emitted atthe same time( frame 0) -  obtained by calling : `from(['a', 'b'])`
'(|)' - EMPTY observable
'(aeiou|)' - diagram for an observable of vowels [vauls] all at the same first frame in timeline
```
### 4. Testing COLD Observables

For cold observables testing please see `cold.spec.ts` test file where:
- import { cold } from 'jasmine-marbles';
- import { of, from, EMPTY } from 'rxjs';
- we use the cold method from jasmine-marble, with a marble diagram parameter

```TypeScript
 it('can search an alphabet', () => {
    const provided = search('e')
    const expected = cold('(e|)');
    expect(provided).toBeObservable(expected); // toBeObservable() method creates frames for both the expected and provided observables
  });
``` 
where` search('e')` is basicaly the observable obtained from: `alphabets.indexOf('e') > -1 ? of('e') : EMPTY;`

- in console press p and type the name of the test to run - both the expected and provided observables will be listed as lists of frames thus the error is easy to spot

### 5. Testing Hot Observables using Marble Diagrams

```
- when subscription happened
- is there any unsubscription
- how test observables will behave
- => !undestand subscription model
  {
    "subscribedFrame": number, // when test observable got subscrided
    "unsubscribeFrame": number // when test observable got unsubscrided
  }

Marble diagram for the  HOT source observable:

- '-a---^b---c---|' - every frame before subscription point is negative and thus we start from frame 0 at ^ symbol
- the subscription marble diagram corresponding is:

-       '^-------!' - at 70th frame is the unsubscription point !

translates into the model:

 {
    "subscribedFrame": 0,
    "unsubscribeFrame": 70
  }

  and the test observable will be:

  -     '-b---c---|' - at frame 0 starts, at fram 10 has a value b, ... at frame 90 completes: {    "subscribedFrame": 0,    "unsubscribeFrame": 70  }

  - if there was no ^ subscription point, then the test observable never existed
```

another example:

```
- '-a-^(bc)--' - no complete frame kind
-    '^-----'   - no unsubscribed => the model: { "subscribedFrame": 0,"unsubscribeFrame": Infinity}
-    '-(bc)--'  - test observable
- this kind of HOT observables, with no unsubscribe point, are used to keep the created observable because creation is expensive (for ex. for web sockets)
``` 

```TypeScript
describe('hot', () => {
  it('should test subscription on hot observable', () => {
    // Marble diagram for the  HOT source observable '-a---^b---c---|' 
                 const provided = hot('-a-^b---c-|'); //  every frame before subscription point is negative and thus we start from frame 0 at ^ symbol occurence
    // The subscription marble diagram corresponding to source Observable is:
                 const subscription =    '^------!'; // at 70th frame is the unsubscription point !
    // We use the corresponding test observable('-b---c-|') to create the frame for provided observable           
    expect(provided).toBeObservable(cold('-b---c-|')); // using this assertion method, under the hood, it will subscribe to the provided observable
    expect(provided).toHaveSubscriptions(subscription);
  });

  it('should test subscription on hot observable that never completes', () => {
    const provided = hot('-a-^(bc)--');
    expect(provided).toBeObservable(cold('-(bc)--'));
    const subscription = '^--'; // draw the corresponding subscription marble diagram
    expect(provided).toHaveSubscriptions(subscription);
  });

// test example: user presses keyboard  keys a , b, c,d and CapsLock is on
  it('can convert alphabet to uppercase', () => {
    const alphabets = hot('--a--b--c--d--');
    const provided = convertToUpperCase(alphabets);
    expect(provided).toBeObservable(cold('--A--B--C--D--'));
    const subscription = '^--'; // subscription point is the first frame
    expect(alphabets).toHaveSubscriptions(subscription);
  });
});
```

## 2. Unit testing by mocking Observable values 

- cold(marble-diagram, mock-object-with-values) // cold('(x|)', {x: 'orange'})
- hot(marble-diagram, mock-object-with-values)// hot('(x|)', {x: ['orange', 'apple']})

In console run :

```bash
npm test mocking-observables-values.spec.ts:

#or press p in order to provide the test name to watch
mocking-observables-values.spec.ts:
```
after that you'll be able to watch test running while editing mocking-observables-values.spec.ts:

```TypeScript
describe('can support observable data mocking', () => {
  it('can mock string value', () => {
    // mock the desired string 'apple' and pass it in a single time frame, as a value
    const provided$ = hot('--a--', {
      a: 'apple'
    });
    provided$.subscribe(console.log);
    expect(provided$).toBeObservable(hot('a'));
  });

  it('can search character counts in a given text', () => {
    const searchCharacter$ = hot('--x--', { x: 'a' }); // this observable will emit after 20ms (2 frames)
    const result$ = findCount('marble diagrams', searchCharacter$);
    const expected$ = cold('--y--', { y: 3 });
    expect(result$).toBeObservable(expected$);
  });

  it('can sort prices of the books from highest to the lowest', () => {
    // bookPrices$ observable waits for 2 frames and after 20ms emits the values from array
    const $bookPrices = cold('--a--', {
      a: [3, 69, 1, 4, 6, 33, 10]
    });
    const result$ = sortPrices($bookPrices);

    const expected$ = cold('--X--', {
      X: [69, 33, 10, 6, 4, 3, 1]
    });

    expect(result$).toBeObservable(expected$);
  });

  it('can search book by title', () => {
    const $title = cold('--t--', {
      t: 'The Road Ahead'
    });

    const result$ = searchBook($title);

    const expected$ = cold('--b--', {
      b: { author: 'Bill Gates', libraryID: 1254, title: 'The Road Ahead' }
    });

    expect(result$).toBeObservable(expected$);
  });
});
```


