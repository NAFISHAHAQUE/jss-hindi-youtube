const accountId = 123456
let accountEmail = "asdf@gmail.com"
var accountPassword = "12343"
accountCity = "Jaipur"
let accountState;
//accountId = 2 //not allowed
accountEmail = "asdf@gmail.com"
accountPassword="23456"
accountCity="goa"
console.log(accountId);

/*
prefer not to use var
bcoz of issue in block scope and functional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])