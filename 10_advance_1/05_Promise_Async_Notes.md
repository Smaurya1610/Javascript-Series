# JavaScript Promises and Async/Await

## What is a Promise?

A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation.

Think of it as a "promise" that a task will finish in the future.

Examples:
- API calls
- Database operations
- File reading
- Network requests
- Timers (setTimeout)

---

## Why Do We Need Promises?

### Synchronous Code

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

Each line waits for the previous line to finish.

---

### Asynchronous Code

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

Output:

```text
A
C
B
```

JavaScript does not wait for asynchronous tasks.

Promises help us manage these asynchronous operations.

---

# Promise States

A Promise can be in one of three states.

### 1. Pending

Initial state.

```text
Pending
```

Task is still running.

---

### 2. Fulfilled

Operation completed successfully.

```text
Fulfilled
```

resolve() is called.

---

### 3. Rejected

Operation failed.

```text
Rejected
```

reject() is called.

---

# Promise Lifecycle

```text
           Pending
          /       \
         /         \
    resolve()   reject()
       /             \
 Fulfilled         Rejected
```

---

# Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Task Completed");
    } else {
        reject("Task Failed");
    }

});
```

---

# Consuming a Promise

```javascript
promise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});
```

Output:

```text
Task Completed
```

---

# resolve()

Used when operation succeeds.

```javascript
resolve("Data Found");
```

---

# reject()

Used when operation fails.

```javascript
reject("Server Error");
```

---

# then()

Handles successful execution.

```javascript
promise.then((result)=>{
    console.log(result);
});
```

---

# catch()

Handles errors.

```javascript
promise.catch((error)=>{
    console.log(error);
});
```

---

# finally()

Runs regardless of success or failure.

```javascript
promise.finally(()=>{
    console.log("Always Runs");
});
```

---

# Promise Chaining

Multiple then() methods can be connected.

```javascript
promise
.then((user)=>{
    return user.username;
})
.then((username)=>{
    console.log(username);
});
```

Example:

```javascript
Promise.resolve({
    username:"sameer"
})
.then((user)=>{
    return user.username;
})
.then((username)=>{
    console.log(username);
});
```

Output:

```text
sameer
```

---

# Passing Data Through resolve()

```javascript
resolve({
    username:"sameer",
    email:"sameer@gmail.com"
});
```

Receiving data:

```javascript
promise.then((user)=>{
    console.log(user.username);
});
```

---

# Promise Methods

## Promise.resolve()

Creates a resolved promise.

```javascript
Promise.resolve("Success");
```

---

## Promise.reject()

Creates a rejected promise.

```javascript
Promise.reject("Failed");
```

---

## Promise.all()

Waits for all promises.

```javascript
Promise.all([
    promise1,
    promise2,
    promise3
]);
```

If one fails, entire operation fails.

---

## Promise.allSettled()

Waits for all promises.

```javascript
Promise.allSettled([
    promise1,
    promise2
]);
```

Returns both success and failure results.

---

## Promise.race()

Returns first completed promise.

```javascript
Promise.race([
    promise1,
    promise2
]);
```

---

## Promise.any()

Returns first successful promise.

```javascript
Promise.any([
    promise1,
    promise2
]);
```

---

# Callback Hell

Before Promises:

```javascript
getUser(function(user){

    getPosts(user.id,function(posts){

        getComments(posts[0].id,function(comments){

            console.log(comments);

        });

    });

});
```

Problems:
- Difficult to read
- Difficult to debug
- Deep nesting

This is called Callback Hell.

---

# Promises vs Callbacks

| Callbacks | Promises |
|------------|-----------|
| Nested code | Cleaner |
| Hard debugging | Easy debugging |
| Callback Hell | No Callback Hell |
| Less readable | More readable |

---

# Async/Await

Async/Await is a cleaner way to work with Promises.

Introduced in ES2017.

---

# async Keyword

Makes a function return a Promise automatically.

```javascript
async function test(){
    return "Hello";
}
```

Equivalent to:

```javascript
function test(){
    return Promise.resolve("Hello");
}
```

---

# await Keyword

Waits until Promise is resolved.

```javascript
const result = await promise;
```

---

# Basic Example

```javascript
async function getData(){

    const result = await Promise.resolve("Hello");

    console.log(result);

}

getData();
```

Output:

```text
Hello
```

---

# Async/Await with Error Handling

Use try-catch.

```javascript
async function getData(){

    try{

        const result = await promise;

        console.log(result);

    }catch(error){

        console.log(error);

    }

}
```

---

# Why try-catch?

Without it:

```javascript
const result = await promise;
```

If promise rejects:

```text
Uncaught Error
```

So we use:

```javascript
try{
    const result = await promise;
}
catch(error){
    console.log(error);
}
```

---

# Fetch API

Used to communicate with servers.

---

# Fetch Using then()

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});
```

---

# Fetch Using async/await

```javascript
async function getUsers(){

    try{

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const data =
            await response.json();

        console.log(data);

    }
    catch(error){

        console.log(error);

    }

}

getUsers();
```

---

# Important Interview Questions

## What is a Promise?

An object representing eventual success or failure of an asynchronous operation.

---

## What are Promise states?

1. Pending
2. Fulfilled
3. Rejected

---

## Difference Between resolve() and reject()

| resolve() | reject() |
|------------|-----------|
| Success | Failure |
| then() | catch() |

---

## Difference Between then() and catch()

| then() | catch() |
|----------|----------|
| Handles success | Handles errors |

---

## Difference Between Promise and Async/Await

| Promise | Async/Await |
|-----------|-------------|
| Uses then() | Uses await |
| More chaining | Cleaner syntax |
| Harder to read | Easier to read |

---

## Does await block JavaScript?

No.

It only pauses execution inside the async function.

---

## Can await be used without async?

No.

```javascript
await promise;
```

❌ Error

Must be inside:

```javascript
async function test(){
    await promise;
}
```

---

## Does fetch return a Promise?

Yes.

```javascript
const response = fetch(url);
```

returns:

```javascript
Promise<Response>
```

---

## Does response.json() return a Promise?

Yes.

```javascript
const data = await response.json();
```

or

```javascript
response.json()
.then(...)
```

---

# Quick Revision

Promise States:
- Pending
- Fulfilled
- Rejected

Promise Methods:
- then()
- catch()
- finally()

Static Methods:
- Promise.resolve()
- Promise.reject()
- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()

Async/Await:
- async → returns Promise
- await → waits for Promise
- try/catch → error handling

Most Common Use Cases:
- API Calls
- Database Queries
- Authentication
- File Operations
- Network Requests