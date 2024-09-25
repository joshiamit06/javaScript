let val = "30"
//console.log(typeof InNumber); // number // to convert string into numbers
//console.log(typeof(InNumber)); // number

let score = "hitesh"
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);   //number
// console.log(valueInNumber);         //NaN


// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);             // true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // "33"
// console.log(typeof stringNumber); // string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // hello hitesh

// console.log("1" + 2);      // 12
// console.log(1 + "2");      // 12
// console.log("1" + 2 + 2);  // 122
// console.log(1 + 2 + "2");  // 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);   // 1
// console.log(+"");     // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);  // 101


// Prefix and Postfix difference example

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion