// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non Primitive) : Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]


let myObj ={
    name:"anuj",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World")
    console.log("Anuj Gupta")
}

console.log(typeof heros);


// ++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non - Primitive)

let myYoutubename = "technovlogger"

let anothername = myYoutubename
anothername = "techwithtim"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "acer@ybl",
}

let userTwo = userOne

userTwo.email = "anuj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);