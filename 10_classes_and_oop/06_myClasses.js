// Classes in JS introduced in ES6 features in 2015
// ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, 
// and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    // When function defined in a class, it is called method.
    // So syntax of creating method is different than creating function 
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene,
// So before classes introduced below is the way we were defining function objects and creating 
// prototype methods. 
// Even class gets converted into below structure behind the scenes.

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());