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


