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

// for...of loop se Map ko iterate karna
// Destructuring ki help se key aur value alag-alag mil jati hain.
for (const [key, value] of map) {
    // Har iteration me key aur uski value print hogi
    // Output:
    // IN :- India
    // USA :- United State Of America
    // Fr :- France

    console.log(key, ':-', value);
}