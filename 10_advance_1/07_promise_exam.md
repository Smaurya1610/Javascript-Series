# Promise Example: Pizza Order 🍕

Let's understand Promises using a real-life example.

Imagine you order a pizza.

The pizza shop needs 5 seconds to prepare it.

---

# Without Promise

Suppose we write:

```javascript
function orderPizza() {

    setTimeout(() => {

        return "Pizza Ready";

    }, 5000);

}

const pizza = orderPizza();

console.log(pizza);
```

Output:

```text
undefined
```

---

# Why Undefined?

Timeline:

```text
Time = 0 sec

orderPizza() called

|
|---- setTimeout registered
|
|---- function finished
|
|---- returns undefined

Time = 5 sec

return "Pizza Ready"
```

Problem:

```text
Pizza 5 second baad ready hui,
lekin function pehle hi khatam ho chuka tha.
```

So:

```javascript
const pizza = undefined;
```

---

# Real Problem

Suppose customer wants to eat pizza.

```javascript
const pizza = orderPizza();

console.log("Eating", pizza);
```

Output:

```text
Eating undefined
```

Clearly wrong.

---

# Callback Solution

```javascript
function orderPizza(callback) {

    setTimeout(() => {

        callback("Pizza Ready");

    }, 5000);

}

orderPizza((pizza) => {

    console.log("Eating", pizza);

});
```

Output:

```text
Eating Pizza Ready
```

Works.

But what if we need multiple steps?

---

# Callback Hell

```javascript
orderPizza(function(pizza){

    makePayment(function(payment){

        getDeliveryBoy(function(delivery){

            deliverPizza(function(result){

                console.log(result);

            });

        });

    });

});
```

This becomes difficult to read.

---

# Promise Solution

```javascript
function orderPizza() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Pizza Ready");

        }, 5000);

    });

}
```

---

# Consuming Promise

```javascript
orderPizza()
.then((pizza) => {

    console.log("Eating", pizza);

});
```

Output:

```text
Eating Pizza Ready
```

---

# What Happens Internally?

When this runs:

```javascript
const result = orderPizza();
```

Immediately:

```text
Promise { <pending> }
```

is returned.

---

After 5 seconds:

```javascript
resolve("Pizza Ready");
```

Promise becomes:

```text
Promise { <fulfilled> }
```

Now:

```javascript
.then(...)
```

runs.

---

# Promise Timeline

```text
orderPizza()

      |
      |
      V

Promise Pending

      |
      |
      V

Pizza Prepared

      |
      |
      V

resolve("Pizza Ready")

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

# Error Handling With Promise

Suppose restaurant is closed.

```javascript
function orderPizza() {

    return new Promise((resolve, reject) => {

        let shopOpen = false;

        if(shopOpen){

            resolve("Pizza Ready");

        }else{

            reject("Shop Closed");

        }

    });

}
```

---

# Handling Success and Failure

```javascript
orderPizza()
.then((pizza) => {

    console.log(pizza);

})
.catch((error) => {

    console.log(error);

});
```

Output:

```text
Shop Closed
```

---

# Same Example Using async/await

```javascript
async function eatPizza() {

    try {

        const pizza =
        await orderPizza();

        console.log(pizza);

    }
    catch(error) {

        console.log(error);

    }

}

eatPizza();
```

---

# Real World Mapping

```text
Pizza Order
=
API Request
```

```text
Pizza Ready
=
Data Received
```

```text
Shop Closed
=
Server Error
```

```text
resolve()
=
Success
```

```text
reject()
=
Failure
```

---

# Interview Explanation

Without Promise:

- Async task runs later.
- Function returns immediately.
- Result cannot be obtained directly.
- Often leads to callbacks.

With Promise:

- Async task still runs later.
- Promise stores the future result.
- Success handled by then().
- Failure handled by catch().
- Cleaner and scalable code.

---

# One-Line Summary

```text
Without Promise:
Result arrives later but there is no standard way
to wait for it.

With Promise:
The future result is wrapped inside a Promise,
and JavaScript notifies us when it is available.
```