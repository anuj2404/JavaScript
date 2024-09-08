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

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); //symbol ka use square bracket ke andar karenge





