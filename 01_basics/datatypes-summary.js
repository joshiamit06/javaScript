//  Primitive (call by value)
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// undefined is variable is declared, memory space is assigned but it is yet to be defined.
// null doesnt mean that its has 0 value. null means it is empty.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol is used to define unique values.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) (call by reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//check below doc to see what value will receive when we do typeof any value


// https://262.ecma-international.org/5.1/#sec-11.4.3

