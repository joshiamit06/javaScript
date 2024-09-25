// Stack and Heap

//For all Primitive datatypes Stack memory will gets used
//For all non primitive datatypes Heap memory will gets used.

//In stack, whenever we declare any variable and if assigned it to new variable will get copy of value
// If we declare anything in heap memory will its gets its reference

let str1 = "first"
let str2 = str1

console.log(str2)   // first

str2 = "second"

console.log(str1)   // first
console.log(str2)   // second

//here str1 and str2 are separate objs. in js when we do str2 =str1 it creats copy of str1 in str2

```
Here Python and Js works slightly different.

How Python works when we do a=5, b=a and changing value of b to 7.


In Python, when you do a = 5 and then b = a, it will not create two separate objects in memory.
Instead, here's what happens:

a = 5: This creates an integer object with the value 5 and assigns the reference a to this object.
b = a: This assigns the reference b to the same object that a is pointing to.
So, both a and b reference the same integer object with the value 5 in memory.
 No new object is created when you assign b = a;
Python simply creates a new reference to the existing object.

If you change the value of b to 7, a new integer object with the value 7 will be created,
 and b will now reference this new object.
The reference b is reassigned,
Meanwhile, a will continue to reference the original integer object with the value 5.


Js works slightly different for primitive datatypes such as 
    
when you do b = a in JavaScript, where a holds a primitive value (like a number, string, boolean, etc.),
it will create a separate memory location to store the value of b.


let a = 5;   // 'a' holds the value 5 in its own memory location
let b = a;   // 'b' gets a copy of the value 5, stored in a separate memory location

b = 7;       // 'b' now holds the value 7, which is in a new memory location

After b = a, both a and b hold the value 5, but in separate memory locations.
When b = 7 is executed, b is reassigned to hold the value 7,
 which is stored in yet another separate memory location.(This is IMPPPPPPP)

######## VERY IMPORTANT ######

Before changing b:

a references 101 (value 5).
b references 123 (value 5).
After changing b:

a still references 101 (value 5).
b now references 342 (value 7).
Memory location 123 is no longer referenced and may eventually be cleaned up.

```


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

```

Assignment of Non-Primitives:

JavaScript: Assigning an object or array to another variable creates a reference to the same object/array in memory.
Python: Assigning a list or dictionary to another variable also creates a reference to the same list/dictionary in memory.


Effect of Modifications:

JavaScript: Modifying an object or array through one reference affects all other references to that object/array.
Python: Modifying a list or dictionary through one reference affects all other references to that list/dictionary.


```