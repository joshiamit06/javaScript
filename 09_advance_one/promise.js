`*
In JavaScript, a Promise is an object representing the eventual completion (or failure) of
an asynchronous operation and its resulting value. 
Promises provide a more powerful and flexible way to handle asynchronous tasks
than traditional callback functions, making the code easier to read and maintain.


Key States of a Promise:

Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation was completed successfully, and the promise has a result (resolved).
Rejected: The operation failed, and the promise has an error (rejected).
*`

```
Creating a Promise:
``` 

let myPromise = new Promise(function(resolve,reject){
    let success = true
    if (success){
        resolve("Succeeded")
    }else{
        reject("Failed")
    }
});

```
Using Promises:
Promises have two key methods to handle the results of the async operation:

.then(): Executes when the promise is resolved (fulfilled).
.catch(): Executes when the promise is rejected (failed).
```
myPromise
.then(function(result){
    console.log(result)
})
.catch(function(result){
    console.log(result);
    
})

```
async / await:

Promises can also be used with async and await, 
making the code even more readable and synchronous-looking.

```
async function myAsyncFunction() {
    try {
      let result = await myPromise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  