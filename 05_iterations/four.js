
// for-in

// to loop over the obejct we can use for-in loop 
// to loop over map we maily use for-of loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// to get only keys from object
for (const key in myObject) {
    // console.log(key);                    // js
                                        // cpp
                                        // rb
                                        // swift
}

// to get keys and values from obj
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);     // js shortcut is for javascript
                                                                // cpp shortcut is for C++
                                                                // rb shortcut is for ruby
                                                                // swift shortcut is for swift by apple
}


//If we try to iterate over array with for-in loop it gives keys (index) value of arrays
// array alos has keys by default which strats from 0. thats why we can get values from arrays with index ex. arr[0]
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);                                     // 0
                                                            // 1
                                                            // 2
                                                            // 3
                                                            // 4
}

//+++++++++++ Iterating over arrays with for-of loop we directly get values from array
//+++++++++++ while itrating over arrays with for-in loop we receives keys

// if we want to get values in arrays with for-in loop we can do like this
for (const key in programming) {
    console.log(programming[key]);                          // js
                                                            // rb
                                                            // py
                                                            // java
                                                            // cpp
}

// We cant iterate over map with for-in loop. as map is not iterable.  need to check more on this
// if we try to iterate pver this as below. we dont get any output
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);                  // 
}



```

Array, Map => for-of loop
Object => for-in loop
Array with for-in loop => index values
Map with for-in loop => wont return anything. as map is not iterable.

```