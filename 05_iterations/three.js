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