const accountId = 1224324

let accountNumber = 123

var accountEmail = "sneha@mail.com"

accountCity = "jaipur"




/*
The difference between let and var is in the scope of the variables they create:
Variables declared by let are only available inside the block where they're defined.
Variables declared by var are available throughout the function in which they're declared.
*/

//the best practice is to use let 
//prefer not to use var because of block scope and functional scope

console.table([accountId, accountNumber, accountEmail, accountCity])