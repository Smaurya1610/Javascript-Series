# 📘 DOM Notes (Jo tumne practice kiya hai)

---

# 1. document.querySelector()

👉 Sirf **pehla matching element** return karta hai.

### Password Input Select

```javascript
// Password type wale input ko select karega
document.querySelector('input[type="password"]')
```

### First Child `<p>`

```javascript
// Jo p tag apne parent ka first child hai usko select karega
document.querySelector('p:first-child')
```

### `<ul>` Select

```javascript
// Page ka pehla ul select hoga
const myullist = document.querySelector('ul')
```

---

# 2. Parent ke andar element select karna

```javascript
// ul ke andar ka pehla li select karega
myullist.querySelector('li')
```

Output

```html
<li>...</li>
```

Store karna

```javascript
// li ko variable me store kar diya
const green = myullist.querySelector('li')
```

---

# 3. CSS Change (style)

## Background Color

```javascript
// Background Green kar diya
green.style.backgroundColor = "green"
```

---

## Border Radius

```javascript
// Corners Round kar diye
green.style.borderRadius = "15px"
```

---

## Width

```javascript
// Width 50% kar di
green.style.width = "50%"
```

Width Change

```javascript
// Width change karke 10% kar di
green.style.width = "10%"
```

---

## ❌ Galat

```javascript
green.padding = "20px"
```

Reason:
> Padding hamesha **style** ke through lagti hai.

## ✅ Sahi

```javascript
green.style.padding = "20px"
```

---

# 4. Text Read aur Change

## Text Read

```javascript
// Element ke andar ka text dekhna
green.innerText
```

Output

```
one
```

---

## Text Change

```javascript
// Text ko one se two kar diya
green.innerText = "two"
```

---

# 5. document.querySelectorAll()

👉 Sab matching elements return karta hai.

```javascript
// Saare li select honge
document.querySelectorAll("li")
```

Output

```
NodeList(3)
```

Store

```javascript
// NodeList ko variable me store kiya
const temp = document.querySelectorAll("li")
```

---

# 6. Index se Access

NodeList Array jaisa hota hai.

Index

```
0
1
2
```

Second Element

```javascript
temp[1]
```

---

## Background Red

```javascript
temp[1].style.backgroundColor = "red"
```

---

## First Element Red

```javascript
temp[0].style.backgroundColor = "red"
```

---

## Yellow

```javascript
temp[0].style.backgroundColor = "yellow"
```

---

## Third Element Green

```javascript
temp[2].style.backgroundColor = "green"
```

---

# 7. H1 Example

```javascript
const myh1 = document.querySelectorAll("h1")
```

Output

```
NodeList(1)
```

---

## ❌ Galat

```javascript
myh1.style.color = "red"
```

Error

```
TypeError
```

Reason:
> querySelectorAll() ek NodeList return karta hai.
>
> Isliye direct style nahi laga sakte.

---

## ✅ Sahi

```javascript
// Pehla element nikalo
myh1[0].style.color = "red"
```

---

# 8. forEach() on NodeList

```javascript
temp.forEach(function(l){})
```

Meaning

> forEach NodeList ke har element par ek-ek baar chalega.

---

Background Green

```javascript
temp.forEach(function(l){

    // Har li ka background green
    l.style.backgroundColor = "green"

})
```

---

# 9. document.getElementsByClassName()

```javascript
// listitem class wale saare elements
document.getElementsByClassName("listitem")
```

Output

```
HTMLCollection(4)
```

Store

```javascript
const tempClasslist =
document.getElementsByClassName("listitem")
```

---

# 10. Direct forEach()

## ❌ Galat

```javascript
tempClasslist.forEach(function(li){

    console.log(li)

})
```

Error

```
TypeError
```

Reason

> HTMLCollection me forEach() nahi hota.

---

# 11. Array.from()

HTMLCollection ko Array me convert karta hai.

```javascript
Array.from(tempClasslist)
```

Store

```javascript
const myconvertedarray =
Array.from(tempClasslist)
```

Ab ye Array ban gaya hai.

---

# 12. forEach() on Array

```javascript
myconvertedarray.forEach(function(li){

    // Sabka text orange
    li.style.color = "orange"

})
```

---

# Difference

## querySelector()

✔ Sirf pehla matching element return karta hai.

Example

```javascript
document.querySelector("li")
```

---

## querySelectorAll()

✔ Sab matching elements return karta hai.

Return Type

```
NodeList
```

✔ forEach() support karta hai.

Example

```javascript
document.querySelectorAll("li")
```

---

## getElementsByClassName()

✔ Class ke saare elements return karta hai.

Return Type

```
HTMLCollection
```

❌ Direct forEach() support nahi karta.

Example

```javascript
document.getElementsByClassName("listitem")
```

---

## Array.from()

✔ HTMLCollection ko Array me convert karta hai.

Example

```javascript
const arr =
Array.from(tempClasslist)
```

Ab Array ban gaya.

```javascript
arr.forEach(function(li){

    li.style.color = "orange"

})
```

---

# ⭐ Yaad Rakhne Ki Trick

✅ querySelector()
> Pehla Element

✅ querySelectorAll()
> NodeList
> forEach() ✔

✅ getElementsByClassName()
> HTMLCollection
> forEach() ❌

✅ Array.from()
> HTMLCollection ➜ Array

✅ style
> CSS change karne ke liye

✅ innerText
> Text Read / Change