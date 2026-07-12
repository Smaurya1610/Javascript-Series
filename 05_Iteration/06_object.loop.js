// ===================== Object =====================

// Object create kiya
const Myobject = {
    game1: "NFS",
    game2: "Spiderman"
};

// Object ke sirf keys return karta hai.
console.log(Object.keys(Myobject));

// Object ki sirf values return karta hai.
console.log(Object.values(Myobject));

// Object ko key-value pairs ki array me convert karta hai.
console.log(Object.entries(Myobject));

// Pura object print karega.
console.log(Myobject);


// ===================== for...of with Object =====================

// ❌ Direct object par for...of use nahi kar sakte,
// kyunki object iterable nahi hota.

// for (const [key, value] of Myobject) {
//     console.log(key, value);
// }

// Error:
// TypeError: Myobject is not iterable


// ✅ Object.entries() object ko array me convert kar deta hai,
// isliye ab for...of use kar sakte hain.

for (const [key, value] of Object.entries(Myobject)) {
    console.log(key, ":-", value);
}

/*
Output:
game1 :- NFS
game2 :- Spiderman
*/


// ===================== for...in with Object =====================

const myobject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

// ✅ Objects ke liye generally for...in use kiya jata hai.
// Ye object ki keys return karta hai.

for (const key in myobject) {

    // Sirf key print karega.
    console.log(key);

    // Key ki help se value access karte hain.
    console.log(myobject[key]);

    // Key aur value dono print karna.
    console.log(`${key} is shortcut for ${myobject[key]}`);
}



// ===================== Summary =====================

/*
Object iterate karne ke 2 common tareeke:

1. for...in
   ➜ Object ki keys return karta hai.
   ➜ Value access: object[key]

2. for...of + Object.entries()
   ➜ Object ko array me convert karke
      key aur value dono directly mil jate hain.

Remember:
❌ Object directly iterable nahi hota.
✅ Object.entries(object) iterable hota hai.
*/