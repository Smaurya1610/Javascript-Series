// ==========================================
// FOR OF LOOP
// ==========================================
//
// for...of loop ka use iterable values (jaise Array, String, Map, Set)
// ke elements ko directly access karne ke liye hota hai.
//
// Syntax:
// for (const element of iterable) {
//     // Code
// }
//
// Isme hume index manually manage nahi karna padta.
// Loop automatically har element par chalta hai.


// Array
const arr = [1, 2, 3, 4, 5];


// Har iteration me array ka ek element milega
for (const num of arr) {

    // Current element print karna
    // console.log(num);
}


// Output:
// 1
// 2
// 3
// 4
// 5

// ===================== for...in =====================

// Array create kiya
const programming = ['js', 'py', 'cpp', 'java', 'rb'];

// for...in array ke indexes return karta hai.
for (const key in programming) {

    // Sirf index print karega.
    // Output: 0 1 2 3 4
    console.log(key);

    // Index ki help se value access kar sakte hain.
    // Output: js py cpp java rb
    console.log(programming[key]);

    // Index aur value dono print karna.
    console.log(`${key} index value is ${programming[key]}`);
}



// ===================== Notes =====================

// 🔹 for...in
// - Object par use karne se uski keys milti hain.
// - Array par use karne se indexes (0,1,2...) milte hain.
// - Array ke indexes bhi keys hi hote hain (string form me).

// Example:
// const user = {
//     name: "Rahul",
//     age: 21
// };

// for (const key in user) {
//     console.log(key);        // name, age
//     console.log(user[key]);  // Rahul, 21
// }


// 🔹 for...of
// - Hamesha iterable ki values return karta hai.
// - Arrays, Strings, Maps aur Sets ke liye use hota hai.

// Example:
// for (const value of programming) {
//     console.log(value);
// }

/*
Output:
js
py
cpp
java
rb
*/


