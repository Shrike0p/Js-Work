function square (n){
    return n*n;
}
function cube(n){
    return n*n*n
}

function sumOffunc(a, b,fnToCall){
    let val1=fnToCall(a)
    let val2=fnToCall(b)
    return val1+val2
}

let ans=sumOffunc(1,2,cube)
console.log(ans)

//-------------------async functions------------------------------
/*
So what async function is it is basically helps to do task simulatneously, let me explain you with an explain. Let's say you want to 
make a maggie, you satrted chopping the vegetables. You put stove to get boil in a meantime. You asked your from to bring ketchup.
So here everything is happeining simultaenously. This is how we do in Javascript, while the file is getted readed in the meantime
the other code segment let say loop is printing or running it's work. Sometime it might happen that the file is being read and 
waiting while the loop get finish. 
 */

function onDone(){
    console.log("print")
}
setTimeout(onDone,1000)
console.log("This will print first")

//so you can see that how it printed, while it was running setTimeout for 1 sec. This is wahat Asynchronous Function is 
//Example
//Reading a file
//Sending  a network request
//A delibrate timeout

//setTimeout(onDone,1000)
//setTimeout(onDone,500)--this will be executed first, if it still is below the above setTimeout
//Nodejs is single threaded so to do simultaneous task, we simply sending the work to web apis/  or os
//callbackhell- it tis something when there is calllback under another

//-------------------------------Promises-------------------------------------------------------------
//just a cleaner way to write the callbacks, a more readable way to write async functions 
//creating async function
function myOwnTimeout(fn,duration){
    setTimeout(fn,duration)
}
myOwnTimeout(function(){
    console.log("hii print me up")
},3000)

//this is using callback, but you might end up in callback hell, ex:-
setTimeout(function(){
    console.log("Hii there")

    setTimeout(function(){
        console.log("Hello there")
    },2000)
},3000)

//but we want it to do somethiing like this
/*
waitFor(2000)
console.log("hii")
waitFor(3000)
console.log("hii")

to write something like this we have async await 
*/

//let's see promise function how it works
/**
 * So promise is just another class like date, in promise it return a promise to the caller telling the work has been done
 * in non promise function we needed a callback and it do not return anything, but in promise we do not need callback function 
 * 
 */

function promisified(duration){
    let p=new promiseHooks(function(resolve){
        setTimeout(function(){
            resolve();
        },duration)
    }    
)
return p;
}

let an=promisified(3000)
an.then(function(){
    console.log("Timeout")
})
