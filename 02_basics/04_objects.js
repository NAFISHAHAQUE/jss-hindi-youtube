//const tinderUser=new User()
const tinderUser={}
tinderUser.id="123Abo";
tinderUser.name="nafisha";
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularuser={
    email: "nafisha@gmail.com",
    fullname: {
        userfullname:{
            firstname: "nafisha",
            lastname: "haque"
        }
    }
}
console.log(regularuser.fullname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a", 6:"b"}
const obje3=Object.assign({}, obj1, obj2);
const obj3={...obj1, ...obj2}
console.log(obje3);

const users=[
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
]
// users1.email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//************************object de-structure****************
const course={
    coursename: "js",
    price: 999,
    courseinstructor: "hitesh"
}

//course.courseinstructor
//const {courseinstructor}=course
const {courseinstructor:instructor}=course          //here u can see thst we can destructure courseinstructor
//console.log(courseinstructor);
console.log(instructor);

// {
//     "name": "nafisha",
//     "country": "india",                 //it is basically a JSON
//     "age": "twelve"
// }
