// ===================== Map =====================

// Map ek collection hai jo key-value pairs store karta hai.
const map = new Map();

// Key = 'IN', Value = 'India'
map.set('IN', 'India');

// Key = 'USA', Value = 'United State Of America'
map.set('USA', 'United State Of America');

// Key = 'Fr', Value = 'France'
map.set('Fr', 'France');

// Same key ('IN') dubara add ki gayi hai.
// Map duplicate keys allow nahi karta.
// Agar key same ho aur value bhi same ho to koi nayi entry nahi banti.
// Agar value alag hoti, to purani value update ho jati.
map.set('IN', 'India');

// Map insertion order maintain karta hai.
// Jis order me entries add karte ho,
// usi order me iterate (print) hoti hain.

// Pura Map dekhne ke liye
console.log(map);





/// ===================== for...of with Object =====================

// ❌ Agar 'map' ek normal JavaScript Object hai, to us par for...of use nahi kar sakte.

// for (const key of map) {
//     console.log(key);
// }

// Error:
// TypeError: map is not iterable

// Reason:
// for...of sirf iterable objects par chalta hai.
// Jaise:
// ✅ Array
// ✅ String
// ✅ Map
// ✅ Set

// Normal Object iterable nahi hota,


// ---------------------------------------------------------------------------------------
// for...of loop se Map ko iterate karna
// ---------------------------------------------------------------------------------------

// Destructuring ki help se key aur value alag-alag mil jati hain.
for (const [key, value] of map) {
    // Har iteration me key aur uski value print hogi
    

    console.log(key, ':-', value);
}



// ===================== for...in with Map =====================

// ❌ for...in loop Map ke saath kaam nahi karta.

// for...in ka use object ki enumerable properties (keys) ko iterate karne ke liye hota hai.
// Map ek iterable object hai, normal object nahi.

// Isliye ye loop koi output nahi dega.
for (const key in map) {

    // Ye execute nahi hoga.
    // console.log(key);
}

// ✅ Map ko iterate karne ke liye hamesha for...of use karo.

// Example:
// for (const [key, value] of map) {
//     console.log(key, value);
// }