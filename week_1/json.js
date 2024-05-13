//Javascript Object Notation 
//how we will send this object 

const users={
    name:"Prakhar Singh",
    age:21,
    gender:"Male"
}

console.log(users["name"]);

//so to send the above data we will convert it into string 

const userss='{"name":"Prakhar Singh", "age":21, "gender":"male"}' //-----here we put quotes on keys also 
//other side will figure out what is this, here i am not restricting the js object 
//so here we can parse the string into object 
//more of the time you will need to interchange between js object and a js string
//so js provide two json 
//json.parse -- it will take the string and parse it into object 
//json.stringify --it will convert object into string

console.log(JSON.parse(userss));

console.log(JSON.stringify(users));

//----------------------math-----------------
console.log(Math.random())
console.log(Math.ceil(2.3))
console.log(Math.floor(2.3))
console.log(Math.max(5,10,15))
console.log(Math.min(5,10,15))
console.log(Math.pow(10,15))
console.log(Math.sqrt(4))