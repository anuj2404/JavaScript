const name = "Anuj Gupta"
const repoCount = 50

// console.log(name + repoCount +" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitessh-hc-com')
// console.log(gameName[0]);
// console.log(gameName._proto_);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);

const newStringOne = "  anuj  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://amazon.com/hitesh%20choudhary"
console.log(url.replace('%20', '-' ))
console.log(url.replace('%20', '**' ))
console.log(url.replace('%20', '@' ))

console.log(url.includes('anuj'))
console.log(url.includes('ankur'))

console.log(gameName.split('-'))
console.log(gameName.split('@'))

//A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.
// What is String in JavaScript?
// JavaScript String is a sequence of characters, typically used to represent text. It is enclosed in single or double quotes and supports various methods for text manipulation.

