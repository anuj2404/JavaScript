// for-each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     //function ka name nhi hoga kyuki yeh callbaack function hai
//     console.log(val);

// })


//2****
// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "C++",
        languageFileName: "cpp",
    },
    {
        languageName: "python",
        languageFileName: "py",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})