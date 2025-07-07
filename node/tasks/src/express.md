# Express.js Overview

## What is Express.js?

Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for web and mobile applications.

## Why Use Express.js?

- **Simplifies server creation:** Makes it easy to handle HTTP requests, routes, and middleware.
- **Routing:** Provides a powerful routing system for handling different URLs and HTTP methods.
- **Middleware support:** Allows you to use middleware to handle requests, responses, and errors.
- **Scalable:** Suitable for both small and large applications.
- **Community & Ecosystem:** Large number of plugins and middleware available.

## How We Will Use Express.js

1. **Install Express:**
   ```
   npm install express
   ```

2. **Create a basic server:**
   ```javascript
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
     res.send('Hello from Express!');
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

3. **Add routes and middleware:**  
   You can define multiple routes and use middleware for tasks like logging, authentication, and parsing request bodies.

## Example: Simple REST API

```javascript
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// GET route
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// POST route
app.post('/api/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ sum: a + b });
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});
```

## How Express.js Handles Data Exchange with the Frontend

Express.js acts as a bridge between the frontend (like a React, Angular, or plain HTML app) and your backend logic or database. Here’s how data flows:

### 1. **Frontend Sends a Request**

- The frontend makes HTTP requests (GET, POST, PUT, DELETE, etc.) to your Express server using tools like `fetch`, `axios`, or forms.
- Data can be sent as:
  - **Query parameters** (e.g., `/add?a=5&b=10`)
  - **URL parameters** (e.g., `/user/123`)
  - **Request body** (usually JSON, for POST/PUT requests)
  - **Headers** (for authentication, content type, etc.)

**Example (frontend using fetch):**
```javascript
// GET request with query params
fetch('http://localhost:8080/add?a=5&b=10')
  .then(res => res.json())
  .then(data => console.log(data));

// POST request with JSON body
fetch('http://localhost:8080/api/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ a: 5, b: 10 })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

### 2. **Express Receives the Request**

- **Query parameters:** Accessed via `req.query`
- **URL parameters:** Accessed via `req.params`
- **Body data:** Accessed via `req.body` (requires middleware like `express.json()`)

**Example:**
```javascript
// GET /add?a=5&b=10
app.get('/add', (req, res) => {
  const { a, b } = req.query; // a = '5', b = '10'
  res.json({ sum: parseInt(a) + parseInt(b) });
});

// POST /api/add with JSON body { "a": 5, "b": 10 }
app.post('/api/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ sum: a + b });
});
```

### 3. **Express Sends a Response**

- Use `res.send()` to send text or HTML.
- Use `res.json()` to send JSON data (most common for APIs).
- Use `res.status()` to set HTTP status codes.

**Examples:**
```javascript
res.send('Hello World'); // Sends plain text
res.json({ message: 'Success' }); // Sends JSON
res.status(404).json({ error: 'Not found' }); // Sends JSON with status code
```

### 4. **Frontend Receives the Response**

- The frontend receives the response and can use it to update the UI, show messages, etc.
- If the response is JSON, use `.json()` to parse it.

**Example:**
```javascript
fetch('/api/greet')
  .then(res => res.json())
  .then(data => alert(data.message)); // Shows "Hello, World!"
```

---

## Common HTTP Methods in Express

| Method | Usage Example | Description |
|--------|---------------|-------------|
| GET    | `app.get('/users', ...)` | Retrieve data from the server |
| POST   | `app.post('/users', ...)` | Send new data to the server |
| PUT    | `app.put('/users/:id', ...)` | Update existing data |
| DELETE | `app.delete('/users/:id', ...)` | Delete data |

**Examples:**
```javascript
// GET: Fetch all users
app.get('/users', (req, res) => {
  res.json(usersArray);
});

// POST: Add a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  usersArray.push(newUser);
  res.status(201).json(newUser);
});

// PUT: Update a user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  // update logic here
  res.json({ message: `User ${id} updated` });
});

// DELETE: Remove a user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  // delete logic here
  res.json({ message: `User ${id} deleted` });
});
```

---

## Summary

Express.js makes it easy to build web servers and APIs in Node.js. We use it to create RESTful endpoints, handle different HTTP methods, and manage middleware for parsing data and handling requests. The frontend communicates with Express using HTTP requests, and Express responds with data (usually JSON) that the frontend can use to update the UI.

...

## Ways Express Receives Data from the Frontend

Express can receive data from the frontend in several ways. Here are the 6 most common methods, with examples for each:

### 1. **Query Parameters**
- **Frontend sends:**  
  `GET http://localhost:8080/add?a=5&b=10`
- **Express receives:**  
  ```javascript
  app.get('/add', (req, res) => {
    // req.query: { a: '5', b: '10' }
    const { a, b } = req.query;
    res.json({ sum: parseInt(a) + parseInt(b) });
  });
  ```

### 2. **URL Parameters**
- **Frontend sends:**  
  `GET http://localhost:8080/user/123`
- **Express receives:**  
  ```javascript
  app.get('/user/:id', (req, res) => {
    // req.params: { id: '123' }
    const { id } = req.params;
    res.json({ userId: id });
  });
  ```

### 3. **Request Body (JSON)**
- **Frontend sends:**  
  ```javascript
  fetch('http://localhost:8080/api/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a: 5, b: 10 })
  });
  ```
- **Express receives:**  
  ```javascript
  app.use(express.json()); // Middleware required!
  app.post('/api/add', (req, res) => {
    // req.body: { a: 5, b: 10 }
    const { a, b } = req.body;
    res.json({ sum: a + b });
  });
  ```

### 4. **Request Headers**
- **Frontend sends:**  
  ```javascript
  fetch('http://localhost:8080/secret', {
    headers: { 'x-api-key': 'my-secret-key' }
  });
  ```
- **Express receives:**  
  ```javascript
  app.get('/secret', (req, res) => {
    // req.headers['x-api-key']
    const apiKey = req.headers['x-api-key'];
    res.json({ receivedKey: apiKey });
  });
  ```

### 5. **Form Data (URL-encoded or multipart)**
- **Frontend sends (HTML form):**
  ```html
  <form action="/login" method="POST">
    <input name="username" />
    <input name="password" type="password" />
    <button type="submit">Login</button>
  </form>
  ```
- **Express receives:**  
  ```javascript
  app.use(express.urlencoded({ extended: true })); // Middleware required!
  app.post('/login', (req, res) => {
    // req.body: { username: '...', password: '...' }
    const { username, password } = req.body;
    res.json({ username, password });
  });
  ```

### 6. **Raw URL (`req.url`)**
- **What it is:**  
  `req.url` gives you the full URL path (including query string) of the incoming request as a string. It does **not** parse or extract data.
- **Frontend sends:**  
  `GET http://localhost:8080/test?x=1&y=2`
- **Express receives:**  
  ```javascript
  app.get('/test', (req, res) => {
    // req.url: "/test?x=1&y=2"
    res.send(`You requested: ${req.url}`);
  });
  ```
- **Note:**  
  Use `req.url` for logging or custom parsing. For structured data, prefer `req.query`, `req.params`, or `req.body`.

---

**Summary Table:**

| Method           | How Frontend Sends           | How Express Receives         |
|------------------|-----------------------------|------------------------------|
| Query Params     | `/add?a=5&b=10`             | `req.query`                  |
| URL Params       | `/user/123`                 | `req.params`                 |
| Body (JSON)      | `fetch(..., body: JSON)`    | `req.body` (with middleware) |
| Headers          | `fetch(..., headers: {...})`| `req.headers`                |
| Form Data        | HTML form POST              | `req.body` (with middleware) |
| Raw URL          | `/test?x=1&y=2`             | `req.url`                    |

These methods allow Express to handle almost any kind of data sent from the frontend!