// ===================== OBJECTS IN JAVASCRIPT =====================

// An object is a collection of key-value pairs used to store related data and methods.

// ---------------------------------------------------------------
// Singleton
// ---------------------------------------------------------------
// Objects created using constructors (new Object()) are singleton objects.
// Objects created using object literals ({}) are not singleton.

// Static method for creating an object
// Object.create()

// ================================================================
// Creating an object using constructor
// ================================================================

const person1 = new Object(); // Empty object

person1.name = "John";
person1.age = 25;

console.log(person1);

// Output:
// { name: 'John', age: 25 }

// ================================================================
// Object Literal
// ================================================================

// Creating a Symbol
const mysyn = Symbol("key1");

const jsuser = {
    name: "sameer",             // Property name is treated as a string internally
    "fullname": "kushwaha",     // Property with quotes

    // Symbol used as property key
    // Without [] it becomes a normal string key "mysyn"
    [mysyn]: "mykey1",

    age: 17,
    location: "saidpur",
    email: "xyz.@gmail.com",
    ifloggedIn: false,

    // Array as property value
    lastloginDays: ["Monday", "Saturday"]
};

console.log(jsuser);

console.log(typeof jsuser); // object

// Access Symbol property
console.log(jsuser[mysyn]); // mykey1

// ================================================================
// Accessing Object Properties
// ================================================================

// Dot notation
console.log(jsuser.fullname);

// Bracket notation
console.log(jsuser["fullname"]);

// Dot notation
console.log(jsuser.name);

// Access array property
console.log(jsuser.lastloginDays);

// Bracket notation
console.log(jsuser["email"]);
console.log(jsuser["ifloggedIn"]);

// ================================================================
// Dynamic Property Access
// ================================================================

const key = "location";

// Variable contains property name
console.log(jsuser[key]); // saidpur

// Looks for property literally named "key"
console.log(jsuser.key); // undefined

// ================================================================
// Updating Object Properties
// ================================================================

jsuser.age = 18;

console.log(jsuser.age);

// ================================================================
// Object.freeze()
// ================================================================

// Freeze prevents:
// 1. Adding new properties
// 2. Updating existing properties
// 3. Deleting properties

// Object.freeze(jsuser);

// This will NOT change the value
jsuser.age = 2;

console.log(jsuser);
// ================================================================
// Adding Methods to an Object
// ================================================================

// We are adding a new method (function) to the object.
// In JavaScript, functions stored as object properties are called methods.

jsuser.greeting = function () {
    console.log("Hello JS User 1");
};

// Prints the function definition (does not execute it)
console.log(jsuser.greeting);

// Executes the method
console.log(jsuser.greeting());

// ================================================================
// Another Method
// ================================================================

// 'this' refers to the current object (jsuser).
// It allows us to access the object's own properties.

jsuser.greetingtwo = function () {
    console.log(`Hello JS User, ${this.ifloggedIn}`);
};

// Calls the method and prints the value of ifloggedIn
console.log(jsuser.greetingtwo());