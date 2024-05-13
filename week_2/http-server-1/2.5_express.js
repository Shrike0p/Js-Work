//doctor attend one person at a time i.e. synchronous 
//door->waiting area->doctors cabin then doctor attend you ->go get medicine->then come back-> simulatenously attend the other patient->
//then you come back and wait to get called by doctor. something like js 

//your logic is like a doctor
//so if you have a doctor degree then your parent will ask if they have any symptoms with you no need to find the address of yours
//but if someone from outside wants to ask they need your address.
//so you create a doctor clinic

//something is same done by js, to expose to the world we use HTTP 
//so to expose your logic or access your function by creating HTTP server
//to create http server we use Express (multiple builders are there to build hospitals)
//there can be 2 http server on the same machines 3000 , 3001, for every process the port have to be unique 

const express=require("express");

function calculateSum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=i
    }
    return sum;
}

const app=express()
app.get('/', function(req,res){
    const n=req.query.n        //localhost:3000/?n=30        (so it will do the sum of that first 30)
    const ans=calculateSum(n)
    res.send(ans.toString());  //make sure you send back to string, otherwise it will consider it as status code
})
app.listen(3000,function(){
    console.log("Server started at 300")
})

//so if 20 people comes in they have to wait in queue once this process end up they will get a chance 