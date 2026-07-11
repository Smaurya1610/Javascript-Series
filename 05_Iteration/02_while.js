// ==========================================
// WHILE LOOP
// ==========================================
//
// Syntax:
// while (condition) {
//     // Code
// }
//
// Jab tak condition true rahegi,
// tab tak loop execute hota rahega.

let index = 0;

while (index <= 10) {

    // Current value print karna
    console.log(`Value: ${index}`);

    // Har iteration me value 2 se badh rahi hai
    index = index + 2;
}



// ==========================================
// ARRAY KE SAATH WHILE LOOP
// ==========================================

let myArray = ["sam", "saaaa", "sani"];

let arr = 0;

// Jab tak array ka index valid hai
while (arr < myArray.length) {

    // Current element print karna
    console.log(`Value: ${myArray[arr]}`);

    // Next index par jana
    arr = arr + 1;
}



// ==========================================
// DO...WHILE LOOP
// ==========================================
//
// Syntax:
// do {
//     // Code
// } while (condition);
//
// Difference:
// - do...while me code kam se kam ek baar
//   zarur execute hota hai.
// - Condition baad me check hoti hai.

let score = 11;

do {

    console.log(`Score is ${score}`);

    // Score ko 1 se increase karna
    score = score + 1;

} while (score <= 10);


// Output:
// Score is 11
//
// Kyunki do block pehle execute hota hai,
// uske baad condition check hoti hai.
// Yahan score = 11 hai, isliye ek baar print hoga
// aur phir loop stop ho jayega.