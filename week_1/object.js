//---------------------Object------------------------------------
//Object.keys(obj)--so it will create an array, which have keys inside it, think of it as static function that can be acccessed directly
//Object.values(obj)--so it will create an array, which have values inside it
//Object.enntries(obj)-- it will simply put each key with its value in one array
//obj.hasOwnProperty("Key")--it check whether that key is present inside the obj object or not, output it out in True and False
//Object.assign({},obj,{key:"value"})-- it will add a given key and value inside the object
const obj={
    key1:"Value1",
    key2:"Value2",
    key3:"Value3"
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(obj.hasOwnProperty("key1"))
console.log(Object.assign({},obj,{newProperty:"new Value"}))





















