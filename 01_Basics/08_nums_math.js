// Primitive number
const score = 400;

// Number object (wrapper object)
const balance = new Number(300);

// Prints the primitive number: 400
console.log(score);

// Prints the Number object: [Number: 300]
console.log(balance);

// Checks the type of balance
// Output: "object" because new Number() creates a Number object
console.log(typeof balance);

// Converts the Number object to a string
// Output: "300"
console.log(balance.toString());

// Displays the number with exactly 3 digits after the decimal point
// Output: "300.000"
console.log(balance.toFixed(3));

// Converts the number to a string and finds its length
// "300" has 3 characters
// Output: 3
console.log(balance.toString().length);

// A floating-point number
const othernumber = 23.3443;

// toPrecision() returns the number with the specified total number of significant digits.
// Here, 3 significant digits are kept.
// Output: "23.3"
console.log(othernumber.toPrecision(3));

// A large number
const hundresds = 1000000;

// toLocaleString('en-IN') formats the number according to the Indian numbering system.
// Output: "10,00,000"
console.log(hundresds.toLocaleString('en-IN'));


// ==================
// Maths
// ===================
// Math object contains many useful mathematical methods
console.log(Math);

// Returns the absolute (positive) value of a number
console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(5));  // Output: 5

// Rounds to the nearest integer
console.log(Math.round(4.4)); // Output: 4

// Rounds down to the nearest integer
console.log(Math.floor(4.4)); // Output: 4

// Rounds up to the nearest integer
console.log(Math.ceil(4.4)); // Output: 5

// Returns the largest number from the given values
console.log(`Max value is ${Math.max(2, 8, 7)}`); // Output: 8

// Returns the smallest number from the given values
console.log(Math.min(2, 8, 7)); // Output: 2

// Returns base raised to the exponent (2³ = 8)
console.log(Math.pow(2, 3)); // Output: 8

// Modern way to calculate power using the exponentiation operator
console.log(2 ** 3); // Output: 8

// Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Example outputs:
// 0.2456
// 0.9874
// 0.0012

// Generates a random decimal number between 0 and 10
// toFixed(2) keeps only 2 digits after the decimal point
// Output may be: 0.57, 4.82, 9.16
console.log((Math.random() * 10).toFixed(2));

// Generates a random integer between 0 and 9
// Math.floor() removes the decimal part
// Output may be: 0, 1, 5, 9
console.log(Math.floor(Math.random() * 10));

// Generates a random decimal number between 1 and 11
// Since Math.random() can be very close to 1, the value can be close to 11 (e.g., 10.99)
// Output may be: 1.45, 7.82, 10.99
console.log(((Math.random() * 10) + 1).toFixed(2));

// -------------------------------
// Random number between two values
// -------------------------------

const max = 20;
const min = 10;

// Formula:
// Math.random()         -> 0 to <1
// * (max - min + 1)     -> 0 to <11
// Math.floor()          -> 0 to 10
// + min                 -> 10 to 20

// Generates a random integer between 10 and 20 (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);