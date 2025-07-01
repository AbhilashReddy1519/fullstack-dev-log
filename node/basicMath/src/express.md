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

## Summary

Express.js makes it easy to build web servers and APIs in Node.js. We will use it to create RESTful endpoints, handle different HTTP methods, and manage middleware for