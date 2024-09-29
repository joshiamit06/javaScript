```
Functions are also objects in JS
Function can behave like functions also can be behave like objects in JS


```

function multipleBy5(num) {

    return num * 5
}

multipleBy5.power = 2

console.log(multipleBy5(5));  //25
console.log(multipleBy5.power);    // 2
console.log(multipleBy5.prototype);   // {}

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

//If we have added custom properties to function such as increment/printme then you need to add 
// new keyword before creating its object or this addded custom properties gets reflected when you
//create objects by using new keyword
const chai = new createUser("chai", 25)
chai.printMe() //price is 25
//If you dont add new keyword and trying accessing added properties such as printMe/increemnt it will
//wont work because object/function dont know about this properties untill we create new object with new
//keyword

const tea = createUser("tea", 250)
chai.printMe() //errorr 


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

// ## this is imp, as we discussed above
A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/