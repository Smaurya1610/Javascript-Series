// Original array containing numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// -------------------- map() Example --------------------

// map() creates a new array by applying a function to every element.

// Add 10 to every number
const newnums = myNums.map((num) => num + 10);


// Explicit return in map()
// When using {}, return keyword is required.

// const newnums = myNums.map((num) => {
//     return num + 10;
// });

console.log(newnums);


// -------------------- Method Chaining --------------------

// We can use multiple array methods one after another.
// Here map() -> map() -> filter() are chained together.

const newNums = myNums

  // First map():
  // Multiply every number by 10
  // [1,2,3...] becomes [10,20,30...]
  .map((num) => num * 10)

  // Second map():
  // Add 1 to every value from previous map()
  // [10,20,30...] becomes [11,21,31...]
  .map((num) => num + 1)

  // filter():
  // Keep only numbers greater than 40
  .filter((num) => num > 40);


// Print final filtered array
console.log(newNums);


// -------------------- forEach() Example --------------------

// forEach() only performs an operation on each element.
// It does not return a new array, so the result is undefined.

// const value = myNums.forEach((item) => 
//     console.log(item + 10)
// );

// console.log(value); // undefined


// Difference:
// map()    -> Returns a new array
// filter() -> Returns a new array based on condition
// forEach()-> Returns nothing (undefined)