# Why Do We Need Promises?

Many beginners think:

> "setTimeout to Promise ke bina bhi chal raha hai, phir Promise ki zaroorat kya hai?"

This is one of the most important concepts in JavaScript.

---

# Async Code Can Run Without Promises

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Data received");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Data received
```

Explanation:

1. "Start" print hua.
2. setTimeout browser ko de diya gaya.
3. JavaScript next line par chali gayi.
4. "End" print hua.
5. 2 second baad callback execute hua.
6. "Data received" print hua.

So:

```text
setTimeout ko Promise ki zaroorat nahi hai.
```

---

# Real Problem

Problem tab aati hai jab asynchronous operation koi value return kare.

Example:

```javascript
function getUser() {

    setTimeout(() => {
        return {
            name: "Sameer"
        };
    }, 2000);

}

const user = getUser();

console.log(user);
```

Output:

```text
undefined
```

---

# Why Undefined?

Let's see step by step.

```javascript
const user = getUser();
```

JavaScript getUser() ko call karti hai.

Inside getUser():

```javascript
setTimeout(() => {
    return {
        name: "Sameer"
    };
}, 2000);
```

setTimeout future ke liye schedule ho gaya.

Lekin getUser() immediately finish ho gayi.

Function ne kuch return nahi kiya.

Therefore:

```javascript
const user = undefined;
```

Output:

```text
undefined
```

---

# Timeline

```text
Time = 0 sec

getUser() called

|
|---- setTimeout registered
|
|---- function ends
|
|---- returns undefined

Time = 2 sec

setTimeout callback runs

return {name:"Sameer"}
```

Important:

```text
Ye return getUser() ko nahi milta.
```

Ye sirf callback ke andar return hota hai.

---

# First Solution: Callback

```javascript
function getUser(callback) {

    setTimeout(() => {

        callback({
            name: "Sameer"
        });

    }, 2000);

}

getUser((user) => {
    console.log(user);
});
```

Output:

```text
{name: "Sameer"}
```

Now data mil gaya.

---

# Problem With Callbacks

One async task:

```javascript
getUser(callback);
```

Works fine.

---

But multiple async tasks:

```javascript
getUser(function(user){

    getPosts(user.id,function(posts){

        getComments(posts[0].id,function(comments){

            getLikes(comments[0].id,function(likes){

                console.log(likes);

            });

        });

    });

});
```

This becomes:

```text
Deep nesting
Hard debugging
Hard maintenance
```

This is called:

# Callback Hell

---

# Promise Solution

Promise stores a future result.

```javascript
function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                name: "Sameer"
            });

        }, 2000);

    });

}
```

---

# Consuming Promise

```javascript
getUser()
.then((user) => {

    console.log(user);

});
```

Output:

```text
{name:"Sameer"}
```

---

# What Actually Happens?

Step 1

```javascript
const promise = getUser();
```

Returns:

```text
Promise { <pending> }
```

---

Step 2

After 2 seconds:

```javascript
resolve({
    name:"Sameer"
});
```

Promise becomes:

```text
Promise { <fulfilled> }
```

---

Step 3

```javascript
.then(...)
```

executes.

---

# Promise Timeline

```text
getUser()

      |
      |
      V

Promise (Pending)

      |
      |
      V

resolve(data)

      |
      |
      V

Promise (Fulfilled)

      |
      |
      V

.then() runs
```

---

# What Problem Did Promise Solve?

Without Promise:

```javascript
const user = getUser();

console.log(user);
```

Output:

```text
undefined
```

Because data arrives later.

---

With Promise:

```javascript
getUser()
.then((user)=>{
    console.log(user);
});
```

JavaScript waits until promise is fulfilled.

Then executes the code.

---

# Real World Example: Fetch

Imagine:

```javascript
fetch("https://api.com/users");
```

Browser sends request to server.

Server may take:

```text
1 second
2 seconds
5 seconds
10 seconds
```

JavaScript cannot stop everything and wait.

Therefore fetch returns:

```javascript
Promise
```

Immediately.

---

# What Fetch Returns

```javascript
const response =
fetch("https://api.com/users");

console.log(response);
```

Output:

```text
Promise { <pending> }
```

---

# Why Pending?

Because server has not responded yet.

---

# After Server Responds

Promise becomes:

```text
Promise { <fulfilled> }
```

Now data is available.

---

# Using then()

```javascript
fetch("https://api.com/users")
.then((response) => {

    return response.json();

})
.then((data) => {

    console.log(data);

});
```

---

# Fetch Timeline

```text
fetch()

      |
      |
      V

Promise Pending

      |
      |
      V

Server Response Arrives

      |
      |
      V

Promise Fulfilled

      |
      |
      V

.then() executes
```

---

# If Promises Did Not Exist

Suppose fetch returned nothing.

Example:

```javascript
const users =
fetch("https://api.com/users");

console.log(users);
```

JavaScript would not know:

- When request completed
- Whether request failed
- When data arrived
- What code should run next

Developers would have to use only callbacks.

Example:

```javascript
fetch(url,function(response){

    parse(response,function(data){

        save(data,function(result){

            console.log(result);

        });

    });

});
```

This would create:

```text
Callback Hell
Unreadable code
Complex error handling
```

---

# Why Promises Are Important

Promises provide:

1. Future value storage
2. Success handling
3. Error handling
4. Chaining
5. Cleaner async code
6. Foundation for async/await

---

# Simple Definition

```text
setTimeout
=
Mechanism to perform async work
```

```text
Promise
=
Mechanism to manage the future result
of async work
```

---

# One-Line Interview Answer

Promise does not execute asynchronous code.

The asynchronous operation runs independently.

Promise only represents and manages the future result of that operation, allowing us to handle success, failure, and chaining in a clean way.