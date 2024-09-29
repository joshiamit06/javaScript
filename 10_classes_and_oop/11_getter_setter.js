```
Getters and setters in JavaScript provide a way to access and update object properties with more control, encapsulation, and validation. They are methods that allow you to define how a property should be retrieved and modified, while still appearing to users of your object as regular property access.

Key Reasons to Use Getters and Setters:
Encapsulation: They allow you to control access to certain properties, encapsulating internal state. This lets you hide internal logic or data and expose only a controlled interface.
Validation: You can enforce validation rules when a property is updated using a setter, preventing invalid values from being assigned.
Computed Properties: A getter can compute a value dynamically based on other properties, giving the illusion of a static property while actually calculating a value when needed.
Logging or Tracing: Getters and setters can be used to add logging or tracing, which can help in debugging or tracking property accesses and modifications.
Interception: They provide a way to intercept property access and updates, allowing for additional functionality like data transformation or triggering events.


1. Encapsulation
Getters and setters allow you to hide the internal implementation of properties while providing a simple interface for the user. This can prevent misuse of internal data.

Example:

class Employee {
  constructor(name) {
    this._name = name; // Use _name to signify it's private
  }

  // Getter to access the name
  get name() {
    return this._name;
  }

  // Setter to control how the name is updated
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.error('Invalid name');
    }
  }
}

const emp = new Employee('Alice');
console.log(emp.name); // Output: Alice

emp.name = ''; // Error: Invalid name


Here:

The getter provides controlled access to the _name property.
The setter validates the new value and rejects invalid assignments, helping prevent bugs or logical errors.


3. Validation and Control
Setters allow you to control how properties are set, ensuring that only valid data is assigned. This helps in maintaining data integrity within your objects.


class Account {
  constructor(balance) {
    this._balance = balance;
  }

  // Getter for balance
  get balance() {
    return this._balance;
  }

  // Setter with validation for setting balance
  set balance(amount) {
    if (amount < 0) {
      console.error('Balance cannot be negative');
    } else {
      this._balance = amount;
    }
  }
}

const myAccount = new Account(100);
console.log(myAccount.balance); // Output: 100

myAccount.balance = -50; // Error: Balance cannot be negative
console.log(myAccount.balance); // Output: 100 (unchanged)



When to Use Getters and Setters:
Encapsulation: To hide and protect internal object properties.
Validation: To enforce constraints and validations on properties when they are modified.
Computed or Derived Properties: When a value is computed based on other properties or external data.
Lazy Evaluation: For deferring expensive computations until they are actually needed, while allowing for caching.
Interception and Side Effects: When you need to log, audit, or trigger additional actions (e.g., event triggers) when a property is accessed or modified.

```




class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);