//function
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("J");
}

// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,4)

// console.log("Result:",result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("anuj"));