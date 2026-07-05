// ======================= REST OPERATOR =======================

// (...) Rest Operator
// It collects all the remaining arguments into a single ARRAY.
// It is usually written as the last parameter of a function.

function calculateCartPrice(val1, val2, ...num1) {
  // val1 stores the first argument
  // val2 stores the second argument
  // num1 stores all remaining arguments as an array

  return num1;
}

// If only one argument is passed:
// val1 = 2
// val2 = undefined
// num1 = [] (empty array because no values are left)
console.log(calculateCartPrice(2)); // []

// Here:
// val1 = 30
// val2 = 3
// num1 = [5, 6, 3]
console.log(calculateCartPrice(30, 3, 5, 6, 3)); // [5, 6, 3]

// Note:
// Rest Operator (...) ALWAYS returns the remaining values in the form of an ARRAY.

// =============================================================



// ======================= OBJECT =======================

// Object declaration
const user = {
  username: "sameer",
  prices: 199,
};

// A function can directly receive an object as an argument.
function handleObject(anyobject) {

  // Access object properties using dot notation
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// We can pass an existing object
// handleObject(user);

// OR we can create the object directly while calling the function.
// This is called passing an object literal.
handleObject({
  username: "sam",
  price: 200,
});

// Note:
// Passing an object directly is useful when we don't need to create
// a separate variable for it.

// =============================================================



// ======================= ARRAY =======================

// Array declaration
const myArray = [12, 13, 14, 15];

// Function that receives an array
function returnSecondValue(getarray) {

  // Array index starts from 0
  // Index 1 means the second element
  return getarray[1];
}

// We can pass an existing array variable
// const second = returnSecondValue(myArray);

// OR we can pass the array directly while calling the function.
const second = returnSecondValue([13, 14, 15, 16]);

// Output: 14
console.log(`Second value of array is ${second}`);

// Note:
// Just like objects, arrays can also be passed directly to a function
// without storing them in a variable first.

// =============================================================



/*
====================== SUMMARY ======================

1. Rest Operator (...)
   - Collects the remaining arguments.
   - Always returns them as an ARRAY.
   Example:
   function demo(a, b, ...rest)

2. Object
   - We can pass an object variable.
   - We can also pass an object directly.

3. Array
   - We can pass an array variable.
   - We can also pass an array directly.

Examples:

handleObject(user);

handleObject({
    username: "Sam",
    price: 200
});

returnSecondValue(myArray);

returnSecondValue([13,14,15,16]);

=====================================================
*/