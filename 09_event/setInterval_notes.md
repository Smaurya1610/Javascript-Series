# setInterval() in JavaScript (Complete Notes)

## setInterval() kya hota hai?

`setInterval()` JavaScript ka ek built-in timer function hai jo kisi function ko **ek fixed time interval ke baad baar-baar execute** karta hai.

Agar hume koi kaam repeat karwana ho jaise:
- Har second clock update karna
- Har kuch second me data refresh karna
- Animation chalana
- Timer banana

to hum `setInterval()` ka use karte hain.

---

# Syntax

```js
setInterval(function, delay);
```

### Example:

```js
setInterval(function(){
    console.log("Hello JavaScript");
},1000);
```

Yaha:

- `function` → Wo code jo baar-baar chalega.
- `1000` → Delay time hai.
- Delay hamesha milliseconds me hota hai.

```
1000 milliseconds = 1 second
```

Output:

```
Hello JavaScript
Hello JavaScript
Hello JavaScript
...
```

Ye har 1 second ke baad execute hota rahega.

---

# setInterval kaise kaam karta hai?

Jab JavaScript me hum likhte hain:

```js
setInterval(()=>{
    console.log("Hello");
},1000);
```

To function turant execute nahi hota.

JavaScript timer ko browser ke Timer API ke paas bhej deti hai.

Flow:

```
JavaScript Code
       |
       |
       ↓
  setInterval()
       |
       |
       ↓
 Browser Timer API
       |
       |
       ↓
 1000ms wait
       |
       |
       ↓
 Callback Queue
       |
       |
       ↓
 JavaScript Execute
```

Iska matlab:
- Timer background me chalta hai.
- Jab time complete hota hai to callback function execute hota hai.

---

# JavaScript Single Thread hoti hai

JavaScript ek time par ek hi kaam execute karti hai.

Example:

```js
console.log("Start");

setInterval(()=>{
    console.log("Interval");
},1000);

console.log("End");
```

Output:

```
Start
End
Interval
Interval
Interval
```

Reason:

`setInterval()` code ko block nahi karta.

JavaScript pehle baaki code execute karti hai, phir timer complete hone par callback chalati hai.

---

# setInterval() Return Value (Interval ID)

Jab hum `setInterval()` lagate hain to ye ek unique ID return karta hai.

Example:

```js
const intervalId = setInterval(()=>{
    console.log("Running");
},1000);
```

Yaha:

```
intervalId = interval ki ID
```

Browser har interval ko ek alag ID deta hai.

Example:

```
Interval 1 → ID 1
Interval 2 → ID 2
Interval 3 → ID 3
```

Ye ID baad me interval ko stop karne ke kaam aati hai.

---

# clearInterval()

`clearInterval()` ka use `setInterval()` ko stop karne ke liye hota hai.

Syntax:

```js
clearInterval(intervalId);
```

Example:

```js
const intervalId = setInterval(()=>{
    console.log("Running");
},1000);


clearInterval(intervalId);
```

Ab interval run nahi karega.

---

# clearInterval() ko ID ki zarurat kyun hoti hai?

Kyuki ek page par multiple intervals chal sakte hain.

Example:

```js
const id1 = setInterval(task,1000);

const id2 = setInterval(task,1000);

const id3 = setInterval(task,1000);
```

Browser me:

```
id1 → Interval 1
id2 → Interval 2
id3 → Interval 3
```

Agar hume sirf id2 stop karna hai:

```js
clearInterval(id2);
```

To sirf id2 wala interval stop hoga.

---

# Scope Problem in setInterval()

Galat example:

```js
function start(){

    const intervalId = setInterval(()=>{
        console.log("Hello");
    },1000);

}


function stop(){

    clearInterval(intervalId);

}
```

Problem:

`intervalId` sirf `start()` ke andar bana hai.

Isliye `stop()` function usko access nahi kar sakta.

---

# Sahi Tarika

```js
let intervalId;


function start(){

    intervalId = setInterval(()=>{
        console.log("Hello");
    },1000);

}


function stop(){

    clearInterval(intervalId);

}
```

Ab:

```
intervalId
    |
    |
start() me value store
    |
    |
stop() me use
```

Dono functions same variable ko access kar sakte hain.

---

# Multiple Start Click Problem

Agar Start button ko baar-baar click kar diya:

```js
start();
start();
start();
```

To teen intervals ban jayenge.

Memory:

```
Interval 1 → Running
Interval 2 → Running
Interval 3 → Running
```

Lekin variable me sirf last interval ki ID save hoti hai.

Example:

```
intervalId = Interval 3
```

Jab:

```js
clearInterval(intervalId);
```

chalate hain:

```
Interval 3 → Stop
```

Lekin:

```
Interval 1 → Running
Interval 2 → Running
```

reh sakte hain.

---

# Multiple Interval ko Prevent karna

Iske liye condition lagate hain:

```js
if(!intervalId){

    intervalId = setInterval(()=>{
        console.log("Running");
    },1000);

}
```

Meaning:

"Agar interval pehle se nahi chal raha tabhi naya interval banao."

---

# ! Operator kya hota hai?

`!` ka matlab hota hai **NOT**.

Ye value ko reverse kar deta hai.

Example:

```js
!true
```

Output:

```
false
```

```js
!false
```

Output:

```
true
```

---

# !intervalId ka matlab

Starting me:

```js
let intervalId;
```

Value:

```
undefined
```

Check:

```js
!intervalId
```

Ye banega:

```
!undefined
```

Result:

```
true
```

Isliye interval start hoga.

Jab interval ban gaya:

```js
intervalId = 5;
```

Ab:

```js
!intervalId
```

Result:

```
false
```

Isliye dobara interval start nahi hoga.

---

# intervalId = null kyun karte hain?

Stop function:

```js
function stop(){

    clearInterval(intervalId);

    intervalId = null;

}
```

Pehli line interval ko stop karti hai.

Dusri line variable ko empty kar deti hai.

Taaki dobara Start click karne par naya interval ban sake.

---

# Complete Start Stop Example

```js
let intervalId;


const start = function(){

    if(!intervalId){

        intervalId = setInterval(function(){

            console.log(Date.now());

        },1000);

    }

}


const stop = function(){

    clearInterval(intervalId);

    intervalId = null;

}
```

Working:

```
Start Click
      |
      ↓
setInterval start
      |
      ↓
Every 1 second code run


Stop Click
      |
      ↓
clearInterval()
      |
      ↓
Interval stop
```

---

# setInterval() vs setTimeout()

| setInterval() | setTimeout() |
|---|---|
| Baar-baar execute hota hai | Sirf ek baar execute hota hai |
| Fixed interval par chalta hai | Delay ke baad chalta hai |
| clearInterval() se stop hota hai | clearTimeout() se stop hota hai |

---

# Real Life Example

## Digital Clock

```js
setInterval(()=>{
    let time = new Date();

    console.log(time);

},1000);
```

Har second current time update karega.

---

# Common Mistakes

## 1. Interval ID save nahi karna

Galat:

```js
setInterval(task,1000);

clearInterval(task);
```

Sahi:

```js
const id = setInterval(task,1000);

clearInterval(id);
```

---

## 2. Variable ko function ke andar banana

Agar interval ID ko bahar use karna hai to variable ko bahar declare karo.

---

## 3. Multiple intervals create karna

Start button ko baar-baar click karne se multiple intervals ban sakte hain.

Isliye interval ID ko manage karna zaroori hai.

---

# Summary

- `setInterval()` function ko repeat karta hai.
- Delay milliseconds me hota hai.
- `1000ms = 1 second`.
- Ye ek unique ID return karta hai.
- `clearInterval()` ID ki help se interval stop karta hai.
- Interval ID ko global scope me rakhna useful hota hai.
- Multiple intervals se bachne ke liye check lagana chahiye.
- `setInterval()` asynchronous way me kaam karta hai.
