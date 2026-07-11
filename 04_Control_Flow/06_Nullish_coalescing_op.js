// ==========================================
// Nullish Coalescing Operator (??)
// ==========================================
//
// ?? operator tab right-side value return karta hai
// jab left-side value sirf null ya undefined ho.
//
// Agar left-side value valid hai, to wahi return hoti hai.

let val1;

// val1 = 5 ?? 10;
// Output: 5
// Kyunki 5 null ya undefined nahi hai.

// val1 = null ?? 10;
// Output: 10
// Kyunki left side null hai.

// val1 = undefined ?? 15;
// Output: 15
// Kyunki left side undefined hai.

// Multiple values me pehli non-null/undefined value return hoti hai.
val1 = null ?? 10 ?? 15;
// Output: 10

console.log(val1);


// ==========================================
// Ternary Operator (? :)
// ==========================================
//
// Syntax:
// condition ? true wala code : false wala code;
//
// Agar condition true hai to '?' ke baad wala part execute hoga.
// Agar condition false hai to ':' ke baad wala part execute hoga.

const iceTeaPrice = 10;

// Condition check
iceTeaPrice >= 90
    ? console.log("Less than 80")   // Ye tab chalega jab condition true ho
    : console.log("More than 80");  // Ye tab chalega jab condition false ho

// Current Output:
// More than 80
// Kyunki iceTeaPrice = 10 hai aur 10 >= 90 false hai.