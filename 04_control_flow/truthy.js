
// JS will treat empty array, object [], {} as truthy values
const userEmail = []

if (userEmail) {
    console.log("Got user email");             // Got user email
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


//++++ To check if array is empty
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//++++ To check if object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ++++ If we do below comparision will get result as true
//console.log(false==0)                // true
//console.log(false=='')               // true
//console.log(0=='')                   // true


// Nullish Coalescing Operator (??): null undefined (mainly made for null and undefined)


// let val;
// val = 5 ?? 10
// console.log(val)               // 5


// let val2;
// val2 = null ?? 10
// console.log(val2)              // 10

// let val3;
// val3 = undefined ?? 15
// console.log(val3);             // 15


// let val4;
// val4 = null ?? 10 ?? 20
// console.log(val4);             // 10 // it will take first value



// +++ Terniary Operator( ? : ) ( dont confuse with Nullish Coalescing Operator (??) as we seen above)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")