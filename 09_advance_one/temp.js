// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Asyn task")
//         a=1
//         resolve(a)
//     }, 2000)
// })

// promiseOne.then(function(a){
//     console.log("promise consumed")
//     console.log(`a is ${a}`)
// })

// const promiseThree= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("three promise")
//         resolve({name:"amit joshi",
//             email:"amit@example.com"
//         })
//     },2000)
// })

// promiseThree.then(function(user){
//     console.log(user.name);
    
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"amit joshi",
                email:"amit@example.com"
            })
        }else{
            reject('error:something went wrong')
        }
    },3000)
})


promiseFour.then(function(user){
    console.log(user.email);
    
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("promise has been resolved");
    
})