// =======================
// Truthy & Falsy Values
// =======================

// const userEmail = "sam@123.ai"; // Non-empty string => Truthy
// const userEmail = "";           // Empty string => Falsy
const userEmail = [];              // Empty array bhi Truthy hoti hai

// Agar value truthy hai to if block chalega
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// =======================
// Falsy Values
// =======================
/*
false
0
-0
0n (BigInt Zero)
"" (Empty String)
null
undefined
NaN
*/


// =======================
// Truthy Values
// =======================
/*
"0"
"false"
" " (Space wali string)
[]
{}
function () {}
*/


// =======================
// Empty Array Check
// =======================

// Empty array truthy hoti hai.
// Isliye uska size check karte hain.

if (userEmail.length === 0) {
    console.log("Array is empty");
}


// =======================
// Empty Object Check
// =======================

const emptyObj = {};

// Object.keys() object ki keys ka array return karta hai.
// Agar keys ki length 0 hai, to object empty hai.

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// =======================
// Loose Equality (==)
// =======================

// JavaScript me == type conversion karta hai.
// Isliye kuch surprising results milte hain.

console.log(false == 0);   // true
console.log(0 == "");      // true
console.log(false == "");  // true


// =======================
// Strict Equality (===)
// =======================

// === value aur type dono compare karta hai.

console.log(false === 0);  // false
console.log(0 === "");     // false
console.log(false === ""); // false