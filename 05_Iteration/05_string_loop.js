// ===================== String Iteration =====================

// Ek string create ki gayi hai.
const greeting = "Hello world";

// for...of loop string ke har character ko ek-ek karke access karta hai.
for (const greet of greeting) {

    // Har iteration me string ka ek character 'greet' variable me store hota hai.
    // Fir us character ko print kiya jata hai.

    // Output:
    // Each char is H
    // Each char is e
    // Each char is l
    // Each char is l
    // Each char is o
    // Each char is
    // Each char is w
    // Each char is o
    // Each char is r
    // Each char is l
    // Each char is d

    // Note:
    // Space (" ") bhi ek character hota hai,
    // isliye "Hello" aur "world" ke beech wala space bhi iterate hoga.

    console.log(`Each char is ${greet}`);
}