// ==============================
// JavaScript Execution Context
// ==============================

// JavaScript code mainly 2 phases me execute hota hai:
//
// 1. Memory Creation Phase (Creation Phase)
//    - Sirf memory allocate hoti hai.
//    - Variables ko undefined assign hota hai.
//    - Functions ki puri definition memory me store hoti hai.
//
// 2. Execution Phase
//    - Variables ko actual values milti hain.
//    - Function calls execute hote hain.
//    - Expressions evaluate hote hain.


// =======================================
// Types of Execution Context
// =======================================

// 1. Global Execution Context (GEC)
//    -> Sabse pehle ye create hota hai.
//    -> Browser me "this" = Window Object
//    -> Node.js me "this" = {} (empty object)

// 2. Function Execution Context (FEC)
//    -> Jab bhi function call hota hai tab banta hai.

// 3. Eval Execution Context
//    -> eval() use karne par banta hai.
//    -> Rarely use hota hai.


// =======================================
// Example
// =======================================

let val1 = 14;
let val2 = 3;

function addnum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addnum(val1, val2);
let result2 = addnum(16, 8);


// ==========================================================
// STEP 1 : Global Execution Context Create Hoga
// ==========================================================

/*

               Global Execution Context
             ----------------------------
             |          this            |
             |     (Window / {})        |
             ----------------------------

*/


// ==========================================================
// STEP 2 : Memory Creation Phase
// ==========================================================

// Sab variables aur functions ke liye memory reserve hoti hai.

/*

Memory Phase
------------

val1      -> undefined

val2      -> undefined

addnum    -> function definition

result1   -> undefined

result2   -> undefined

*/


// ==========================================================
// STEP 3 : Execution Phase
// ==========================================================

// Variables ko actual values assign hongi.

/*

val1 = 14

val2 = 3

addnum = function

*/


// ==========================================================
// Function Call 1
// ==========================================================

// result1 = addnum(val1, val2);

// Jab function call hota hai to JavaScript ek naya
// Function Execution Context (FEC) create karti hai.


// New Function Execution Context
//
//      +----------------------------+
//      | Variable Environment       |
//      | Execution Thread           |
//      +----------------------------+
//
// Is Function Execution Context ke bhi 2 phase hote hain.


// --------------------------
// Memory Phase
// --------------------------

/*

num1  -> undefined

num2  -> undefined

total -> undefined

*/


// --------------------------
// Execution Phase
// --------------------------

/*

num1 = 14

num2 = 3

total = 17

return total

*/

// return hone ke baad

// result1 = 17

// Function Execution Context destroy ho jata hai.
// (Memory free ho jati hai.)



// ==========================================================
// Function Call 2
// ==========================================================

// result2 = addnum(16,8)

// Dubara ek naya Function Execution Context banega.


// --------------------------
// Memory Phase
// --------------------------

/*

num1  -> undefined

num2  -> undefined

total -> undefined

*/


// --------------------------
// Execution Phase
// --------------------------

/*

num1 = 16

num2 = 8

total = 24

return total

*/

// return hone ke baad

// result2 = 24

// Ye Function Execution Context bhi destroy ho jayega.


// ==========================================================
// Overall Flow Diagram
// ==========================================================

/*

                 JavaScript Starts
                        │
                        ▼
          Global Execution Context
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
  Memory Creation Phase        Execution Phase
          │                           │
          ▼                           ▼
    Variables = undefined     Values Assign Hoti Hain
    Functions = Definition     Function Calls Execute
                                        │
                                        ▼
                          addnum(val1, val2)
                                        │
                                        ▼
                       Function Execution Context
                                        │
                    ┌───────────────────┴───────────────────┐
                    ▼                                       ▼
              Memory Phase                           Execution Phase
        num1,num2,total=undefined         num1=14 num2=3 total=17
                    │                                       │
                    └─────────────── return 17 ─────────────┘
                                        │
                                        ▼
                                 result1 = 17
                                        │
                                        ▼
                          Function Context Deleted
                                        │
                                        ▼
                          addnum(16, 8) Called
                                        │
                                        ▼
                       New Function Execution Context
                                        │
                    ┌───────────────────┴───────────────────┐
                    ▼                                       ▼
              Memory Phase                           Execution Phase
        num1,num2,total=undefined         num1=16 num2=8 total=24
                    │                                       │
                    └─────────────── return 24 ─────────────┘
                                        │
                                        ▼
                                 result2 = 24
                                        │
                                        ▼
                          Function Context Deleted

*/


// ==========================================================
// Final Output
// ==========================================================

// result1 = 17
// result2 = 24


// NOTE:
// Har baar function call hone par ek naya
// Function Execution Context banta hai.
//
// Function complete hote hi uska Execution Context
// Stack se remove (destroy) kar diya jata hai.
