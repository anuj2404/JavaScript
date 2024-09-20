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

// console.log(loginUserMessage("anuj"));

function calculateCartPrice(val1, val2, ...num1){ //rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 200, 1000));


const user = {
    username: "anuj",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    

}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));


// Why Functions?
// Functions can be used multiple times, reducing redundancy.
// Break down complex problems into manageable pieces.
// Manage complexity by hiding implementation details.
// Can call themselves to solve problems recursively.