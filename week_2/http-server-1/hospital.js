//creating inmemory hospital --no database is used 
//you need to create 4 routes (4 things that the hospital can do)
//1. GET-User can check how many kidneys they have and their health
//2. POST-User can add a new kidney
//3. PUT-User can replace kidney,make it healthy
//4. Delete-User can remove a kidney

const express= require("express")
const app=express()

const user=[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json());

app.get('/',function(req,res){
    const johnKidneys=user[0].kidneys;
    const numberofkidneys=johnKidneys.length;
    let numberofhealthykidneys=0
    for(let i=0;i<numberofkidneys;i++){
        if(johnKidneys[i].healthy){
            numberofhealthykidneys=numberofhealthykidneys+1;
        }
    }
    const numberofunhealthykidneys=numberofkidneys-numberofhealthykidneys
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;        //This is another way of taking the input through the body, to use this we have to put app.use(express.json());
    user[0].kidneys.push({                     //here we are pushing the kidneys inmemory
        healthy: isHealthy
    })
    res.json({                                 //after succesful completion it shows this, as a post request we don't expect the output
        msg:"Done!"                            //anytime we resatrt the process the added kidneys will reset to deafult
    })
})

app.put("/",function(req,res){
    //edge case-- converting unhealthy to healthy but if there are no unhealthy
    
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy=true;
    }
    res.json({                      //if we didn't this request will hung, postman won't know the request got completed 
        msg:"Done!"
    })
})

app.delete("/",function(req,res){
    //edge case- when there are no unhealthy kidneys so we will return 411
    if(isThereatleastoneunhealthykidneys()){
    const newKidney=[];
    for(let i=0;i<user[0].kidneys.length;i++){
        if (user[0].kidneys[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    user[0].kidneys=newKidney;
    res.json({
        msg:"Done!"
    })
    }else{
        res.sendStatus(411).json({
            msg:"There is no unhealthy kidneys!"
        })
    }
})

function isThereatleastoneunhealthykidneys(){
    let atleastoneunheatlhykidney=false;
    for(let i=0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
            atleastoneunheatlhykidney=true;
        }
    }
    return atleastoneunheatlhykidney;
}
app.listen(3000,function(){
    console.log("Server started")
})
