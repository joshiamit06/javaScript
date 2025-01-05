```
In JavaScript, static methods are functions that are defined on a class
but are not accessible through instances of the class. Instead, 
they are called on the class itself. Static methods are often utility functions 
that don’t require an instance of the class to operate on.

Key Characteristics of Static Methods:
Belong to the class, not the instance: You can only call them using the class name, not through an
instance of the class.
Cannot access instance properties: Static methods cannot access or modify instance properties
(non-static data) of a class unless they receive an instance as an argument.
Used for utility functions: They are useful for creating utility methods related to the class,
such as calculations, transformations, or validations that don’t need to interact with 
instance-specific data.

Let’s say you want to create a class MathHelper with a utility function for adding two numbers, 
but you don’t want to create an instance of MathHelper every time:

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

// Call the static method without creating an instance of the class
console.log(MathHelper.add(5, 10)); // Output: 15

Practical Use Case: Utility Function Example


class DateUtils {
  // Static method to check if a year is a leap year
  static isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // Static method to get the current date in YYYY-MM-DD format
  static getCurrentDate() {
    const date = new Date();
    return date.toISOString().slice(0, 10);  // format to YYYY-MM-DD
  }
}

// No need to create an instance of DateUtils
console.log(DateUtils.isLeapYear(2024)); // true
console.log(DateUtils.getCurrentDate()); // Output will be the current date in YYYY-MM-DD format



In this example:

isLeapYear and getCurrentDate are both static methods because they perform operations that 
don’t depend on any particular instance of DateUtils. 
They are utility functions that are logically related to date operations, 
so you call them directly on the class (DateUtils) without needing to instantiate it.

```

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")

// not able to access static createId method by object
console.log(hitesh.createId())               // hitesh.createId is not a function 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

// not able to access static createId method by object
console.log(iphone.createId());          // iphone.createId is not a function