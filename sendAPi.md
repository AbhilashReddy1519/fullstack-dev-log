# React API Examples: Fetch vs Axios

This guide provides practical examples of using **Fetch API** and **Axios** in React for performing **GET**, **POST**, **PUT/UPDATE**, and **DELETE** requests. It covers usage with **body**, **params**, **query**, and **headers**.

---

## 1. Setup in React

Before starting, ensure you have Axios installed:

```bash
npm install axios
```

Import it in your component:

```js
import axios from 'axios';
```

---

## 2. GET Request

### Using Fetch

```js
useEffect(() => {
  fetch('https://api.example.com/items')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}, []);
```

### Using Axios

```js
useEffect(() => {
  axios.get('https://api.example.com/items')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}, []);
```

---

## 3. POST Request (with body)

### Using Fetch

```js
const addItem = () => {
  fetch('https://api.example.com/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Item A', price: 100 })
  })
  .then(res => res.json())
  .then(data => console.log(data));
};
```

### Using Axios

```js
const addItem = () => {
  axios.post('https://api.example.com/items', {
    name: 'Item A',
    price: 100
  })
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
};
```

---

## 4. PUT/UPDATE Request

### Using Fetch

```js
const updateItem = (id) => {
  fetch(`https://api.example.com/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Updated Name' })
  })
  .then(res => res.json())
  .then(data => console.log(data));
};
```

### Using Axios

```js
const updateItem = (id) => {
  axios.put(`https://api.example.com/items/${id}`, {
    name: 'Updated Name'
  })
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
};
```

---

## 5. DELETE Request

### Using Fetch

```js
const deleteItem = (id) => {
  fetch(`https://api.example.com/items/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => console.log('Deleted'));
};
```

### Using Axios

```js
const deleteItem = (id) => {
  axios.delete(`https://api.example.com/items/${id}`)
    .then(res => console.log('Deleted'))
    .catch(err => console.error(err));
};
```

---

## 6. Sending Query Parameters

### Using Fetch

```js
fetch('https://api.example.com/items?sort=price&order=desc')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Using Axios

```js
axios.get('https://api.example.com/items', {
  params: {
    sort: 'price',
    order: 'desc'
  }
})
.then(res => console.log(res.data));
```

---

## 7. Sending Headers

### Using Fetch

```js
fetch('https://api.example.com/secure-data', {
  headers: {
    'Authorization': 'Bearer your_token_here'
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

### Using Axios

```js
axios.get('https://api.example.com/secure-data', {
  headers: {
    'Authorization': 'Bearer your_token_here'
  }
})
.then(res => console.log(res.data));
```

---

## Conclusion

| Feature        | Fetch    | Axios        |
| -------------- | -------- | ------------ |
| Base support   | Built-in | External lib |
| Simpler syntax | ❌        | ✅            |
| Interceptors   | ❌        | ✅            |
| Automatic JSON | ❌        | ✅            |

* Use **Fetch** for basic or lightweight apps.
* Use **Axios** for advanced use cases (interceptors, progress bars, defaults).

---

# React: Receiving & Handling API Response (Fetch vs Axios)

This guide shows how to **receive**, **handle**, and **process** API responses using both **Fetch API** and **Axios** in React. Examples include reading:

* JSON data
* Status codes
* Error messages
* Nested properties
* Data transformations

---

## 1. Basic Response Handling

### Fetch

```js
fetch('https://api.example.com/items')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
```

### Axios

```js
axios.get('https://api.example.com/items')
  .then(response => {
    console.log('Data:', response.data);
    console.log('Status:', response.status);
  })
  .catch(error => console.error('Error:', error));
```

---

## 2. Accessing Nested Data

### JSON Response Example:

```json
{
  "status": "success",
  "data": {
    "items": [
      { "id": 1, "name": "Item A" },
      { "id": 2, "name": "Item B" }
    ]
  }
}
```

### Fetch

```js
fetch('https://api.example.com/items')
  .then(res => res.json())
  .then(json => {
    const items = json.data.items;
    console.log('Items:', items);
  });
```

### Axios

```js
axios.get('https://api.example.com/items')
  .then(res => {
    const items = res.data.data.items;
    console.log('Items:', items);
  });
```

---

## 3. Error Handling (Network & Server)

### Fetch

```js
fetch('https://api.example.com/invalid-url')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    return res.json();
  })
  .catch(err => console.error('Fetch Error:', err.message));
```

### Axios

```js
axios.get('https://api.example.com/invalid-url')
  .catch(err => {
    if (err.response) {
      console.error('Server Error:', err.response.status);
    } else {
      console.error('Network Error:', err.message);
    }
  });
```

---

## 4. Working with `async/await`

### Fetch

```js
const getItems = async () => {
  try {
    const res = await fetch('https://api.example.com/items');
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    console.log('Items:', data);
  } catch (error) {
    console.error(error.message);
  }
};
```

### Axios

```js
const getItems = async () => {
  try {
    const res = await axios.get('https://api.example.com/items');
    console.log('Items:', res.data);
  } catch (err) {
    console.error(err.message);
  }
};
```

---

## 5. Accessing Headers from Response

### Fetch

```js
fetch('https://api.example.com/items')
  .then(res => {
    console.log('Headers:', res.headers.get('Content-Type'));
    return res.json();
  });
```

### Axios

```js
axios.get('https://api.example.com/items')
  .then(res => {
    console.log('Headers:', res.headers['content-type']);
  });
```

---

## 6. Transforming Response Data

### Fetch

```js
fetch('https://api.example.com/items')
  .then(res => res.json())
  .then(data => {
    const names = data.items.map(item => item.name);
    console.log('Names:', names);
  });
```

### Axios

```js
axios.get('https://api.example.com/items')
  .then(res => {
    const names = res.data.items.map(item => item.name);
    console.log('Names:', names);
  });
```

---

## Summary Table

| Feature                    | Fetch                   | Axios                |
| -------------------------- | ----------------------- | -------------------- |
| JSON Parsing               | Manual                  | Auto                 |
| Status/Error Handling      | Manual with `.ok` check | Built-in via `catch` |
| Headers Access             | Manual via `.get()`     | Simple object access |
| Async/Await Support        | ✅                       | ✅                    |
| Request/Response Intercept | ❌                       | ✅                    |
| Automatic Data Transform   | ❌                       | ✅                    |

---

Use **Axios** for simpler syntax and better default error handling. Use **Fetch** for lightweight needs or to avoid external dependencies.


