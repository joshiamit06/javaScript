```
An object literal in JavaScript is a simple and concise way to create objects
using a set of key-value pairs.
It's called "literal" because the object is created directly,
without the need for a constructor function or class.
```
// This is way of creating object literals
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// Constructor function
// let's say if you want to create User2 object then you have to create similar object structor like
// we created for User above. so it is very tidious task so we use constructor function  
// when we use const promise = new Promise() so here new keyword is used to create 
// an object from a constructor funciton 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // if you dont retuned this here, 
                // it will still works as implicitly it is returning this keyword
}

// So by using constructor function and new keyword we can create several copies of similar type of objects
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

```
** new keyword **

In JavaScript, the new keyword is used to create an instance of a user-defined object type
(usually a constructor function or class).
It is essential for initializing objects in a constructor-based approach.
When the new keyword is used, it performs several actions behind the scenes, 
like creating a new empty object, setting up its prototype chain, and returning the newly created object.


How new Works:
When you use the new keyword with a constructor function or class, JavaScript does the following steps:

Creates a new empty object.
Sets the prototype of the new object to the constructor’s prototype, 
allowing the new object to inherit properties and methods from the constructor's prototype.
Binds this to the newly created object inside the constructor, 
making it possible to assign properties to the object.
Returns the new object (unless the constructor explicitly returns an object).

// Syntax
let instance = new ConstructorFunction(arguments);
```

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.start = function() {
      console.log(`${this.brand} ${this.model} is starting`);
    };
  }
  
  // Creating a new instance of Car using the 'new' keyword
  let myCar = new Car('Toyota', 'Camry');
  myCar.start();  // Output: "Toyota Camry is starting"
  
```
With ES6, you can use the new keyword with classes:
```

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  // Creating an instance of Person using 'new'
  let person = new Person('Alice', 30);
  person.greet();  // Output: "Hello, my name is Alice"
  

  ```
  What Happens Behind the Scenes:
  ```
  function Car(brand, model) {
    // Step 1: Creates a new empty object: let obj = {};
    // Step 2: Links the object's prototype to the constructor's prototype: obj.__proto__ = Car.prototype;
    
    this.brand = brand;  // Step 3: 'this' refers to the new object
    this.model = model;
    
    // Step 4: Implicitly returns 'obj' if no explicit return statement is present
  }
  
  let myNewCar = new Car('Honda', 'Civic');
  

```
Important Points About new:
```
// 1. Prototype Chain: The new object created by the new keyword inherits properties 
//and methods from the constructor’s prototype object.

  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
  };
  
  let dog = new Animal('Dog');
  dog.speak();  // Output: "Dog makes a sound"
  
  //2. Omitting new Can Cause Errors: If you forget to use the new keyword when calling 
  //a constructor function, the function will execute in the global context
  // (or the current context in strict mode), 
  //and this will refer to the global object (or undefined in strict mode).

  function Car(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  let mySecondCar = Car('Toyota', 'Corolla');  // Forgot to use 'new'
  console.log(brand);  // "Toyota" gets attached to the global scope (bad practice)
  

  //3. Return Behavior: If a constructor function explicitly returns an object, 
  //new will return that object instead of the newly created one. 
  //If the constructor returns a non-object (e.g., a primitive), the newly created object 
  //is returned as normal.

  function Laptop(brand) {
    this.brand = brand;
    return { type: 'Gaming Laptop' };  // Explicitly returns an object
  }
  
  let myLaptop = new Laptop('Dell');
  console.log(myLaptop);  // Output: { type: 'Gaming Laptop' }

  // However, if you return something like a number, the new instance is returned as expected:


  function Book(title) {
    this.title = title;
    return 42;  // Returning a primitive value
  }
  
  let myBook = new Book('JavaScript Essentials');
  console.log(myBook.title);  // Output: "JavaScript Essentials"

  ```
When to Use new:
You use the new keyword when you want to create an instance of an 
object that will inherit from a constructor function or a class, gaining access 
to properties and methods defined in their prototype.
  ```