//arrays
const myArr=[0, 1, 2, 3, 4, 5]
const myArr2=new Array(1, 2, 3, 4)
//console.log(myArr[6]);

//array methods
 myArr.push(6);              //for add
 myArr.pop();                //for removing last element
myArr.unshift(6);              //for adding this number in starting of the array
 myArr.shift();                  //for removing starting one element
console.log(myArr.includes(9));        //for knowing is thius number avvailable or not
console.log(myArr.indexOf(9));         //for knowing is thius number avvailable or not
const newArr=myArr.join();
console.log(myArr);
console.log(typeof myArr);

//slice, splice
console.log("A", myArr);
const myn1=myArr.slice(1,3);       //means in array first and sescond element add but not third one
console.log(myn1);

console.log("B", myArr);
const myn2=myArr.splice(1,3);       
console.log("C", myArr);
console.log(myn2);




