console.log("n")
console.log("a")
console.log("f")
console.log("i")
console.log("s")

function saymyname(){
    console.log("n")
console.log("a")
console.log("f")
console.log("i")
console.log("s")
}
saymyname();

function addtwonumbers(n1, n2){                      //n1 and n2 are parameters, 4,5 are arguments
    console.log(n1+n2);
}
addtwonumbers(4,5);
//

function addtwonumbers(n1, n2){                      //n1 and n2 are parameters, 4,5 are arguments
    let result=n1+n2
    return result

}
const result=addtwonumbers(4,5);
console.log("result: ", result)

//
function loginusermessage(username){
    if(!username){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginusermessage("nafisha"));

//

function loginusermessage(username="abhi"){
    if(!username){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginusermessage());

////////////////////////////////
function calculatecarprice(...num1){               //here ... is rest operator, agr hm ye nhi lgayenge to array ka sirf num1 print hoga, sb nhi
    return num1;
}
console.log(calculatecarprice(200, 300, 400))
//
function calculatecarprice(val1, val2, ...num1){               //here ... is rest operator, agr hm ye nhi lgayenge to array ka sirf num1 print hoga, sb nhi
    return num1;                                               //after writing val1,val2 it takes 200, 300 and then only output is=400,500 as an element
}
console.log(calculatecarprice(200, 300, 400, 500))
//

const user={
    username: "nafisha",
    prices: 199
}
function handledobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);

}
handledobject(user);