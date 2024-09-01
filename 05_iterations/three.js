// for of
// for of can be worked on arrays as well as on strings

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// Map holds key value pair. Similar to objects but maps remembers insertion order of keys.
// Whereas, objects doesnt remembers insertion order
// if we try to add existing key as new key it will ignore it. Map is used for adding unique keys

```
Difference between Object and Map

1. Key Types
Object: Keys must be strings or symbols. When you use any other type (like a number or an object),
        it is implicitly converted to a string.
Map: Keys can be of any type, including functions, objects, and any primitive.

// Object
let obj = {};
obj[1] = "value"; // 1 is converted to "1"

// Map
let map = new Map();
map.set(1, "value"); // 1 is treated as a number



2. Order of Keys
Object: The order of keys is not guaranteed but generally follows insertion order for non-integer keys. 
        For integer keys, they are sorted in ascending order.
Map: Keys maintain their insertion order.

// Object
let obj = { b: 1, a: 2 };
console.log(Object.keys(obj)); // ["b", "a"]

// Map
let map = new Map();
map.set('b', 1);
map.set('a', 2);
console.log([...map.keys()]); // ['b', 'a']


3. Performance
Object: Designed for traditional key-value storage but not optimized for frequent additions and deletions.
Map: Generally performs better for frequent additions and removals, especially when working with large datasets.


5. Iteration
Object: Iteration over an object’s properties requires using for...in, Object.keys(), or Object.entries().
Map: Easily iterable in insertion order using for...of loops, or directly with map.keys(), map.values(), and map.entries().

// Object
for (let key in obj) {
    console.log(key, obj[key]);
}

// Map
map.forEach((value, key) => {
    console.log(key, value);
});



7. Use Case
Object: Best for simple key-value pairs where keys are known and don’t require complex operations.
Map: Ideal for scenarios where keys are not strings or when you need frequent updates, additions, or deletions.

```

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);                                 // Map(3) {
                                                    //               'IN' => 'India',
                                                    //               'USA' => 'United States of America',
                                                    //               'Fr' => 'France'
                                                    //          }

// if we try to print only one value then it will looks like this
for (const key of map) {
    // console.log(key);                                // [ 'IN', 'India' ]
                                                    // [ 'USA', 'United States of America' ]
                                                    // [ 'Fr', 'France' ]
}

// if we want to print keys and values after destructuring 
for (const [key, value] of map) {
    // console.log(key, ':-', value);                  //IN :- India
                                                       //  USA :- United States of America
                                                       // Fr :- France
}

// we cant iterate object as per abvoe way. Above way will work only on Map
// if we try to iterate object like this will get error

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);                      // TypeError: myObject is not iterable
    
}