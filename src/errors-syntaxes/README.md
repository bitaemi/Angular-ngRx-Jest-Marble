<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Why Handle Errors](#why-handle-errors)
- [Marble testing for errors](#marble-testing-for-errors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Why Handle Errors

- program may crash
- end-user may loose their data
- helps solve issues dificult to trace

# Marble testing for errors

 - hash symbol (#) is used to represent error in the timeline '----a---b----#'
 - to model the error behaviour both hot() and cold() methods are used:
```   
   cold(<marble syntax>, mocked-data-map, error); // 3th param is the error obj that you whant to pass for unit tests
   hot(<marble diagram>, mocked-data-map, error);
```

```TypeScript
describe('Error Handling', () => {
  it('should have defualt error', () => {
    const source$ = throwError('error'); // use throwError from RxJs to generate source  Observable data - immediatly throws an error
    const expected$ = cold('#', {}, 'error'); // test observable can be modeled with cold() method 
    //  const expected$ = cold('#'); it also works because by default the error message for such marble diagram will be the string 'error'
    expect(source$).toBeObservable(expected$);
  });

  it('should throw error object', () => {
    const source$ = getData();
    const expected$ = cold('#', {}, new Error('server error'));
    expect(source$).toBeObservable(expected$);
  });

  it('should give 2 values and then throw error', () => {
    const source$ = getEmployees();
    const expected$ = cold(
      '(xy#)',
      { x: 'orange', y: 'apple' },
      new Error('server error')
    );
    expect(source$).toBeObservable(expected$);
  });
});

function getData() {
  return throwError(new Error('server error'));
}

function getEmployees() {
  return Observable.create(observer => {
    observer.next('orange');
    observer.next('apple');
    observer.error(new Error('server error'));
  });
}
```