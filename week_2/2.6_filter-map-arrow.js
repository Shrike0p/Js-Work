//arrpw fns
function sum(a,b){
    return a+b;
}

const sum=(a,b)=>{
    return a+b;
}

app.get("/",(req,res)=>{

})

app.get("/",function(req,res){

})

//there difference will be seen at the time of callback


//------------------------------------------map----------------------------------
//so map is a class or object type of thing which help you to perform certain task in less number of code
//example multiply the array by 2

//[1,2,3,4,5]
//[2,4,6,8,10]

const input=[1,2,3,4,5]

const newArray=[]

for(let i=0;i<input.length;i++){
    newArray.push(input[i]*2)
}
console.log(newArray);

//so to do with map we will do 
function transform(i){
    return i*2;
}
const ans=input.map(transform);
console.log(ans)


//instead of writing it in seprate function we write it inside the map
const ans1=input.map(function(i){
    return i*2;
});
console.log(ans)

//create a map function that takes 2 inputs an array, and a transformation callback/fn and transforms the array into a new one
//using the transformation fn


//filter 
//Given an input array give me back all the even values from it

const arr=[1,2,3,4,5]

//ans
const newArr=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newArr.push(arr[i])
    }
}

console.log(newArr);


//
function filterLogic(n){
    if(n%2==0){
        return true
    }
    else{
        return false;
    }
}
const ans2=arr.filter(filterLogic)

//and likewise we will add the function inside the filter 

const ans3=arr.filter(function (n){
    if(n%2==0){
        return true
    }
    else{
        return false;
    }
})