
// +++ this refers to current context
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);         // {username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage]}
    }                              // returns current object

}

// user.welcomeMessage()                 // hitesh, welcome to website
// user.username = "sam"
// user.welcomeMessage()                 // sam, welcome to website

// user.welcomeMessage()

// +++ if we do console.log(this) in browser it will return an window object.
// +++ browser has global object i.e. window. 
// +++ so doing  console.log(this) on browser it returns Window obj
// +++ but in IDE there is no global context so it returns an empty obj
// console.log(this);                       // {} // we are in node env so it refers to an empty obj, as there is no global context


// +++ when we print this inside the function it returns object which contains some defualt values, performance values etc
function coffee(){
    console.log(this);      // <ref *1> Object [global] {global: [Circular *1], clearImmediate: [Function: clearImmediate],...}
}
// coffee()

//++ if we try to access any variables inside fun with this. it will not work. it will work only with objects
function chai(){
    let username = "hitesh" 
    console.log(this.username);  // undefined
}

// chai()


const chai = function () {
    let username = "hitesh"
    console.log(this.username);  // undefined
}

// +++++ Arrow Function +++++ //
// +++ this is a way to create an arrow function. in arrow funcion also we cant access variables with this keyword
const chai =  () => {
    let username = "hitesh"
    console.log(this);        // {}
}
// chai()

// basic syntax of creating Arrow function () => {}
const newAddTwo = (num1, num2) => {
    return num1 + num2
}
console.log(newAddTwo())         // 7

// Arrow function with implicit return. no need to use curly brackets {} and return keyword
const impAddTwo = (num1, num2) =>  num1 + num2

// another way of writing it. here we used paranthesis (). if we wrap fun definition in curly bracket then we need to use return keyword
// if we wrap fun definition then dont need to use return keyword.
const firstaddTwo = (num1, num2) => ( num1 + num2 )

// if we are returning obj with arrow function then we need to wrap obj in parenthesis ()
const addTwo = (num1, num2) => ({username: "hitesh"})

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()