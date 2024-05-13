//Difference between Async vs Sync
//Async-Opposite of sync, happens in parts, Multiple things are context switching with each other, things happening in parallel, we can delegate the task to other thread
//sync-Together, one after the other, sequential.Only one thing is happening at a time 
//js is like a human that it can perform one task at a time but as a human we can context switch or delegate the task to other people
//in js also we can do context switch and delegate the task to other processor 
//sync task take more time

//example reading of the file can be done by other thread so that we don't have to wait for it 

/*Even if you are single threaded(brain can do only one thing at a time),you can do things parallely by delegating. You can context
switch between tasks if need be(the net time to do both the things would still be the same)

Net amount of time taken to do a task can be decreased by doing these two things (delegating and context switching)*/

//Js cn delegate and context switch using asynchronous functions
//any function till now that we have seeen are synchronous function
//setTimeout is a asynchronous function, it's like when you called this it will not wait for 1seconds it will proceed to below task
//and after 1second it execute whatever you have given 

function findsum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i;
    }
    return sum;
}

function exec100(){
    console.log(findsum(100))
}
setTimeout(exec100,1000)
console.log("Hello World")//Here this execute it didn't wait for setTimeout

//Making setTimeout synchornous 
function findsum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i;
    }
    return sum;
}
function syncSleep(){
    let a;
    for(let i=0;i<10000;i++){
        a++;
    }
}
function exec100(){
    // console.log(findsum(100))
}

syncSleep()//here it will wait to complete the loop execution
console.log(findsum(100))//it will execute first then hello world
// setTimeout(exec100,1000)
console.log("Hello World")

//common async functions are 
//setTimeout
//fs.readFile-to read file from the system
//Fetch-to fetch some data from API endpoint

console.log("__________________readFile__________________________")
//--------------------------reading file---------------------------------------------
//readFile take 3 arguments, text file, encoding format, anonymous function
//utf-8 is an encoding format in which format you want to read a file, English
//fs.writeFile("a.txt", function(){})-it writes the content on the file
const fs =require("fs")  //basically it will add an external library called fs, for reading and writing the file

fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data);
})
console.log("Hii there") //this gonna run first


//there is one thing if let say there is a loop in between which run for a long time and in between the file read has been 
//completed the control will wait for the loop to get completed and then only it will execute the file code

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
})

let a;
for(let i=0;i<1000000000;i++){
    a++;
}
console.log("Hii")//so it will wait and then it will execute this first then the callback go to file and execute it 


//callback actually make sense in async


