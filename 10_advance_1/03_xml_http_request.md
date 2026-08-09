# XMLHttpRequest (XHR)

## What is XMLHttpRequest?

XMLHttpRequest (XHR) is a JavaScript object used to send and receive data between a web browser and a server without reloading the page. It enables asynchronous communication and is commonly used for API requests.

## Key Features

* Sends HTTP requests to a server.
* Receives data asynchronously.
* Updates web page content without page refresh.
* Supports GET, POST, PUT, PATCH, and DELETE requests.

# AJAX
AJAX (Asynchronous JavaScript and XML) ek technique hai jisse web page bina reload hue server se data bhej aur receive kar sakta hai.
```
AJAX requests traditionally XMLHttpRequest (XHR) se bheji jaati hain
```


## Common Methods

| Method               | Description            |
| -------------------- | ---------------------- |
| `open()`             | Configures the request |
| `send()`             | Sends the request      |
| `setRequestHeader()` | Adds request headers   |
| `abort()`            | Cancels the request    |

## Important Properties

| Property       | Description               |
| -------------- | ------------------------- |
| `responseText` | Response data from server |
| `status`       | HTTP status code          |
| `readyState`   | Current request state     |

## Request Lifecycle

| State | Meaning                |
| ----- | ---------------------- |
| 0     | Uninitialized          |
| 1     | Connection established |
| 2     | Request received       |
| 3     | Processing             |
| 4     | Request completed      |

## Basic Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/data");

xhr.onload = function () {
    console.log(xhr.responseText);
};

xhr.send();
```

## Modern Alternative

Today, the Fetch API is preferred because it provides a simpler and more readable way to make API requests.

## Summary

XMLHttpRequest is a browser API that allows web applications to communicate with servers asynchronously, making it possible to fetch or send data without reloading the page.

# Difference Between Fetch API and XMLHttpRequest (XHR)

| Feature             | Fetch API                        | XMLHttpRequest (XHR)                        |
| ------------------- | -------------------------------- | ------------------------------------------- |
| Introduction        | Modern API for HTTP requests     | Older API for HTTP requests                 |
| Syntax              | Simple and clean                 | More verbose and complex                    |
| Promise Support     | Uses Promises                    | Uses callbacks and events                   |
| Readability         | Easier to read and maintain      | Less readable                               |
| Error Handling      | Uses `.catch()`                  | Requires manual status checking             |
| JSON Handling       | Supports `response.json()`       | Requires `JSON.parse()`                     |
| Async/Await Support | Fully supported                  | Not supported directly                      |
| Progress Tracking   | Limited support                  | Better support for upload/download progress |
| Browser Support     | Modern browsers                  | Older and modern browsers                   |
| Usage Today         | Preferred in modern applications | Mainly used in legacy applications          |

## Fetch API Example

```javascript
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## XMLHttpRequest Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/users");

xhr.onload = function () {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
};

xhr.send();
```

## Summary

* **Fetch API** is modern, cleaner, Promise-based, and preferred for new projects.
* **XMLHttpRequest (XHR)** is older, callback-based, and commonly found in legacy applications.
* For modern web development, **Fetch API is generally the recommended choice**.
