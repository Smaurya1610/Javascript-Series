// =================== Lexical Scope & Closure ===================

function one() {
  const username = "sameer"; // Parent function variable

  function two() {
    const website = "youtube"; // Child function variable

    // Child function can access parent variables
    console.log(username);
  }

  // Parent function CANNOT access child variables
  console.log(website); // ❌ Error: website is not defined

  two(); // Calling child function
}

 one(); 


// =================== Block Scope ===================

if (true) {
  const name = "sameer"; // Block-scoped variable

  if (name === "sameer") {
    const websites = " youtube"; // Inner block variable

    // Inner block can access outer block variables
    // Output: sameer youtube
    console.log(name + websites);
  }

  // Cannot access inner block variable outside its block
   console.log(websites); // ❌ Error
}

// Cannot access block-scoped variable outside the block
console.log(name); // ❌ Error


// =================== Function Declaration vs Function Expression ===================

// Function Declaration
// Can be called BEFORE its declaration because of Hoisting.
addone(5);

function addone(num) {
  return num + 1;
}

// ------------------------------------------------------

// Function Expression
// Cannot be called BEFORE initialization.
// Only the variable is hoisted, not the function definition.

// addtwo(5); // ❌ Error: Cannot access 'addtwo' before initialization

const addtwo = function (num) {
  return num + 2;
};

 addtwo(5); // ✅ Works after declaration


// =================== Summary ===================

/*
. Function Declaration
   - Fully hoisted.
   - Can be called before declaration.

. Function Expression
   - Not fully hoisted.
   - Cannot be called before initialization.
*/
/*
**📌 Hoisting (Simple Definition)**

**Hoisting** JavaScript ka behavior hai jisme **declarations (variable/function)** ko code execute hone se pehle unke scope ke top par register kar diya jata hai.

**Yaad rakhne ki trick:**
👉 **Declaration upar jati hai, assignment nahi.**

### 1️⃣ `var`

```javascript
console.log(a); // undefined

var a = 10;
```

JavaScript internally:

```javascript
var a;          // Hoisted
console.log(a); // undefined
a = 10;
```

✅ `var` hoist hota hai aur uski initial value **undefined** hoti hai.

---

### 2️⃣ `let`

```javascript
console.log(a); // ❌ ReferenceError

let a = 10;
```

`let` bhi hoist hota hai, **lekin initialize nahi hota**. Jab tak declaration line execute nahi hoti, variable **Temporal Dead Zone (TDZ)** me rehta hai.

---

### 3️⃣ `const`

```javascript
console.log(a); // ❌ ReferenceError

const a = 10;
```

`const` bhi `let` ki tarah hoist hota hai, **lekin initialize nahi hota**, isliye declaration se pehle access karne par **ReferenceError** aata hai.


### 🔥 Interview Trick

* `var` → Hoisted + `undefined`
* `let` → Hoisted + TDZ (access nahi kar sakte)
* `const` → Hoisted + TDZ (access nahi kar sakte)
*/