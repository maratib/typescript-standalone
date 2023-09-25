# RxJS 
RxJS is a library for `observing` and `reacting` to `data` and `events` by using observable sequences.

## Observable 
- Collection of items emitted over time

## Observer
- Observes notifications from the Observable
- Methods to process the notifications:  
`next()`, `error()`, `complete()`
```javascript
// its an interface like 
interface Observer {
  next();
  error();
  complete();
}
```

## Subscriber 
- An Observer that can unsubscribe

## Subscription 
- Tells the Observable that the subscriber is ready for notifications.
- `subscribe()` returns a Subscription
- Use Subscription to unsubscribe.

## Constructor
## Creation function
- of, from, fromEvent, interval ...
- Create an Observable from anything

## Returned from an Angular Features
- Forms: valueChanges
- Routing: paramMap
- HTTP: get

## map
- map is a transformation operator
- Subscribe to its input Observable
- Creates an output Observable  
***When an item is emitted***
- It is transformed as specified by the provided function
- Transformed item is emitted to the output Observable
```javascript
of(2, 4, 6) //source 
.pipe(
  map(item => item * 2),
  map(item => item -3)
).subscribe(console.log)
```

## tap
- tap is a utility operator
- Subscribes to its input Observable
- Creates an output Observable   
***When an item is emitted***
- Performs a side effect as specified by a provided function
- Original item is emitted to the output Observable    

***The purpose of `tap` operator to perform operation that does not effect the emitted items***
- Taps into the emissions without affecting the items
- For each item emitted in, the same item is emitted out.
- Used for debugging purposes
- Performing actions outside of the flow of data (side effects)  
***Side Effect means?***
- A function performs a side effect if it changes any state that does not effect its return value

## take
- Emits a specified number of items
- Limiting unlimited Observer
- If <= specified number, it emits to the output Observable.
- When it equals the specified number, it completes

```javascript
take(2) // will complete after 2 items
```
