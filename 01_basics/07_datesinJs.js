// Dates

let myDate = new Date()
// console.log(myDate)                      // 2024-08-10T02:32:41.253Z // provides current date and time
// console.log(myDate.toString());          // Sat Aug 10 2024 08:02:58 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());      // Sat Aug 10 2024
// console.log(myDate.toLocaleString());    // 10/8/2024, 8:05:32 am
// console.log(typeof myDate);              // object

// +++ To declare date any specific is in specific format.

// let myCreatedDate = new Date(2023, 0, 23) 
// console.log(myCreatedDate)                           // 2023-01-22T18:30:00.000Z   // month starts from 0 in js
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)      
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// +++ to get current timestamp in ms

let myTimeStamp = Date.now()

// +++ this below 2 lines are used to compare timestamp
// console.log(myTimeStamp);                        // 1723257735056
// console.log(myCreatedDate.getTime());            // 1673634600000

// ++ common interview question , to convert ms into seconds
// console.log(Math.floor(Date.now()/1000));        // 1723257904

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

