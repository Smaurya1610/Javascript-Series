# Fetch API - Complete Explanation (Beginner Friendly)

## Original MDN Statement

> A `fetch()` promise only rejects when a network error is encountered.
>
> A `fetch()` promise does not reject on HTTP errors (404, 500, etc.).
>
> Instead, we must check `Response.ok` or `Response.status`.

---

# What Does This Mean?

Many beginners think:

```js
fetch(url)
  .then(response => {
    console.log("Success");
  })
  .catch(error => {
    console.log("Error");
  });
```

If the server returns **404 Not Found** or **500 Internal Server Error**, they expect `.catch()` to run.

❌ Wrong.

`fetch()` only cares whether it successfully contacted the server.

If the server responds with anything (200, 404, 500, etc.), the Promise is considered successful and `.then()` runs.

---

# When Does fetch() Reject?

`fetch()` rejects only when it cannot communicate with the server at all.

Examples:

- No Internet Connection
- DNS Error
- Server Unreachable
- CORS Error
- Permission Issues
- Network Failure

Example:

```js
fetch("https://api.example.com/data")
  .catch(error => {
    console.log("Network Error");
  });
```

Output:

```js
Network Error
```

Here the request never reached the server.

Therefore Promise is rejected.

---

# What Happens on HTTP Errors?

Suppose the requested page does not exist.

```js
fetch("https://api.example.com/wrong-url")
  .then(response => {
    console.log("Resolved");
  })
  .catch(error => {
    console.log("Rejected");
  });
```

Output:

```js
Resolved
```

Why?

Because the server responded.

The response happened to be:

```http
404 Not Found
```

But a response is still a response.

Therefore Promise is resolved.

---

# Understanding the Flow

Case 1:

```text
Browser → Server → 200 OK
```

Promise:

```text
Resolved
```

---

Case 2:

```text
Browser → Server → 404 Not Found
```

Promise:

```text
Resolved
```

---

Case 3:

```text
Browser → Server → 500 Internal Server Error
```

Promise:

```text
Resolved
```

---

Case 4:

```text
Browser ✘ Server
(No Connection)
```

Promise:

```text
Rejected
```

---

# How to Detect 404 and 500?

Since fetch() does not reject for HTTP errors, we must check the response manually.

Two important properties are available:

1. `response.ok`
2. `response.status`

---

# response.ok

`response.ok` is a Boolean value.

It becomes:

```text
true  → Status 200–299
false → Any other status
```

Examples:

| Status Code | response.ok |
|------------|-------------|
| 200 | true |
| 201 | true |
| 204 | true |
| 301 | false |
| 404 | false |
| 500 | false |

Example:

```js
fetch(url)
  .then(response => {
    if (response.ok) {
      console.log("Success");
    } else {
      console.log("HTTP Error");
    }
  });
```

Output:

```js
HTTP Error
```

(if status is 404 or 500)

---

# response.status

Returns the exact HTTP status code.

Example:

```js
fetch(url)
  .then(response => {
    console.log(response.status);
  });
```

Possible Output:

```js
200
```

or

```js
404
```

or

```js
500
```

or

```js
403
```

---

# Best Practice

Use both `response.ok` and `response.status`.

Example:

```js
fetch("https://api.example.com/wrong-url")
  .then(response => {

    console.log(response.status);

    if (!response.ok) {
      throw new Error("Page Not Found");
    }

    return response.json();
  })

  .catch(error => {
    console.log(error.message);
  });
```

Output:

```js
Page Not Found
```

---

# Why throw Error()?

Normally:

```js
404
```

still goes to `.then()`.

By writing:

```js
throw new Error("Page Not Found");
```

we create our own error.

That custom error immediately moves control to `.catch()`.

Flow:

```text
404 Received
      ↓
response.ok = false
      ↓
throw Error()
      ↓
catch()
```

---

# Real World Example

Suppose user login data is requested.

```js
fetch("/users/1")
  .then(response => {

    if (!response.ok) {
      throw new Error("User Not Found");
    }

    return response.json();
  })

  .then(data => {
    console.log(data);
  })

  .catch(error => {
    console.log(error.message);
  });
```

If user exists:

```text
Data Printed
```

If user does not exist:

```text
User Not Found
```

---

# Fetch vs Network Errors

| Situation | Promise Result |
|------------|---------------|
| 200 OK | Resolve |
| 201 Created | Resolve |
| 204 No Content | Resolve |
| 301 Redirect | Resolve |
| 403 Forbidden | Resolve |
| 404 Not Found | Resolve |
| 500 Server Error | Resolve |
| Internet Off | Reject |
| DNS Failure | Reject |
| CORS Error | Reject |
| Server Unreachable | Reject |

---

# Interview Question

### Q. Does fetch() reject on 404?

Answer:

```text
No.

fetch() only rejects on network-level failures.

404 is a valid HTTP response,
so the Promise is resolved.

To handle 404,
check response.ok or response.status.
```

---

# Memory Trick

Think of fetch() like a delivery boy.

Delivery boy's job:

✔ Reach the destination.

He does NOT care what message he brings.

Examples:

```text
200 OK
404 Not Found
500 Internal Server Error
```

All are messages from the server.

So fetch() says:

"I successfully brought the response."

Therefore Promise resolves.

Only when the delivery boy cannot reach the destination:

```text
No Internet
Server Down
DNS Failure
```

does fetch() reject.

---

# Final Summary

```text
fetch() Promise Rejects For:

✔ Network Error
✔ Internet Failure
✔ DNS Error
✔ CORS Error
✔ Server Unreachable

fetch() Promise Does NOT Reject For:

✘ 404 Not Found
✘ 403 Forbidden
✘ 500 Internal Server Error

To Handle HTTP Errors:

✔ response.ok
✔ response.status

Use:

if (!response.ok) {
    throw new Error("HTTP Error");
}
```

Golden Rule:

"fetch() cares only about receiving a response,
not whether the response is good or bad."