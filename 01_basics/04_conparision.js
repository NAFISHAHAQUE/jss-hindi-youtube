// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1);
console.log("02">1);
console.log(null>0);
console.log(null>=0);
console.log(null==0);           //the reason is that the equality checks == and comparision > < >= <= work diffrentaly, 
                               //comparision converts null to number, treating it as 0, thats why (3)null>=0 is true but (1)null>=0 is false
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//===
console.log("2"===2);