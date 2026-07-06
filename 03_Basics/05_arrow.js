// // ======================= this keyword =======================

// const user = {
//   username: "sameer",
//   price: 999,

//   // Object method
//   welcome: function () {
//     // 'this' current object ko refer karta hai
//     console.log(`${this.username}, Welcome to website`);

//     // Current object print hoga
//     console.log(this);
//   },
// };

// // Method call
// user.welcome();

// // Object ki property update ki
// user.username = "sam";

// // Updated value print hogi
// user.welcome();

// // Global scope me
// // Node.js => {}
// // Browser => Window object
// console.log(this);

// // Browser me global object = Window


// ======================= Normal Function =======================

function chai() {
  let username = "sameer";

  // Browser -> Window
  // Node -> Global object
  console.log(this);

  // Local variable ko 'this' se access nahi kar sakte
  // this object ko refer karta hai, local variables ko nahi
  // console.log(this.username); // undefined
}

chai();


// ======================= Function Expression =======================

const chaipatti = function () {
  let username = "sameer";

  console.log(this);

  // undefined
  // console.log(this.username);
};

chaipatti();


// ======================= Arrow Function =======================

const eilachi = () => {
  let username = "sameer";

  // Arrow function ka apna 'this' nahi hota.
  // Ye surrounding (lexical) scope ka this use karta hai.
  console.log(this);

  // undefined
  // console.log(this.username);
};

eilachi();


// ======================= Arrow Function Syntax =======================

// Explicit Return
const addtwo = (num1, num2) => {
  return num1 + num2;
};

// Implicit Return
// Ek hi statement ho to return likhne ki zarurat nahi
// const addtwo = (num1, num2) => num1 + num2;

// Parentheses () ke andar bhi implicit return hota hai
// const addtwo = (num1, num2) => (num1 + num2);


// ======================= Returning Object =======================

// Curly braces {} ko function body maana jata hai,
// isliye ye object return nahi karega.
const getUser1 = () => {
  username: "sameer";
};

// Output => undefined


// Object return karna ho to parentheses () me wrap karo
const getUser2 = () => ({
  username: "sameer",
});

// Output => { username: "sameer" }

console.log(addtwo(2, 3));
console.log(getUser2());


// ======================= Important Points =======================

/*
1. Object ke andar:
   this -> current object

2. Normal function:
   this -> Browser me Window
           Node me Global object

3. Arrow function:
   Apna this nahi hota.
   Parent (lexical scope) ka this use karta hai.

4. Explicit Return:
   {
      return value;
   }

5. Implicit Return:
   () => value

6. Object return karna ho:
   () => ({ key: value })

*/