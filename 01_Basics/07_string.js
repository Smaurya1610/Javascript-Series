// Declare string
const name = "Sameer";

const repcount = 50;
/*old type*/

// console.log(name + repcount+"value");

// New way to print
console.log(`Hello my name is ${name} and my rep count is ${repcount}`);

// New way to declare string
const gamename=new String('pubg')
console.log(gamename[0])
console.log(gamename.__proto__)  
// __proto__
// Object ke prototype ko access karta hai.[prototype k andrr bhut sare method hote hai like   length,charat() etc]
console.log(typeof gamename)


// -------------------------------
// String operation
// -----------------------------

let text = "Hello World";

console.log(text.length)
console.log(text.toUpperCase());    // HELLO WORLD
console.log(text.toLowerCase());    // hello world
console.log(text.includes("World")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("World")); // true
// access charector
let text1 = "Hello";

console.log(text1[0]);      // H
console.log(text1.charAt(1)); // e
console.log(text1.indexOf('e'))
// Extract charector
let text4 = "  Java Script   ";

console.log(text4.slice(0, 9));      // Java     slice m hm negative index bhi de sakte hai  
console.log(text4.substring(0, 7)); // Script
console.log(text4.trim())  //remove extra space
console.log(text4.replace("Script","sameer"))
// split
let text5 = "apple,banana,mango";

let arr = text5.split(",");
console.log(arr); // ["apple", "banana", "mango"]
// String conversion
let num = 123;

console.log(String(num)); // "123"
console.log(num.toString()); // "123"
// escape charector
let text9 = "He said, \"Hello\"";
console.log(text9);

let multiline = "Line1\nLine2";
console.log(multiline);