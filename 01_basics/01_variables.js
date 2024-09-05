const accountId = 101122
let accountEmail = "anuj@gmail.com"
var accountPassword = "12345"
accountCity = "Noida" // not a good way to declare variable
let accountState;

// accountId = 2 // not allowed

accountEmail = "abc@yahoo.com"
accountPassword = "457894"
accountCity = "Lucknow"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//JavaScript variables are containers for storing data values. Variables can be declared using the 'var' keyword.