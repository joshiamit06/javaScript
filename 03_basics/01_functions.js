
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessageFirst(username){
    return `${username} just logged in`
}

console.log(loginUserMessageFirst())              // undefined just logged in  // Not passing username as argument so it take 
                                                                               // username as undefined inside the function
                                                                               // it wont throw any error as like Python

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function valueCheck(num){
    console.log(num)
}

valueCheck(100,200,300)                      // 100  // Note that it wont throw any error as like python, it will work 
                                                     // on first arg and neglect other args

function restOperator(...num1){
    console.log(num1)
}

restOperator(100,200,300)                  // [ 100, 200, 300 ] // rest operator(...) is used to pack values,It returns an array
                                                                // similar to *args in Python. this (...) also called as spread
                                                                // operator depending on use case.

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // [500,2000]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)   // Username is hitesh and price is 199
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));  //  400