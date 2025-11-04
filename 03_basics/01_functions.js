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