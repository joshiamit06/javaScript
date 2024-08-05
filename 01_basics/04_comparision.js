// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true . converts "2" into a number. and compares 2 >1
// console.log("02" > 1);

console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null >= 0);   // true

// reason of above comparision is different coz equality check (==) and comparisions (<, >, >=, <=)
// works differently . comparisions converts null to a number , treating it as 0 thats why
// null >= 0 is true and null > 0 is false.


console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// === 
// it checks data type as well as value of that variable
console.log("2" === 2);