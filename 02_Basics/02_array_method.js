// ===============================
// some other important array methods
// ===============================

// ===============================
// MAP METHOD
// ===============================

// map() har element pe kaam karta hai aur NEW array return karta hai
let arr = [1, 2, 3, 5, 7, 9];

let new_arr = arr.map((x) => x ** 2);
// har element ka square bana diya

console.log(arr);      // original array same rahega
console.log(new_arr);  // [1,4,9,25,49,81]

// -------------------------------
// FILTER METHOD
// -------------------------------

// filter() condition ke basis pe elements return karta hai
let new_arr1 = arr.filter((x) => x >= 5);
// sirf 5 ya usse bade numbers

console.log(arr);       // original same
console.log(new_arr1);  // [5,7,9]

// ===============================
// EVERY & SOME (Condition check)
// ===============================

// every() -> check karta hai kya ALL elements condition satisfy karte hain
console.log(`Is every element even - ${arr.every((x) => x % 2 === 0)}`);
// false (kyunki sab even nahi hain)

// some() -> check karta hai kya AT LEAST ONE element condition satisfy karta hai
console.log(`Is some element even - ${arr.some((x) => x % 2 === 0)}`);
// true (kyunki kuch even ho sakte hain ya nahi, yahan check depend karega)

// ===============================
// SORT METHOD
// ===============================

// sort() array ko arrange karta hai (original array modify hota hai)

console.log(arr.sort());
// default string sorting (not good for numbers)

// new array example
let arr2 = [100, 20, 5, 80];

arr2.sort();
console.log(arr2);
// wrong output because string comparison hota hai

// ascending order (small to big)
arr2.sort((a, b) => a - b);
console.log(arr2); // [5,20,80,100]

// descending order (big to small)
arr2.sort((a, b) => b - a);
console.log(arr2); // [100,80,20,5]

// ===============================
// REVERSE METHOD
// ===============================

// reverse() array ko ulta kar deta hai (original modify hota hai)

console.log(arr2.reverse());
// [5,20,80,100] → reverse

// ===============================
// FILL METHOD
// ===============================

// fill(value, start, end)
// array ko ek value se replace karta hai

arr2.fill(0);
// pura array 0 se fill ho gaya

console.log(arr2);
[0,0,0,0]

// ===============================
// ARRAYS IN JAVASCRIPT (IMPORTANT METHODS)
// ===============================

const marvel_heros = ["ironman", "thor"];
const dc_heros = ["superman", "batman"];

// ===============================
// 1. push() METHOD
// ===============================

// push() array ke andar element add karta hai
// ⚠️ agar array push karo to wo ARRAY ke andar ARRAY ban jata hai

marvel_heros.push(dc_heros);

console.log("After push:", marvel_heros);
// Output:
// ["ironman", "thor", ["superman", "batman"]]


// ===============================
// 2. concat() METHOD
// ===============================

// concat() arrays ko merge karta hai
// ❌ original array change nahi hota
// ❗ new array return karta hai

const new_heros = marvel_heros.concat(dc_heros);

console.log("Concat result:", new_heros);
console.log("Marvel original:", marvel_heros);
console.log("DC original:", dc_heros);


// ===============================
// 3. SPREAD OPERATOR (...)
// ===============================

// spread operator modern way hai concat ka
// arrays ko flat merge karta hai

const all_heros = [...marvel_heros, ...dc_heros];

console.log("Spread result:", all_heros);
console.log("Marvel:", marvel_heros);
console.log("DC:", dc_heros);


// ===============================
// 4. flat() METHOD
// ===============================

// flat() nested arrays ko simple array me convert karta hai
// argument = depth (kitni deep level tak flatten karna hai)

const arrr1 = [1, 2, 3, [2, 5, 4], 4, [45, [65, 76]]];

const real_array = arrr1.flat(2);

console.log("Flat array:", real_array);
// Output:
// [1,2,3,2,5,4,4,45,65,76]


// ===============================
// 5. Array.isArray()
// ===============================

// check karta hai ki value array hai ya nahi

console.log(Array.isArray("sameer")); // false
console.log(Array.isArray([1,2,3]));  // true


// ===============================
// 6. Array.from()
// ===============================

// string ko array me convert karta hai

console.log(Array.from("sameer"));
// ['s','a','m','e','e','r']


// ⚠️ interesting case

console.log(Array.from({name:"sameer"}));
// ❌ empty array []
// kyunki object iterable nahi hota


// ===============================
// 7. Array.of()
// ===============================

// values ko array me convert karta hai

let score1 = 12;
let score2 = 13;
let score3 = 14;

console.log(Array.of(score1, score2, score3));
// [12, 13, 14]

// same as:
console.log([score1, score2, score3]);


// ⚠️ wrong usage (commented)
// console.log(Array.from(score1,score2,score3));