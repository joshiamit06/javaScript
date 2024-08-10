// array
// Similar to list in Python

// Arrays are resizable, can contain different datatypes, arrat elements can not be accessed using
// arbitiary string. can be accessed using indices only.
// When we create copy of array it creates shallow copy 

// ++ different ways of declaring Arrays

const arr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)  // dont give square bracket while declaring array with Array class.
// console.log(myArr2[1]);            // 2

// ++ Array methods

const myArr = [0, 1, 2, 3, 4, 5]
// myArr.push(6)                     // Add element at last in array. similar to list.append(3) in python.
// console.log(myArr);               // [1,2,3,4,5,6] 
// myArr.push(7)
// console.log(myArr);               // [1,2,3,4,5,6,7]

// myArr.pop()                       // remove last element in array. similar to list.pop() in python.
// console.log(myArr);               // [1,2,3,4,5,6]


// myArr.unshift(9)                  // add any element at the start of array. similar to list.insert(0, 6)
                                     // if shifts all subsequent elements. Time complexity is high

// console.log(myArr)                // [9,1,2,3,4,5,6]  

// myArr.shift()                    // to remove first element in array. similar to list.pop(0) in python
// console.log(myArr)               // [1,2,3,4,5,6]

// console.log(myArr.includes(9));  // false
// console.log(myArr.indexOf(3));   // 3
// console.log(myArr.indexOf(98));  // -1   // gives -1 when ele is not present in array

// const newArr = myArr.join()      // convert array into string

// console.log(myArr);              // [1,2,3,4,5,6]
// console.log( newArr);            // 1,2,3,4,5,6
// console.log(typeof newArr);      // string

// slice, splice
const newArr = [0, 1, 2, 3, 4, 5]

console.log("A ", newArr);          // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = newArr.slice(1, 3)

console.log(myn1);                  // [ 1, 2 ]
console.log("B ", newArr);          // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = newArr.splice(1, 3)
console.log("C ", newArr);          // C  [ 0, 4, 5 ]
console.log(myn2);                  // [ 1, 2, 3 ]


// Slice : The slice() method in JavaScript extracts a section of an array 
//         and returns a new array containing the selected elements, without modifying the original array.

//Splice : The splice() method in JavaScript is used to change the contents of an array 
//         by removing or replacing existing elements and/or adding new elements in place, modifying the original array.