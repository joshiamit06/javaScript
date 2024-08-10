// singleton
// Object.create // This is way of creating object using constructor.

// Two ways of declaring the objects. By literals and by constructors.
// whenever you create objects by constructors it creates singleton object
// and objects created by using literals are not singleton object.

// object using literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                 // Way of declaring the symbol in object. If we declare symbol without having [] in obj
    age: 18,                           // it will treat mySym as string instead of Symbol datatype.
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)          // hitesh@google.com
// console.log(JsUser["email"])       // hitesh@google.com
// console.log(JsUser["full name"])   // Hitesh Choudhary
console.log(JsUser[mySym])            // mykey1  // Look at the way we can get symbol from object

JsUser.email = "hitesh@chatgpt.com"   // way of changing value of particular key in object.
// Object.freeze(JsUser)              // by using .freeze(obj) we cant change values of keys in obj.
JsUser.email = "hitesh@microsoft.com" // if we try to change it wont throw any error but value of email here
// console.log(JsUser);               // will not change to hitesh@microsoft.com

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting)           // [Function (anonymous)]  // it just return the function defination as function is not
                                       // called here to get its return value.

JsUser.greetingTwo = function(){ 
    console.log(`Hello JS user, ${this.name}`);  // this is used To get existing property/key of object
}

console.log(JsUser.greeting());        // Hello JS user
console.log(JsUser.greetingTwo());