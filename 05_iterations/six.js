
const coding = ["js", "ruby", "java", "python", "cpp"]

// ++++ if we return in forEach loop it wont return anything if we try to return it and stored it in values
// ++++ will get undefined 
const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )
 
console.log(values);                               // undefined



// ++++ filter  -- filter returns the values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// this is normal way of using filter functions
const newVal = myNums.filter( (num) =>  num > 4 )

console.log(newVal)                               // [ 5, 6, 7, 8, 9, 10 ]

// ++++ but if we try to add block scope here or use array functions as fallback function
// in filter will get [] array as per below. this is becuase of explicit return as we discussed 
// in 03_basics -> 03_arrow how arrow function works with () and with {}. i.e. in {} or  () if you have 
// to written in that block you have to write return statement explain this in next few lines

const newVal1 = myNums.filter( (num) => {
   num > 4
} )

console.log(newVal1)                             // []


// +++ if we want to return the value then we have to add return keyword
const newVal2 = myNums.filter( (num) => {
  return num > 4
} )

console.log(newVal2)                             // [ 5, 6, 7, 8, 9, 10 ]



// ++++ we can also do this with forEach as per below instead of using filter
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);                            // [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);