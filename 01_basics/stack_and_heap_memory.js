// Stack and Heap

//For all Primitive datatypes Stack memory will gets used
//For all non primitive datatypes Heap memory will gets used.

//In stack memory, whenever we declare any variable and if assigned it to new variable will get copy of value
// If we declare anything in heap memory will its gets its reference

let str1 = "first"
let str2 = str1

console.log(str2)   // first

str2 = "second"

console.log(str1)   // first
console.log(str2)   // second

//here str1 and str2 are separate objs. in js when we do str2 =str1 it creats copy of str1 in str2

let user1 = {
    email:"user1@gmail.com",
    upi:"user@ybl"
}

let user2 = user1
//now here user1 is stored at some memory location. and if we do user1=user2 it will create another reference
// smae like user1 to that memory location. so this obj has 2 reference i.e. user1 and user2

user2.email = "user2@gmail.com"

console.log(user1) // { email: 'user2@gmail.com', upi: 'user@ybl' }
console.log(user2) // { email: 'user2@gmail.com', upi: 'user@ybl' }

