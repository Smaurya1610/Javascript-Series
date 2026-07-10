// ========================================
// if Statement in JavaScript
// ========================================

// Syntax

// if (condition) {
//     // Code executes only when condition is true
// }


// ========================================
// Example 1
// ========================================

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    // Do nothing
    // Agar condition true hai to ye block execute hoga.
}


// ========================================
// Comparison Operators
// ========================================

// >   Greater than
// <   Less than
// >=  Greater than or equal to
// <=  Less than or equal to
// ==  Loose Equality (sirf value compare karta hai)
// === Strict Equality (value + data type dono compare karta hai)
// !=  Not Equal (loose)
// !== Strict Not Equal


// ========================================
// == (Loose Equality)
// ========================================

if (2 == "2") {
    console.log("execute");
}

// Output:
// execute

// Explanation:
// "2" (string) ko JavaScript number 2 me convert kar deta hai.
// Is process ko Type Coercion kehte hain.


// ========================================
// === (Strict Equality)
// ========================================

if (2 === "2") {
    console.log("execute 22");
}

// Output:
// Kuch bhi print nahi hoga.

// Explanation:
// Number 2 aur String "2"
// Value same hai lekin data type alag hai.
// === data type bhi check karta hai.


// ========================================
// if...else
// ========================================

const temperature = 41;

if (temperature <= 50) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// Output:
// less than 50

// Agar condition false hoti,
// tab else block execute hota.


// ========================================
// Block Scope Example
// ========================================

const score = 200;

if (score > 100) {

    // 'power' sirf isi block ke andar accessible hai.
    // Isse Block Scope kehte hain.

    const power = "fly";

    console.log(`User power: ${power}`);
}

// Output:
// User power: fly


// console.log(power);

// ❌ Error:
// ReferenceError: power is not defined

// Reason:
// power ko const se declare kiya gaya hai,
// isliye wo sirf if block ke andar hi exist karta hai.
// Bahar access karne par error aayega.


// ========================================
// Single Line if Statement
// ========================================

const balance = 100;

// Agar if ke baad sirf ek hi statement hai,
// to curly braces {} optional hote hain.

if (balance > 50) console.log("test");

// Ye bhi same hai:

if (balance > 50) {
    console.log("test");
}


// ========================================
// Multiple Statements (Not Recommended)
// ========================================

// JavaScript me comma (,) operator ka use karke
// ek hi line me multiple expressions likh sakte hain.

if (balance > 40)
    console.log("hii"),
    console.log("hello");

// Output:
// hii
// hello

// Lekin is tarah code likhna bahut unreadable hota hai.
// Interview aur production code me is style ko avoid karna chahiye.


// ========================================
// Recommended Way
// ========================================

// Curly braces {} use karna best practice hai.

if (balance > 40) {
    console.log("hii");
    console.log("hello");
}


// ========================================
// Note
// ========================================

// ✔ Single statement → Curly braces optional
//
// if (condition)
//     statement;
//
// ✔ Multiple statements → Curly braces use karo
//
// if (condition) {
//     statement1;
//     statement2;
//     statement3;
// }
//
// Isse code readable aur maintainable rehta hai.





// ========================================
// Important Interview Points
// ========================================

// ✅ if block tabhi execute hota hai jab condition true ho.

// ✅ == sirf values compare karta hai.
//    (Type Conversion ho sakta hai.)

// ✅ === value aur data type dono compare karta hai.

// ✅ const aur let block scope follow karte hain.

// ✅ Block ke andar bana variable,
//    block ke bahar access nahi kiya ja sakta.



