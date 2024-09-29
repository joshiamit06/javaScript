function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
 
function createUser(username, email, password){
    // if we directly call SetUsername(username) as per below it wont work
    SetUsername(username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

// here we can see username hasn't set in and SetUsername is called when we created new createuser object 
// but as we know every function when gets called has new execution context getting created 
// and here SetUsername getting called its new execution context is created it assigned this.username = username
// and after execution is done variables declared gets removed from its exectuion context as function is 
// executed completely. but normally we have to hold reference of username in createUser funciton
// so thatr when SetUsername is complete its executiom and when createUser is getting started its execution
// we still have value of username which we set in SetUsername. for that to hold reference we use .call()
// function. and we pass reference of username in SetUsername to createUser by providing this in .call()
// this is like pass refrence from this SetUsername to this createUser
console.log(chai);    // createUser { email: 'chai@fb.com', password: '123' }


// this scenario can be avoided by using call method as per below
function createNewUser(username, email, password){

    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const Newchai = new createNewUser("chai", "chai@fb.com", "123")
console.log(Newchai); // createNewUser {username: 'chai',email: 'chai@fb.com',password: '123'}