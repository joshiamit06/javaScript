/*
Javascript's default behavior is proto-type behavior.
If you try to access a property or method that doesn't exist on the object itself,
JavaScript will look for it in the object's prototype. 
This continues up the chain until it either finds the property or reaches 
the end of the chain (which is usually null).
The same way this keyword works in Js.


Everything is js has object. so we declared string/array the prototype of String/Array redirects 
from Object and Object prototype is redirected to null
*/



// let myName = "hitesh     "
// let mychannel = "chai     "

console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

heroPower.hitesh()    // Here hitesh() function is not available in heroPower object so it will give undefined
    // when tried to access it


    // but we knows when something is not available in newly created object it will again search for its 
    // defination in its parent object i.e. in Object
    // so we will create a prototype function in base Object  so it will gets accessible with any object
    // we are creating

/*
So the inheritance is as per below

function -------> Object -------> null
Array ---------> Object ---------> null
String ---------> Object --------> null

*/

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()  // hitesh is present in all objects

// hitesh() fuction also gets access with myHeros object
myHeros.hitesh()    // hitesh is present in all objects


// now we are creating a prototype funciton to an Array as per below
Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
}
// now myHeros are array so it can access heyHitesh function 
myHeros.heyHitesh() // Hitesh says hello

// now heroPower is object and heyHitesh is assigned to array only
// so object doesnt have heyHitesh function 
heroPower.heyHitesh()  // heroPower.heyHitesh is not a function

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport        // WAY OF Inheriting propoerty of TeachingSupport in TASupport
}

Teacher.__proto__ = User              // Another WAY OF Inheriting propoerty of TeachingSupport in TASupport
 
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // Now a days this syntax is used to inherite properties of one
                                                 // object to another

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()  //ChaiAurCode        // this is output of console.log(`${this}`); line i.e. current context is ChaiAurCode
                              //True length is: 11
"hitesh".trueLength()         // hitesh
                              // True length is: 5
"iceTea".trueLength()         // iceTea
                              // True length is: 6