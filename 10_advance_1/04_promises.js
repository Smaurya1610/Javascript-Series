// ======================= PROMISES =======================

// Promise = Future value ka placeholder
// Promise ke 2 parts hote hain:
// 1. Creation
// 2. Consumption

// resolve() -> Promise successful
// reject()  -> Promise failed

const promiseOne = new Promise(function (resolve, reject) {

    // Async task
    // Example: DB call, API call, Cryptography, Network request

    setTimeout(function () {
        console.log("Async task is complete");

        // Promise successfully completed
        resolve();

    }, 1000);
});

// Consuming the promise
promiseOne.then(function () {
    console.log("Promise consumed");
});


// =========================================================

// Promise creation and consumption together

new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log("Async task two");
        resolve();
    }, 1000);

}).then(function () {
    console.log("Async 2 resolved");
});


// =========================================================

// Passing data through resolve()

const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(() => {

        // Mostly object pass kiya jata hai
        // But array, string, number, function etc. bhi pass kar sakte hain

        resolve({
            username: "chai",
            email: "chaiaurcodeexample"
        });

    }, 1000);

});

promiseThree.then(function (user) {
    console.log(user);
});


// =========================================================

// Promise chaining

const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let error = false;

        if (!error) {

            resolve({
                username: "sameer",
                password: "1234"
            });

        } else {

            reject("ERROR : Something went wrong");
        }

    }, 1000);

});

promiseFour
.then((user) => {

    console.log(user);

    // Next then() ke liye value return kar rahe hain
    return user.username;

})
.then((myUsername) => {

    console.log(myUsername);

})
.catch(function (error) {

    // reject hone par catch execute hoga
    console.log(error);

})
.finally(() => {

    // Resolve ya reject dono case mein chalega
    console.log("The promise is either resolved or rejected");

});


// =========================================================

// Async / Await

const promiseFive = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let error = true;

        if (!error) {

            resolve({
                username: "Javascript",
                password: "1234"
            });

        } else {

            reject("ERROR : JS went wrong");
        }

    }, 1000);

});

async function consumePromiseFive() {

    try {

        // await promise ke result ka wait karta hai

        const response = await promiseFive;
        console.log(response);

    } catch (error) {

        // Error handling
        console.log(error);

    }

}

consumePromiseFive();


// =========================================================

// Fetch API using async/await

async function getAllUsers() {

    try {

        // Fetch returns a promise
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // json() bhi promise return karta hai
        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getAllUsers();


// =========================================================

// Fetch API using then/catch

fetch("https://jsonplaceholder.typicode.com/users")

.then((response) => {

    // Convert response into JSON
    return response.json();

})

.then((data) => {

    console.log(data);

})

.catch((error) => {

    console.log(error);

});