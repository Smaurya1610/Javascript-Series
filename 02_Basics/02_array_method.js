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
// [0,0,0,0]