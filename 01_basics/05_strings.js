const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");   old way to use string concatenations

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')   //To declare string, but with this it will create string obj

// console.log(gameName[0]);    // it will give first element in string
// console.log(gameName.__proto__);          // it will give the prototype of obj which is created at line 8   


// console.log(gameName.length);          // To access string methods
console.log(gameName.toUpperCase());   // To access string methods, it will not chnage original value of variable
                                        // rather it will creates copy. based on Stack principle
                                        // In Python - gameName.upper() 
console.log(gameName.charAt(2));        // In Python - gameName[2]
console.log(gameName.indexOf('t'));     // In Python - gameName.index('t')

const newString = gameName.substring(0, 4)   // In Python - gameName[0:4]
console.log(newString);                   // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);                 // to get reverse value in string

const newStringOne = "   hitesh    "
console.log(newStringOne);                  // "   hitesh    "
console.log(newStringOne.trim());           // "hitesh"   // trim will remove start and end spaces
                                            // In Python - newStringOne.strip()

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));     // [ 'hitesh', 'hc', 'com' ]   // split converts string into array
                                      // In Python - gameName.split('-')

// for more details check mdn documentation of string methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
