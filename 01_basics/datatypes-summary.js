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
//********************************************************
//stack(primitive), heap(non-primitive)
let myname="nafishadotcom"
let anothername=myname
anothername="nafishahaque"
console.log(myname);
console.log(anothername);
let userOne={
    email:"asdfghj.com",
    upi:"sbi123",
}

let userTwo= userOne
userTwo.email= "hjkghj.com"
console.log(userOne.email);
console.log(userTwo.email);

