const score = 400
// console.log(score);

const balance = new Number(100)  

console.log(typeof balance)      // object
// console.log(balance);         // [Number: 100]


//+++ convert number into string

//balance.toString()          // In Python - str(balance)   - convert no into string
                              // In Python - int(val)       - convert string into num
 
// console.log(balance.toString().length);    // In python - len(str)  - to find length of string

// +++ To get a precision value after decimal point in float


// console.log(balance.toFixed(1));               // 100.0
// console.log(balance.toFixed(2));               // 100.00


// +++ There is another property to get precise value after decimal point i.e. toPrecision()
// +++ it returns string
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));       // 123.8

const number = 23.8966
// console.log(otherNumber.toPrecision(4));       // 23.89

const num = 123.8966
// console.log(otherNumber.toPrecision(3));       // 123

// ++++ to convert numbers into readable formats

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);                      // Object
// console.log(Math.abs(-4));              // 4    //to convert negative into positive. Wont convert positive into negative
// console.log(Math.round(4.6));           // 5
// console.log(Math.ceil(4.2));            // 5    //to choose upper value 
// console.log(Math.floor(4.9));           // 4    //to choose lower value
// console.log(Math.min(4, 3, 6, 8));      // 3
// console.log(Math.max(4, 3, 6, 8));      // 8

console.log(Math.random());                // it provides random value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// +++ formula to get any value between a range. here in between 10 and 20

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)