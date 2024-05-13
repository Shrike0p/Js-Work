//string 
//indexOf:- It gives you the index of that particular target whatever you pass inside the brackets indexof(target)-- if we give
//something that is not present in the string it will return -1
//lastIndexOf:- It gives the index of last world (hello world world) we will get the last world indexx if we pass world as target
//getSlice:- it give me the range of the value which we want (getSlice("Hello", 0, 5)) --0-4          getSlice("string", start, end)
//can also be written "Hello".slice(0,5)
//substr(starting index, lenght) so it is different from slice if you do substr(2,5)so it will include 2,3,4,5,6 5 lenght, not usually use
//replace(world that you want to replace, wwith world that you want to replace with), replace keyword is used to replace the world like
//Hello world- Hello Javascript, if the world didn't match it will return the same string means no replacement
//Split(" ")-- it will split the value into arrays with delimeter as space 
//trim()--basically it trims out the sapces in start and end 
//toLowerCase(), toUpperCase --basically it perform small or capital letters on provided string
const str="Prakhar Singh"
console.log(str.length);

//knowning the index of the word or the given target
function findIndexof(str, target){
    console.log("Original String:",str);
    console.log("Index",str.indexOf(target))
}
findIndexof("Hello World", "World");

//what if we had same word and we want the last one for that we use lastIndexOf
function findIndexof(str, target){
    console.log("Original String:",str);
    console.log("Index",str.lastIndexOf(target))
}
findIndexof("Hello World World", "World");

const value ="Prakhar Singh"
let ans=value.slice(0,5);
let ans2=value.substr(2,5);
console.log(ans);

//Code of slice function
function cutIt(value, start,end){
    let newstr="";
    for(let i =0;i<value.length;i++){
        if(i>=start && i<end){
            newstr=newstr+value[i];
        }
    }
    return newstr;
}

let val=cutIt(value,2,5)
console.log(val);

console.log(value.replace("Singh", "Thakur"))

console.log(value.split(" "));

const vall="          Prakhar Singh          "
console.log(vall.trim());

console.log(value.toUpperCase());

console.log(value.toLowerCase());






//-------------------------Numbers-------------------------------------
//parseInt() it is a global function, it will parse from string to integer 
console.log(parseInt("43"))
console.log(parseInt("3.14"))
console.log(parseInt("43pxx"))
console.log(parseInt("sdsadas43pxx")) //---gives nan

//parseFloat() it will parse into float
console.log(parseFloat("43")) //--43
console.log(parseFloat("3.14"))
console.log(parseFloat("43pxx"))
console.log(parseFloat("sdsadas43pxx")) 





//-----------------------Arrays---------------------------------
//push() it will ush the given value into the arrays, the argument sshould be a number
const arr=[1,2,3];
arr.push(2);
console.log(arr);

//pop() it will pop out the last element
arr.pop();
console.log(arr);

//shift()-- pop out the first element
arr.shift()
console.log(arr);

//unshift() --if you want to put something infornt of the array 
arr.unshift(2)
console.log(arr)

//concat() -- basically it merge the two array into one 
const arr1=[1,223,41];
const arr2=[56,78,96];
let final_arr=arr1.concat(arr2)
console.log(final_arr);



//---------------------iteration------------------------
//foreach-- it take function as an argument and it gonna run that function for each time whatever variable you assign with 
//ex
const arr3=[1,2,3]

function logThing(str){
    console.log(str);
}

arr3.forEach(logThing)

//similar to calling the function each time
logThing(1)
logThing(2)
logThing(3)

//in js one function can be passed to another function 
function log1(){
    console.log("Hello World 1")
}

function log2(){
    console.log("Hello World2")
}

function logexec(fn){
    fn();
}

logexec(log2);