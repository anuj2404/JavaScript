//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})(); // code end karne ke liye explicitly semicolon lagaya hai jo ki directly nhi lagta hai

( (name) => {
    // unnamed IIFE
    console.log(`DB Connected Two ${name}`);
    
})('anuj')