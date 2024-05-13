//-----------------loops----------------------
//Where the logic is repeating there we use loops 

let ans=0;
for(let i=0; i<=50;i++){
    ans=ans+i;
}
console.log(ans);

//----------------------functions-------------------------------
//A function in javascript is a set of statements that performs a task or calculate a value
//It should take some input and return an output where there is some obvious relationship between the input and the output 
function findsum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i;
    }
    return sum;
}

let a=findsum(5); //calling the function 
console.log(a);
//using function we follow DRY- do not rrepeat yourself (means logic)



//-----------------------------Callback function--------------------------------------------------------------------------------
//it means that we are passing the function as an argument here 
//step1:- can you call function inside another functions
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function sumOfSqaure(val1,val2){
    let value1=square(val1);
    let value2=square(val2);

    return value1+value2
}
function sumOfCube(val1,val2){
    let value1=cube(val1);
    let value2=cube(val2);

    return value1+value2

}

console.log(sumOfSqaure(1,2))

//now if you see the logic is repeating here --sumofsquare and sumofcube
//let's resolve it using callback logic
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function sumOfSomething(val1,val2,fn){
    let value1=fn(val1);
    let value2=fn(val2);

    return value1+value2
}

console.log(sumOfSomething(1,2,cube))



//-------------------------------------Anonymous function------------------------------------
//The function that do not have names 
function square(n){
    return n*n;
}


function sumOfSomething(val1,val2,fn){
    let value1=fn(val1);
    let value2=fn(val2);
    console.log(fn)
    return value1+value2
}

console.log(sumOfSomething(1,2,function(n){  //--------------so here we passed cube function with no name 
    return n*n*n;
}))


