const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
                                          // In python li.append(li1) will give similar result as per below
// console.log(marvel_heros);             // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] // 


// console.log(marvel_heros[3][1]);       // flash

//#######
// +++ concat() is used to merge two arrays in JS, similar to  li.extend(li2) in Python
// But here concat() returns new array but in Python extends() will add second list in first list.
// will not return new list, also in python .concat() function in used to merge two dicts.
const allHeros = marvel_heros.concat(dc_heros)    
console.log(allHeros);                         // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// +++ another way to merge two arrays in third array with spread operator ...
const all_new_heros = [...marvel_heros, ...dc_heros]
 
// console.log(all_new_heros);    // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//+++ flat is used to flatted the array with its inner array elements
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);             // [1,2,3,4,5,6,7,6,7,4,5]

// We can provide depth of which we need to flattened. here 1 means it only flat one inner array
const new_another_array = another_array.flat(1)
console.log(new_another_array);        // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


console.log(Array.isArray("Hitesh"))   // false  // to check if input is array
console.log(Array.from("Hitesh"))      // [ 'H', 'i', 't', 'e', 's', 'h' ]  // to convert into array
console.log(Array.from({name: "hitesh"})) // interesting case // as it not able to convert this object into array. need to mention
                                          // that we need to convert array of keys or values. will see in upcoming lectures

let score1 = 100
let score2 = 200
let score3 = 300
 
console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]