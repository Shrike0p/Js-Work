// console.log("Hello world");
// console.log(a); //so it will print hello wolrd but at this line it will give an error that means it runs line by line

let a=1;
a=2;       //changed the variable
console.log(a);

// const c=1;
// c=2;       //changed the variable-- error const value cannot be changed 
// console.log(a);

let firstName="Prakhar";
let age =21;
let isMarried=false;
console.log("This person name is "+firstName+" and their age is "+age+" and is he married "+isMarried)

//we can write like this too
//console.log("This person name is")
//console.log(firstName)
//console.log(" and their age is ")
//console.log(age)
//console.log("and is he married")
//console.log(isMarried)

if (isMarried===true){
    console.log("True");
}else{
    console.log("False")
}

//loops
let answer=0;
for(let i=0; i<=100; i++){
    answer=answer+i;
}
console.log(answer);


//before arrays
let person1="Prakhar"
let person2="Ram"
let person3="Sham"

//after arrays
const personarray=["Prakhar", "Ram", "Sham"];

console.log(personarray[0])
console.log(personarray[1])

const ages =[21,22,23,24,25];

//accessing throgh for loop
for(let i=0; i<ages.length;i++){
    if(ages[i]%2 ===0){
        console.log(ages[i]);
    }
}


//---------------------Objects---------------------------------------

//before objects 
const personarrays=["Prakhar", "Ram", "Priya"];
const gender=["Male", "Male","Female"]
for(let i=0; i<personarrays.length;i++){
    if(gender[i]=="Male"){
        console.log(personarrays[i]);
    }
}

//after objects--rather maintaing three arrays we can combine them in one
//synatx of object 
const user1={
    firstName:"Prakhar",
    gender:"Male"
}

//access the object
user1["firstName"]
console.log(user1["firstName"]);


//we can create an array of objects
const users=[{
    firstName:"Prakhar",
    gender:"Male"
},{
    firstName:"Ram",
    gender:"Male"
},{
    firstName:"Priya",
    gender:"Female"
}]
console.log(users)

//it is better than existing because now we have single variables 

for(let i=0; i<users.length;i++){
    if(users[i]["gender"]=="Male"){                                               //users[i].gender
        console.log(users[i]["firstName"]);
    }
}

//Nested objects

const usersd=[{
    firstName:"Prakhar",
    gender:"Male",
    metadata: {
        age:21,
        address:""
    }
}]
// users[i]["metadata"]["age"]==21

//----------------Functions----------------------
/*
1. Abstract out logic in your program
2. Take arguments as an input
3. Return a value as an output
4. You can think of them as an independent program that is supposed to do something given an input
5. Functions can take other functions as input (callback)
*/

// Syntax of functions
function sum(a,b){
    return a+b;
}

//calling function
const value=sum(1,2)
const value2=sum(1,10)
console.log(value);

//functions can be reusable, scope limited logics


//we use fnToCall to pass functions, also called callback
function sums(num1, num2, fnToCall){
    let result=num1+num2
    fnToCall(result)
}

function displayResult(data){
    console.log("Result of the sum is:"+data);
}

function displayResultPassive(data){
    console.log("Sum's result is:"+data);
}

//you are only allowed to call one function after this
//How will you displayResult of a sum
const ans=sums(1,2,displayResult);


function calculateArithmatic(a,b,type){
    if(type=="sum"){
        return a+b;
    }
    if (type=="minus"){
        return a-b;
    }
}
const values=calculateArithmatic(1,2,"minus");
console.log(values)


//
function calculateArithmatics(a,b,type){
    if(type=="sum"){
        const valuess=sum(a,b);
        return valuess
    }
    if (type=="minus"){
        const valuess=sub(a,b);
        return valuess
    }
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const valuess=calculateArithmatic(1,2,"minus");
console.log(values)


//callback examples
function calculateArithmatic(a,b,arithmeticFinalFunction){
    const ans=arithmeticFinalFunction(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const valuue=calculateArithmatic(1,2,sum);
console.log(valuue);

//setTimeout function, basically used to make you wait for the given time

function greet(){
    console.log("hello world");
}

setTimeout(greet, 3*1000)  //wait 3 sec and print hello world

//setInterval, it print for every 3sec 
