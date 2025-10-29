//primitive
//7 types: string , number ,bolean, null, undefined, symbol, bigint
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);
const bigNumber=2345678923456782345678n

//refrence(non-primitive)
//array, object, function
const heros=['shakiman', 'spiderman', 'dora']
let myObj={
    name:"hitesh",
    age:12,
}
const myfunction=function(){
    console.log("hello world");
}

console.log(typeof myfunction);