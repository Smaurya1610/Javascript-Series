// ======================= VARIABLE SCOPE =======================

// Global variable
// It can be accessed from anywhere in the program.
let a = 200;

var c=12;
if (true) {
    // Local (Block) Scope
    // This 'a' exists only inside this block.
    let a = 10;

    // const is also block scoped.
    const b = 12;

    // var is function scoped, NOT block scoped.
    // That's why it can be accessed outside the block,
    // which may create unexpected bugs and confusion.

    // var c = 13;
    // c = 13;

    console.log("Local a :", a); // Output: 10
}

// The local 'a' is destroyed after the block ends.
// The global 'a' remains unchanged.
console.log("Global a :", a); // Output: 200

// Error: 'b' is block scoped, so it cannot be accessed here.
console.log(b);

// If c were declared using var, it would be accessible here.
// That's why modern JavaScript prefers let and const over var.
console.log(c);



// ======================= IMPORTANT NOTES =======================

/*
1. Global Scope
   - Variables declared outside any block or function.
   - Accessible throughout the program.

2. Block Scope
   - Variables declared with let or const inside {}.
   - Accessible only inside that block.

3. var
   - Function scoped, not block scoped.
   - Comes outside the block.
   - Can lead to accidental overwriting and bugs.
   - For this reason, let and const are preferred.

Example:

if (true) {
    var x = 10;
}

console.log(x); // 10  (Accessible outside the block ❌)

// =======================================================

// Browser Scope vs Node.js Scope

// Scope behavior can look different in the browser console
// compared to Node.js because their global environments differ.

// Browser:
// Global variables become part of the window object.

// Node.js:
// Each file is treated as a separate module,
// so global scope behaves differently.

That's why you'll often hear:
"Browser scope and Node.js scope are not exactly the same."
*/