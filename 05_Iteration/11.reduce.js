// -------------------- reduce() Example --------------------

// Array of numbers
const Mynum = [1, 2, 3];


// reduce() is used to reduce an array into a single value.
// It takes two main parameters:
// acc       -> accumulator (stores the result)
// currval   -> current value of array


// Using normal function

// const value = Mynum.reduce(function (acc, currval) {
//     return acc + currval;
// }, 0);


// Initial value given to accumulator
const initial = 0;


// reduce() execution step by step

const value = Mynum.reduce(function (acc, currval) {

    console.log(`acc: ${acc} and currval: ${currval}`);

    return acc + currval;

}, initial);


// How reduce works:
// First time:
// acc = initial value (0)
// currval = first element (1)
// return 0 + 1 = 1


// Second time:
// acc = previous result (1)
// currval = second element (2)
// return 1 + 2 = 3


// Third time:
// acc = previous result (3)
// currval = third element (3)
// return 3 + 3 = 6


// console.log(value); // 6


// Short form using arrow function

const total1 = Mynum.reduce((acc, currval) => acc + currval, 0);

// console.log(total1); // 6



// -------------------- Reduce with Objects --------------------

// Array of objects
const products = [
  {
    itemprice: "Laptop",
    price: 55000,
  },
  {
    itemprice: "Mobile",
    price: 25000,
  },
  {
    itemprice: "Headphones",
    price: 3000,
  },
  {
    itemprice: "Keyboard",
    price: 1500,
  },
  {
    itemprice: "Mouse",
    price: 800,
  },
  {
    itemprice: "Monitor",
    price: 12000,
  },
];


// Calculate total price of all products

const total = products.reduce((acc, item) => {

    // acc stores the running total
    // item represents the current object

    return acc + item.price;

}, 0);


// Output total price
console.log(total);


// reduce working:
// First:
// acc = 0
// item.price = 55000
// total = 55000


// Second:
// acc = 55000
// item.price = 25000
// total = 80000


// ... continues until all objects are added


// Final Output:
// 97300