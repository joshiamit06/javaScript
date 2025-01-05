// const tinderUser = new Object()  // This is a singleton obj as created using constructor
const tinderUser = {}               // This is non singleton obj as created using literals. all other properties remains same
                                    // also if we try to print both singleton as well as non singleton obj both gives empty
                                    // obj like {}. so internally no diff, just first one gives singleton and second one is non
                                    // singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);            // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);   // hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }        // It returns an Obj which contain another obj like obj3 = {{1:"a"}, {2:"b"}}

// +++ To merge object we can use below ways.
// please see the documentation of Object.assign(target, source).
// it is not mandatory of giving {} blank obj as first parameter but it is good to have it.
// as it will create new obj and add/extends obj1, obj2, obj3 in that
// if we directly use Object.assign(obj1,obj2) then obj1 will get modified and by extending obj2 and returns obj1
// by Object.assign({}, obj1, obj2, obj4) it will take this blank obj and extends obj1, obj2, obj4 and returns this new obj


// const obj3 = Object.assign({}, obj1, obj2, obj4)  // note that it returns an obj

// +++ below is another way of mergeing/ extending objects by spreading
const obj3 = {...obj1, ...obj2} 
console.log(obj3);                // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// +++ To get all keys from the object. Note that it returns an array of keys.  
console.log(Object.keys(tinderUser));                  // [ 'id', 'name', 'isLoggedIn' ]
// In python - obj.keys()   - to get all keys of an object


// +++ To get all values from object. Note that it returns an array of values.
console.log(Object.values(tinderUser));                // [ '123abc', 'Sammy', false ]
// In python - obj.values()  - to get all values of an object


// +++ .entries() will converts key and values in a array as per below
console.log(Object.entries(tinderUser));               // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// In python - obj.items()   - it returns list of tuples as per below - dict_items([('name', 'sammy'), ('age', 32), ('class', 'first')])

// +++ To check if any key exists in an object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // true


// ######### Destructring of any Object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor           // This is general way of getting values in any objects. but if this is getting used
                                     // so many times then everytime we need to write course.courseInstructor
                                    // we can destruct the objects or user below way and access value inside the object 
                                    // just by using below way

const {courseInstructor} = course
console.log(courseInstructor);      // hitesh

// We can also provide some other name and access its value with instructor by defining this
const {courseInstructor: instructor} = course
console.log(instructor);             // hitesh

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

