//object literals
const mySym=Symbol("key1")
const jsuser={
    name: "nafisha",
    "full name": "nafisha haque",
    [mySym]:"mykey",
    age:20,
    location: "bihar",
    email:"nafisha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])
jsuser.email="nafisha@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email="nafisha@microsoft.com"
console.log(jsuser);
jsuser.greeting= function(){
    console.log("hello js user");
}
jsuser.greetingTwo= function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());