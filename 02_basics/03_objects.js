// singleton
// agar literals ki tarah declare karte toh singleton nhi banega
// constructor se banega toh singleton banega


// Object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Anuj Gupta",
    [mySym]: "mykey1",
    age: 24,
    location:"Jaipur",
    email: "hiteshchoudhary@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //symbol ka use square bracket ke andar karenge

// JsUser.email = "anujgupta@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "anujgupta@yahoo.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
} // jab bhi hame same object ko reference karna hai toh "this" ka use karenge


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
