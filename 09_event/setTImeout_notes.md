# setTimeout() aur clearTimeout()

## setTimeout()
`setTimeout()` kisi function ko **ek fixed time (delay)** ke baad execute karta hai.

### Syntax
```js
const id = setTimeout(function, delay);
```

### Example
```js
const id = setTimeout(() => {
  console.log("Hello!");
}, 2000);
```

**Output:**  
➡️ 2 seconds baad `Hello!` print hoga.

---

## clearTimeout()
`clearTimeout()` ka use `setTimeout()` ko **cancel** karne ke liye hota hai, taaki function execute na ho.

### Syntax
```js
clearTimeout(id);
```

### Example
```js
const id = setTimeout(() => {
  console.log("Hello!");
}, 2000);

clearTimeout(id);
```

**Output:**  
➡️ Timeout cancel ho gaya, isliye kuch print nahi hoga.

---

## Summary

| Function | Kaam |
|----------|------|
| `setTimeout()` | Delay ke baad function execute karta hai. |
| `clearTimeout()` | Timeout ko cancel karta hai. |
