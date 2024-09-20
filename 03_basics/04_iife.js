//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})(); // code end karne ke liye explicitly semicolon lagaya hai jo ki directly nhi lagta hai

( (name) => {
    // unnamed IIFE
    console.log(`DB Connected Two ${name}`);
    
})('anuj')

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// (function () {
//     // …
//   })();
  
//   (() => {
//     // …
//   })();
  
//   (async () => {
//     // …
//   })();