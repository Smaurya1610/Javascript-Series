// =========================================
// JavaScript Call Stack
// =========================================

// Call Stack ek stack (LIFO - Last In, First Out) data structure hai.
//
// JavaScript ek time par sirf ek hi function execute karta hai.
// Jis function ko execute karna hota hai, uska Execution Context
// Call Stack ke top par push hota hai.
//
// Function complete hote hi wo stack se pop (remove) ho jata hai.


// Example

one();
two();
three();


// =====================================================
// Case 1 : Functions ek ke baad ek call ho rahe hain.
// =====================================================

/*

Step 1

Call Stack

┌──────────────┐
│ Global()     │
└──────────────┘


Step 2

one() call hua.

┌──────────────┐
│ one()        │  ← Execute
├──────────────┤
│ Global()     │
└──────────────┘


Step 3

one() complete hua.

┌──────────────┐
│ Global()     │
└──────────────┘


Step 4

two() call hua.

┌──────────────┐
│ two()        │  ← Execute
├──────────────┤
│ Global()     │
└──────────────┘


Step 5

two() complete hua.

┌──────────────┐
│ Global()     │
└──────────────┘


Step 6

three() call hua.

┌──────────────┐
│ three()      │  ← Execute
├──────────────┤
│ Global()     │
└──────────────┘


Step 7

three() complete hua.

┌──────────────┐
│ Global()     │
└──────────────┘


Program End

Call Stack Empty

*/


// =====================================================
// Case 2 : Nested Function Calls
// =====================================================

// Complexity tab aati hai jab ek function ke andar
// doosra function call hota hai.

function one() {
    console.log("one");

    two();       // one() ke andar two() call
}

function two() {
    console.log("two");

    three();     // two() ke andar three() call
}

function three() {
    console.log("three");
}

one();


// =====================================================
// Call Stack Visualization
// =====================================================

/*

Program Start

┌──────────────┐
│ Global()     │
└──────────────┘


one() call

┌──────────────┐
│ one()        │
├──────────────┤
│ Global()     │
└──────────────┘


one() ke andar two() call

┌──────────────┐
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global()     │
└──────────────┘


two() ke andar three() call

┌──────────────┐
│ three()      │
├──────────────┤
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global()     │
└──────────────┘


three() complete

┌──────────────┐
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global()     │
└──────────────┘


two() complete

┌──────────────┐
│ one()        │
├──────────────┤
│ Global()     │
└──────────────┘


one() complete

┌──────────────┐
│ Global()     │
└──────────────┘


Program End

Call Stack Empty

*/


// =====================================================
// LIFO Principle
// =====================================================

// LIFO = Last In First Out
//
// Jo function sabse last me stack me aata hai,
// wahi sabse pehle bahar nikalta hai.

/*

Example

one()
   └── two()
          └── three()

Stack

Top
┌──────────────┐
│ three()      │  ← Last In
├──────────────┤
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global()     │
└──────────────┘
Bottom


Remove Order

1. three()   ← First Out
2. two()
3. one()
4. Global()

*/


// =====================================================
// Easy Trick to Remember
// =====================================================

// Call Stack ko books ki stack ki tarah socho.
//
// 📚 Book 1 = Global()
// 📚 Book 2 = one()
// 📚 Book 3 = two()
// 📚 Book 4 = three()
//
// Agar sabse niche wali book nikalni hai,
// to pehle upar ki books hatani padengi.
//
// Isi tarah JavaScript bhi Last In First Out (LIFO)
// principle follow karti hai.