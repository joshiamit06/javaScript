
// The for loop is used when the number of iterations is known.
// The while loop is used when the number of iterations is unknown.


let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// +++ In do-while loop at least run once
let score = 2
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);