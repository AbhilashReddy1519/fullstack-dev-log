
# CSS Complete Reference Guide

This guide covers all major **CSS selectors**, **properties**, and **animation techniques** for quick revision and deep understanding.

---

## 🔹 Basic Selectors

| Selector        | Description                        | Example |
|-----------------|------------------------------------|---------|
| `*`             | Universal selector                 | `* {}` |
| `element`       | Selects all elements of that type  | `p {}` |
| `.class`        | Selects elements with a class      | `.box {}` |
| `#id`           | Selects an element with an ID      | `#header {}` |
| `element, element` | Group selector                | `h1, h2 {}` |

---

## 🔸 Combinator Selectors

| Selector        | Description                                      | Example |
|-----------------|--------------------------------------------------|---------|
| `A B`           | Descendant of A                                  | `div p {}` |
| `A > B`         | Direct child                                     | `ul > li {}` |
| `A + B`         | Immediate sibling                                | `h1 + p {}` |
| `A ~ B`         | General sibling (all B after A)                  | `h1 ~ p {}` |

---

## 🔹 Attribute Selectors

```css
a[href] { color: blue; }
input[type="text"] { border: 1px solid; }
a[href^="https"] { color: green; }
a[href$=".pdf"] { font-weight: bold; }
a[href*="google"] { color: red; }
```

---

## 🔸 Pseudo Classes

```css
a:hover { color: red; }
input:focus { border: 2px solid blue; }
li:first-child { font-weight: bold; }
li:last-child { font-style: italic; }
:nth-child(2n) { background: #eee; }
:not(.active) { opacity: 0.5; }
```
Common pseudo-classes: `:hover`, `:focus`, `:active`, `:visited`, `:nth-child()`, `:not()`, `:checked`, `:disabled`

---

## 🔹 Pseudo Elements

```css
p::first-line { font-weight: bold; }
p::first-letter { font-size: 200%; }
::before, ::after { content: ""; display: block; }
```

---

## 🎨 CSS Properties

### Box Model
```css
margin, padding, border, width, height, box-sizing
```

### Typography
```css
font-family, font-size, font-style, font-weight, line-height, text-align, text-decoration, text-transform, letter-spacing, word-spacing, color
```

### Backgrounds & Borders
```css
background-color, background-image, background-size, background-repeat, background-position, border-radius, border
```

### Display & Positioning
```css
display, position (static, relative, absolute, fixed, sticky), top, right, bottom, left, z-index, float, clear, overflow
```

### Flexbox
```css
display: flex;
flex-direction, justify-content, align-items, align-content, flex-wrap, flex-grow, flex-shrink, gap
```

### Grid
```css
display: grid;
grid-template-columns, grid-template-rows, grid-gap, grid-column, grid-row, place-items
```

### Transitions
```css
transition-property, transition-duration, transition-timing-function, transition-delay

/* Example */
.box {
  transition: all 0.3s ease-in-out;
}
```

### Transforms
```css
transform: translate(), rotate(), scale(), skew(), matrix()

/* Example */
.transform-box {
  transform: rotate(45deg) scale(1.2);
}
```

### Animations
```css
animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state

/* Example */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.fade-box {
  animation: fadeIn 2s ease-in-out forwards;
}
```

### Other Useful Properties
```css
visibility, opacity, cursor, box-shadow, text-shadow, object-fit, pointer-events, user-select, filter, backdrop-filter, clip-path
```

---

## 🎯 Media Queries

```css
@media (max-width: 768px) {
  body { font-size: 14px; }
}
```

---

## 📌 Units

- Absolute: `px`, `cm`, `mm`, `in`
- Relative: `%`, `em`, `rem`, `vw`, `vh`

---

## 📚 Best Practices

- Use semantic HTML + class-based styling.
- Keep selectors short and specific.
- Use shorthand properties where possible.
- Prefer `rem`/`em` for font sizes and spacing.

---

This cheat sheet is ideal for beginners and intermediate developers looking to revise CSS quickly.
