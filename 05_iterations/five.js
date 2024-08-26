// forEach() - it takes callback function as parameter. also it doesnt have name.
// there are different ways of passing fallback function inside forEach loop.
// below are the ways which tells how can we pass fallback functions. by using normal 
// fucntion, by passing arrow function etc
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);                        // js
                                                // rb
                                                // py
                                                // java
                                                // cpp
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// ++++ forEach not only iterate over arr and give its element it also
// ++++ provides index value and a complete array as per below. same like enumerate in python.

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);              // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                                // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                                // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                                // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                                // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);                 // javascript
                                                    // java
                                                    // python
} )