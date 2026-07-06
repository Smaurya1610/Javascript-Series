// ====================== JSON (JavaScript Object Notation) ======================

// Full Form:
// JSON = JavaScript Object Notation

// JSON ek lightweight (chhota aur simple) data format hai.

// Iska use hota hai:
// ✔ Data store karne ke liye
// ✔ Server se data bhejne ke liye
// ✔ API ke through data receive karne ke liye
// ✔ Different programming languages ke beech data exchange karne ke liye

// JSON sirf JavaScript ke liye nahi hai.
// Ye Python, Java, PHP, C#, Go, Node.js, Ruby, etc. sab languages me use hota hai.


// ====================== JSON Syntax ======================

/*
{
  "name": "Sameer",
  "age": 21,
  "isStudent": true
}
*/

// JSON me hamesha:
// ✔ Keys (property names) double quotes ("") me likhte hain.
// ✔ String values bhi double quotes ("") me hi hoti hain.


// ====================== JSON Rules ======================

// ✅ Key hamesha double quotes me hogi

// {
//   "name": "Sameer"
// }

// ❌ Wrong

// {
//   name: "Sameer"
// }


// -----------------------------

// ✅ String value double quotes me

// {
//   "name": "Sameer"
// }

// ❌ Single quote allowed nahi hai

// {
//   "name": 'Sameer'
// }


// -----------------------------

// Number bina quotes ke

// {
//   "age": 21
// }


// -----------------------------

// Boolean bina quotes ke

// {
//   "isStudent": true
// }


// -----------------------------

// null allowed hai

// {
//   "address": null
// }


// ====================== JSON me Allowed Data Types ======================

// String
// "name": "Sameer"

// Number
// "age": 21

// Boolean
// "isStudent": true

// null
// "address": null

// Array
// "hobbies": ["Coding", "Gaming", "Reading"]

// Object
// "address": {
//     "city": "Delhi",
//     "country": "India"
// }


// ====================== JSON me Kya Allowed Nahi Hai ======================

// ❌ Function

// {
//   "greet"= function(){}
// }


// // ❌ Undefined

// {
//   "salary"=undefined
// }


// // ❌ Comments

// {
//   // age of user
//   "age"= 21
// }


// // ❌ Trailing comma

// {
//   "name"= "Sameer"
// }


// ====================== JavaScript Object vs JSON ======================

// JavaScript Object

const user = {
    name: "Sameer",
    age: 21,
    isStudent: true
};

// JSON

const jsonData = `{
    "name":"Sameer",
    "age":21,
    "isStudent":true
}`;
console.log(jsonData)
console.log(typeof jsonData)
// 👉 JSON actual me ek string hota hai. Isliye JSON.parse() ki zarurat padti hai.

// Difference

// JavaScript Object
// ✔ Keys without quotes bhi likh sakte ho
// ✔ Function rakh sakte ho
// ✔ Comments likh sakte ho

// JSON
// ✔ Keys double quotes me hi hongi
// ❌ Function allowed nahi
// ❌ Comments allowed nahi
// ❌ Undefined allowed nahi


// ====================== JSON.parse() ======================

// JSON String -> JavaScript Object

const json=`{
"username":"sameer",
"price":"12"
}`
const obj=JSON.parse(json)
console.log(obj)
console.log(obj.username)

// Output
// Sameer


// ====================== JSON.stringify() ======================

// JavaScript Object -> JSON String

const student = {
    name: "Sameer",
    age: 21
};

const jsonString = JSON.stringify(student);

console.log(jsonString);

// Output
// {"name":"Sameer","age":21}
// Jab JavaScript object ko JSON string me convert karke server ya localStorage me bhejna/store karna ho.

// ====================== Real Life Example ======================

// API Response


const apiResponse=`{
  "id":1,
  "name":"Laptop",
  "price":50000,
  "inStock":true
}`


// Is JSON ko JavaScript object banane ke liye

const data = JSON.parse(apiResponse);
console.log(data)


// ====================== Interview Questions ======================

// Q1. JSON ka full form?
// JavaScript Object Notation

// Q2. JSON kisliye use hota hai?
// Data exchange between client and server.

// Q3. JSON me key kis quotes me hoti hai?
// Double Quotes (" ")

// Q4. Kya JSON me single quote allowed hai?
// ❌ No

// Q5. JSON me function allowed hai?
// ❌ No

// Q6. JSON me undefined allowed hai?
// ❌ No

// Q7. JSON.parse() kya karta hai?
// JSON String -> JavaScript Object

// Q8. JSON.stringify() kya karta hai?
// JavaScript Object -> JSON String


// ====================== Easy Trick ======================

// JSON ko yaad rakhne ki trick:
//
// JSON = Sirf Data
//
// ✔ String
// ✔ Number
// ✔ Boolean
// ✔ null
// ✔ Array
// ✔ Object
//
// ❌ Function
// ❌ undefined
// ❌ Comments
// ❌ Single quotes
//
// APIs hamesha mostly JSON format me hi data bhejti aur receive karti hain.

// -------------------------------------
// . Nested JSON
// ------------------------------------
// JSON ke andar object ke andar object bhi ho sakta hai.

// {
//   "name": "Sameer",
//   "address": {
//     "city": "Delhi",
//     "state": "Delhi"
//   }
// }    error aa raha hai toh ya eisse kisi varaible m store karo kyuki ye .js file hai    ya .json file bnaoo
const jsonData1 = `{
  "name": "Sameer",
  "address": {
    "city": "Delhi",
    "state": "Delhi"
  }
}`;
// Access:

const obj1 = JSON.parse(jsonData1);

console.log(obj1.address.city);


// JSON files ka extension hota hai:
//    .json

// ----------------------------------------------------
// 8. JSON aur Database
// ----------------------------------------------------
// Bahut saare databases JSON store karte hain.

// Example:

// MongoDB (BSON format)
// PostgreSQL (JSON/JSONB)
// MySQL (JSON datatype)

// ###################################
// imp
// ###################################

// JSON sirf data format (string) hai, JS Object real usable data structure hai.
// Object JavaScript ka data type hai, jabki JSON ek text format hai jo data exchange ke liye use hota hai.

// Taaki JSON simple rahe aur har programming language usse easily parse kar sake. |||  eisi lia comment use nhi krte

// JSON directly JS me use nahi hota eisi lia usko JSON.parse()   se object m convert krte hai taki js m use krr sake

// Server → JSON string bhejta hai
// Frontend → JSON.parse() karta hai
// Frontend → object use karta hai