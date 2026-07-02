// ==========================
// Arrays in JavaScript
// ==========================

// Arrays are zero-indexed (arr[0] is the first element).
// Arrays can store different data types.
// Arrays are dynamic, so their size can grow or shrink automatically.

// ------------------------------
// Creating Arrays
// ------------------------------

// Using array literal (recommended)
let myArr = [1, 2, true, "sameer"];

console.log(myArr);          // Prints the entire array
console.log(typeof myArr);   // "object" (arrays are a special type of object)

// Using Array constructor
let Arr = new Array(10, 20, 30, 40, 50, 60);

console.log(Arr);            // Prints the array
console.log(typeof Arr);     // "object"
console.log(Arr[2]);         // Access element at index 2 (30)


// ==========================
// Array Methods
// ==========================

// ------------------------------
// push() - Adds element(s) to the end
// ------------------------------
Arr.push(23);
Arr.push(2);

console.log(Arr); // [10,20,30,40,50,60,23,2]

// ------------------------------
// pop() - Removes the last element
// ------------------------------
Arr.pop();

console.log(Arr); // Last element (2) is removed

// ------------------------------
// unshift() - Adds element(s) at the beginning
// ------------------------------
Arr.unshift(0);
Arr.unshift(7);

console.log(Arr); // 7 and 0 are added at the start

// ------------------------------
// shift() - Removes the first element
// ------------------------------
Arr.shift();

console.log(Arr); // Removes the first element (7)

// ------------------------------
// includes() - Checks if an element exists
// Returns true or false
// ------------------------------
console.log(Arr.includes(8)); // false

// ------------------------------
// indexOf() - Returns the index of an element
// Returns -1 if not found
// ------------------------------
console.log(Arr.indexOf(10)); // 1

// ------------------------------
// join() - Converts array into a string
// Elements are separated by commas by default
// ------------------------------
let Arr1 = Arr.join();

console.log(Arr1);           // "10,20,30,40,50,60,23"
console.log(typeof Arr1);    // string

// Original array remains unchanged
console.log(Arr);
console.log(typeof Arr);     // object


// ==========================
// slice() vs splice()
// ==========================

console.log("Original Array:", Arr);

// ------------------------------
// slice(start, end)
// Returns a copy of a portion of the array.
// End index is NOT included.
// Does NOT modify the original array.
// ------------------------------
let myn1 = Arr.slice(1, 3);

console.log(myn1); // [20, 30]
console.log("After slice:", Arr); // Original array remains unchanged


// ------------------------------
// splice(start, deleteCount)
// Removes elements from the original array.
// Returns the removed elements.
// Modifies the original array.
// ------------------------------
let myn2 = Arr.splice(1, 3);

console.log(myn2); // [20, 30, 40]
console.log("After splice:", Arr); // [10, 50, 60, 23]