# API Request - Brief Overview

## What is an API Request?

An API (Application Programming Interface) request is a message sent by a client (such as a web application, mobile app, or software) to a server to retrieve, create, update, or delete data.

APIs allow different applications to communicate with each other using predefined rules and formats.

## Components of an API Request

### 1. Endpoint

The URL where the request is sent.

Example:

```text
https://api.example.com/users
```

### 2. HTTP Method

Defines the action to perform.

| Method | Purpose               |
| ------ | --------------------- |
| GET    | Retrieve data         |
| POST   | Create new data       |
| PUT    | Update existing data  |
| PATCH  | Partially update data |
| DELETE | Remove data           |

### 3. Headers

Provide additional information about the request.

Example:

```http
Content-Type: application/json
Authorization: Bearer <token>
```

### 4. Request Body

Contains data sent to the server (mainly with POST, PUT, and PATCH requests).

Example:

```json
{
  "name": "Sameer",
  "email": "sameer@example.com"
}
```

## Example API Request

```http
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "Sameer",
  "email": "sameer@example.com"
}
```

## API Response

After processing the request, the server sends a response containing:

* Status Code (200, 201, 404, 500, etc.)
* Response Headers
* Response Body

Example:

```json
{
  "id": 101,
  "name": "Sameer",
  "message": "User created successfully"
}
```

## Common Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

## Summary

API requests enable communication between applications. A request typically consists of an endpoint, HTTP method, headers, and optionally a request body. The server processes the request and returns a response with status codes and data.
