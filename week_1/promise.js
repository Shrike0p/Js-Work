console.log("____________Promise__________________")
//-------------------------------------Promises--------------------------------------------------
///promises are syntactical sugar that make code slightly more readable 
/*
Until now, we've only used other people's asynchronous functiions
How can we create an asynchronous function of our own 
 */
const fs=require("fs")
// function read(cb){
// fs.readFile("a.txt","utf-8",function(err,data){
//     cb(data);
// })
// }
// function onDone(data){
//     console.log(data);
// }

// read(onDone);

// /*
// It is just a wrapper on top of another async function, which is fine.
// Usually all async functions you will write will be on top of js provided async functions like setTimeout or fs.readFile 
// */

//more cleaner way to use promise
function ReadF(){
    return new Promise (function(resolve){       //here new is like new Date we use intialize
    fs.readFile("a.txt","utf-8",function(err,data){
        console.log("befor resolve")
        resolve(data);
    })
    })
}

function ondone(data){
    console.log(data)
}
var a=ReadF()          //return value is stored here, basically i am returning the promise in here, also we didn't give any argument
console.log(a);
a.then(ondone)

// //so basically what heppening in here the promise is send synchronously but the data is i.e. return is asynchronous, you can see that
// //it prints consoloe.log(a) then it printed before resolve
// //promise is just a class that makes callbacks and async functions slightly more readable 
// var a=new Promise(function(resolve){});// this is the way to intialize the promise, you have to pass func as an argument 
// //promise has 3 stages =>pending, resolved, rejected 
// //inside promise function we put async functions like setTimeout, readFile to make our function asynchronous 

// //another way of calling the promises 

// function fun(){
//     let p= new Promise(function(resolve){
//         resolve("Hi There this is another way")
//     })
//     return p;
// }
// let value=fun();
// value.then(function(data){
//     console.log(data);
// })


// //----------------------------async-await----------------------------------
// //uses callback and promises, it is one of the reason why people love promises 
// //to get rid of promise .then or basically promise syntax we use async await 
// //usually used on caller side, not on the side where you define an async function 
// function asyncawait(){
//     let pp= new Promise (function(resolve){
//         setTimeout(function(){
//             resolve("hii async await here");
//         },3000)
//     })
//     return pp;
// }

// async function main(){
//     let value =await asyncawait()
//     console.log("Hi there1") //this will be called after 3 secconds because it's inside the main() and iit goonna take 3 sec
//     console.log(value)
// }
// main();// we write main because await should be wrap inside async function 
// console.log("Hellow")//this will print first while the main function do it work

// //callback, promise , async/await all do the same thing 