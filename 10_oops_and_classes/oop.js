const user = {
    username: "Anuj",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from datebase");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    // return this
}

const userOne = new User("anuj", 12, true)
const userTwo = new User("ChaiaurCode", 11 ,true)
console.log(userOne.constructor);
// console.log(userTwo);
