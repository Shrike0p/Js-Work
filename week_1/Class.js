//Class helps to put certain type of properties togther 

const dog ={
    names: "doggie",
    legcount:2,
    speaks:"bhow bhow"
}

//to print animal x speaks bhow bhow  with 2 legs 
console.log("animal "+dog["names"]+" speaks "+dog["speaks"]+" with "+dog["legcount"]+" legs")

const cat ={
    names: "cat",
    legcount:2,
    speaks:"meow meow"
}
console.log("animal "+cat["names"]+" speaks "+cat["speaks"]+" with "+cat["legcount"]+" legs")

//so if you see we are doing same thing twice 
// we can do this using 
const dog1 ={
    names: "doggie",
    legcount:2,
    speaks:"bhow bhow"
}
const cat1 ={
    names: "cat",
    legcount:2,
    speaks:"meow meow"
}

function exec(func){
    console.log("animal "+func["names"]+" speaks "+func["speaks"]+" with "+func["legcount"]+" legs")
}

exec(dog1)
exec(cat1)


//but if there are several animals with several statements then their comes a class basically it provides the structure
//classes are reusable and can be used in muultiple places, class is a blueprint
//objects are used to create a meaningful subject 
class animal{
    constructor(name, legcount, speaks){
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks
    }
    spea(){
        console.log("hii there "+this.speaks)
    }

}

let dog11= new animal("dog", 4, "Bhow Bhow");
let cat11= new animal("Cat", 4,"Meow Meow");
cat11.spea();


//static function-- they are not associated with object they are associated with class

class animals{
    constructor(name, legcount, speaks){
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks
    }

    static myType(){
        console.log("Animal")
    }
    spea(){
        console.log("hii there "+this.speaks)
    }

}
animals.myType()
//so we can call mytype with class but we cannot call animals.spea() because for that we need object 
//static function can be called directly, but non static cannot be called directly for that we need to create object 


//------------------Date--------------------
//basically it is a premade class for you to use 
//getMonth--gives you the current month, but it calculate from 0 so add 1 for your understanding 
//getYear()-- it gives you the year by doing -1900 so don't use it 
//getFullYear()-- it gives you the current year 
//getHours()-- it gives you the current hour
//getMinutes()-- it gives you the current minute
//getSeconds()-- it gives you the current seconds 
//setFullYear(2022)-- it sets the year to 2022
//setMonth(5)-- it sets the month to 5
//getTime()-- we get  totoal miliseconds since 1970 
const currentDate= new Date();

console.log(currentDate.getMonth()+1); 
console.log(currentDate.getYear());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

//creating new date 
const newdate=new Date(2023,8,15);
console.log(newdate)


function calcsum(){
    let a=0;
    for(let i=0;i<100000000;i++){
        a=a+i;
    }
    return a;
}
const beforedate=new Date();
const beforeTimeInMs=beforedate.getTime();
calcsum();
const afterDate=new Date();
const afterTimeInMs=afterDate.getTime();

console.log(afterTimeInMs-beforeTimeInMs);

//so if you see we can see how much time it took to run the above calcsum loop, getTime helps us to know how much time it took to 
//run a segment of code 


//creation of stopwatch 
function currTime(){
    const date=new Date()
    console.log(date.getTime());
}
setInterval(currTime,1000);