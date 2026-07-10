// IIFE = Immediately Invoked Function Expression

// IIFE ka use mainly do reasons ke liye hota hai:
// 1. Function ko define karte hi turant execute karna.
// 2. Global scope ke variables/functions se pollution bachana
//    kyunki IIFE apna alag local scope create karta hai.

(function chai() {
    // Named IIFE
    // Function ka naam "chai" debugging ke liye useful hota hai.
    console.log(`DB CONNECTED`);

})(); // Semicolon zaruri hai agar next statement bhi IIFE ho,
// warna JavaScript usse previous expression ka part samajh sakti hai.


// Syntax:
// (function definition)(function execution)

((name) => {
    // Simple (Arrow Function) IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('sameer'); // Argument "sameer" parameter "name" me pass ho raha hai.


(function aur_code(name) {
    // Named IIFE with parameter
    console.log(`DB CONNECTED THREE ${name}`);
})('sani'); // Parameter "name" ko value "sani" pass ki gayi hai.