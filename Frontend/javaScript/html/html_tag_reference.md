
# HTML Complete Reference Guide

This document explains commonly used HTML tags, their attributes, and how they work, with usage examples.

## 1. `<!DOCTYPE html>`
- Declares the document type.
```html
<!DOCTYPE html>
```

## 2. `<html>`
- Root of HTML document.
```html
<html lang="en">
```

## 3. `<head>`
- Contains metadata.
```html
<head> ... </head>
```

## 4. `<meta>`
- Defines metadata.
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="HTML Reference Guide">
```

## 5. `<title>`
- Sets page title.
```html
<title>My Website</title>
```

## 6. `<link>`
- Link external resources.
```html
<link rel="stylesheet" href="styles.css">
```

## 7. `<style>`
- Embed internal CSS.
```html
<style>
  body { background-color: #fff; }
</style>
```

## 8. `<script>`
- Embed JS.
```html
<script>
  alert("Hello");
</script>
```

## 9. `<body>`
- Content container.
```html
<body> ... </body>
```

---

## Text Formatting Tags

### Headings `<h1>` to `<h6>`
```html
<h1>Main Title</h1>
<h6>Smallest Heading</h6>
```

### Paragraph `<p>`
```html
<p>This is a paragraph.</p>
```

### Line Break `<br>`
```html
Line 1<br>Line 2
```

### Horizontal Rule `<hr>`
```html
<hr>
```

### Bold `<strong>`, `<b>`
```html
<strong>Important</strong> <b>Bold</b>
```

### Italic `<em>`, `<i>`
```html
<em>Emphasis</em> <i>Italic</i>
```

### Underline `<u>`
```html
<u>Underlined</u>
```

### Highlight `<mark>`
```html
<mark>Highlighted</mark>
```

### Small Text `<small>`
```html
<small>Small text</small>
```

### Subscript/Superscript `<sub>`, `<sup>`
```html
H<sub>2</sub>O and x<sup>2</sup>
```

### Blockquote
```html
<blockquote>This is a quote.</blockquote>
```

### Preformatted `<pre>`
```html
<pre>
Line 1
  Line 2
</pre>
```

### Code `<code>`
```html
<code>console.log("Hello");</code>
```

### Abbreviation `<abbr>`
```html
<abbr title="Hypertext Markup Language">HTML</abbr>
```

### Deleted/Inserted `<del>`, `<ins>`
```html
<del>Old</del> <ins>New</ins>
```

---

## Lists

### Unordered `<ul>`, Ordered `<ol>`, List Item `<li>`
```html
<ul><li>Item</li></ul>
<ol><li>First</li></ol>
```

### Description List `<dl>`, `<dt>`, `<dd>`
```html
<dl>
  <dt>HTML</dt>
  <dd>Markup language</dd>
</dl>
```

---

## Links and Images

### Anchor `<a>`
```html
<a href="https://example.com" target="_blank" title="Example">Visit</a>
```

### Image `<img>`
```html
<img src="image.png" alt="Image description" width="200" height="150">
```

---

## Media Tags

### Audio and Video
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<video controls width="320" height="240">
  <source src="video.mp4" type="video/mp4">
</video>
```

---

## Tables

```html
<table>
  <caption>Example Table</caption>
  <thead><tr><th>Header</th></tr></thead>
  <tbody><tr><td>Data</td></tr></tbody>
  <tfoot><tr><td>Footer</td></tr></tfoot>
</table>
```

---

## Forms

```html
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <textarea name="msg"></textarea>
  <button type="submit">Send</button>
</form>
```

---

## Semantic Tags

```html
<header>Header</header>
<main>Main Content</main>
<article>Article</article>
<aside>Sidebar</aside>
<nav>Navigation</nav>
<footer>Footer</footer>
```

---

## Structure Tags

```html
<div class="container">Block</div>
<span>Inline</span>
```

---

## Iframes & Embed

```html
<iframe src="https://example.com" width="600" height="400"></iframe>
<embed src="file.pdf" type="application/pdf">
```

---

## Global Attributes
- `id`, `class`, `style`, `title`, `hidden`, `tabindex`, `contenteditable`, `draggable`, `data-*`

```html
<p id="para1" class="text" style="color:blue;" title="Info" hidden data-info="sample">Text</p>
```

---

## Events

```html
<button onclick="alert('Clicked!')">Click Me</button>
<input type="text" onchange="console.log('Changed')">
```

---

This guide covers most HTML tags and how to use them. Use it as a reference while learning and building projects.
