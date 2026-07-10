// ========================================
// if...else Statement
// ========================================

// Syntax

// if (condition) {
//     // Agar condition true hai,
//     // to ye block execute hoga.
// }
// else {
//     // Agar condition false hai,
//     // to ye block execute hoga.
// }


// ========================================
// Example
// ========================================

const temperature = 41;

// Condition check hogi:
// Kya temperature 50 se chhota ya barabar hai?

if (temperature <= 50) {

    // Condition TRUE
    // Isliye ye block execute hoga.

    console.log("less than 50");

} else {

    // Ye block tabhi chalega
    // jab upar wali condition FALSE hogi.

    console.log("temperature is greater than 50");
}


// ========================================
// Execution Flow
// ========================================

/*

temperature = 41

           │
           ▼

   temperature <= 50 ?

           │
      ┌────┴────┐
      │         │
    TRUE      FALSE
      │         │
      ▼         ▼
console.log   console.log
("less than   ("temperature
    50")      is greater
               than 50")

*/


// ========================================
// Output
// ========================================

// less than 50


// ========================================
// Another Example
// ========================================

// Agar

// const temperature = 60;

// Tab condition false hogi.

// Output:
// temperature is greater than 50


// ========================================
// Important Points
// ========================================

// ✅ if block tab execute hota hai
//    jab condition true ho.

// ✅ else block tab execute hota hai
//    jab condition false ho.

// ✅ Ek if...else statement me
//    sirf ek hi block execute hota hai.