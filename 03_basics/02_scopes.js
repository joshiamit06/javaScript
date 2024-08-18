
//Scopes -  {} curly braces when comes with function or with if else block are called scope of that function
//          or that if-else block
//          object curly braces are different.

if (true) {
    let a = 10
    const b = 20
    var c = 30
    
}
// console.log(a)   // it will throw error that a is not defined
// console.log(b)   // // it will throw error that b is not defined
// console.log(c)  // 30 // it will run even if we defined var c inside if block scope

var c = 300
if (true) {
    var c = 30
}

// console.log(c)  // 30 // it will change value of var c inside scope as well as outside of if scope


//+++ declared inside of {} is called block scope and declared anything outside of this called global scope
//+++ declared anything in global scope can be accessed inside block scope but declared in block scope
//+++ should not be accessed in global scope.

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);     // 10
    
}

// console.log(a);   // 300 // inside block scope a var has value 10 and outside of this a is 300
// console.log(b);
// console.log(c);

// +++ global scope in DOM console and IDE works differently


// +++ Chote bacche bado se ice cream chin sakte hai but bade log chote baccho se nahi.
// +++ this rule applies to below.

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);     // two function can access username which is declared in outer block
                                   // it treats like globl scope to function two
    }
    // console.log(website);          // It will throw error saying website is not defined. as website is declared in
                                   // two fuction block and we trying to access it outside of this block

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);  // hitesh youtube
    }
    // console.log(website);                 // website is not defined // it will throw error.
}

// console.log(username);                    // username is not defined // it will throw error.


// ++++++++++++++++++ interesting ++++++++++++++++++

// Even if we call function and then defined it will work in JS. unlike Python
console.log(addone(5))        // 6
// +++ This is function
function addone(num){
    return num + 1
}


 // But this will throw error means we cant call function expressionn before its defination
addTwo(5)       
// +++ This is function expression
const addTwo = function(num){
    return num + 2
}
