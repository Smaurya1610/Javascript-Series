# JavaScript – 
Synchronous, Single Threaded & Event Loop
``` Javascript
1. JavaScript is Synchronous

JavaScript by default Synchronous language hai.

Meaning:

Code line by line execute hota hai.
Ek line complete hone ke baad hi next line execute hoti hai.
Example
console.log("First");

console.log("Second");

console.log("Third");

Output
First
Second
Third


Flow

Line 1
   ↓
Complete
   ↓
Line 2
   ↓
Complete
   ↓
Line 3
```
``` Javascript
2. JavaScript is Single Threaded

JavaScript ke paas sirf ek Call Stack (Thread) hota hai.

Isliye JavaScript ek time par ek hi kaam kar sakti hai.

          JavaScript

        ┌────────────┐
        │ One Thread │
        └────────────┘
               │
               ▼
        One Task at a Time


Agar ek task chal raha hai to doosra task wait karega.
```
``` Javascript
3. Execution Context

Jab bhi JavaScript code run hota hai to Execution Context create hota hai.

Execution Context decide karta hai:

Variables kahan store honge.
Functions kaise execute honge.
Current code kis order me chalega.

Simple words me:

JavaScript code ko execute karne ke liye jo environment banta hai usse Execution Context kehte hain.
```
``` Javascript
4. Call Stack

Saare functions Call Stack me execute hote hain.

Example

function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();


Call Stack

          Call Stack

        ┌──────────────┐
        │   three()    │
        ├──────────────┤
        │    two()     │
        ├──────────────┤
        │    one()     │
        ├──────────────┤
        │ Global Code  │
        └──────────────┘


Execution

Push Global

↓

Push one()

↓

Push two()

↓

Push three()

↓

Console.log()

↓

Pop three()

↓

Pop two()

↓

Pop one()

↓

Stack Empty
```
``` Javascript
5. Blocking Code

Blocking Code matlab

Jab tak current task complete nahi hota tab tak next task start nahi hota.

Example

const fs = require("fs");

const data = fs.readFileSync("test.txt");

console.log(data.toString());

console.log("Finished");


Flow

Read File

↓

Wait...

↓

File Complete

↓

Next Line


Yahan poora JavaScript ruk jata hai.

Isi ko Blocking Code kehte hain.
```
```Javascript
6. Non-Blocking Code

Non Blocking code me JavaScript wait nahi karti.

Wo task browser ya Node.js ko de deti hai aur next line execute karti rehti hai.

Example

const fs = require("fs");

fs.readFile("test.txt", () => {
    console.log("File Read");
});

console.log("Finished");


Output

Finished

File Read


Flow

Read File

↓

Node.js Handle Karega

↓

Next Line Execute

↓

File Complete

↓

Callback Execute
```
```
JavaScript Runtime

JavaScript akeli asynchronous nahi hai.

Browser ya Node.js uski help karte hain.

Complete Architecture

                     JavaScript Runtime


                    ┌───────────────────┐
                    │    JavaScript     │
                    │      Engine       │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │    Call Stack     │
                    └─────────┬─────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   setTimeout()          fetch()              DOM Events
                                             addEventListener()

                              │
                              ▼
                    ┌───────────────────┐
                    │ Browser / Node    │
                    │ Web APIs          │
                    └─────────┬─────────┘
                              │
             ┌────────────────┴──────────────┐
             │                               │
             ▼                               ▼
      Promise Resolved                 Callback Ready
             │                               │
             ▼                               ▼
   Microtask Queue                   Task (Callback) Queue
 (High Priority Queue)               (Normal Queue)

             │                               │
             └──────────────┬────────────────┘
                            ▼
                    Event Loop Checks

             Is Call Stack Empty ?

                       Yes
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
Microtask Queue First          Then Task Queue

                        │
                        ▼
                    Call Stack
```
```Javascript
Queue Priority
Highest Priority

Call Stack

↓

Microtask Queue
(Promise, queueMicrotask)

↓

Task Queue
(setTimeout, setInterval, DOM Events)


Rule

Event Loop hamesha pehle Microtask Queue ko empty karta hai.

Uske baad hi Task Queue execute hoti hai.

Promise Queue (Microtask Queue)

Promise callbacks normal queue me nahi jaate.

Ye Microtask Queue me store hote hain.

Example

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Hello");


Output

Hello

Promise

fetch()

fetch() network request bhejta hai.

Jab response aata hai to Promise resolve hota hai.

Uska .then() callback Microtask Queue me jata hai.

Flow
```

```Javascript
fetch()

↓

Browser Web API

↓

Network Request

↓

Response

↓

Promise Resolve

↓

Microtask Queue

↓

Event Loop

↓

Call Stack

↓

.then() Execute
```
```Javascript

Interview Points
JavaScript is Single Threaded.
JavaScript is Synchronous by default.
JavaScript executes code line by line.
JavaScript has only one Call Stack.
Browser / Node.js provide Web APIs.
fetch() returns a Promise.
Promise callbacks go to the Microtask Queue.
setTimeout() callbacks go to the Task Queue.
Event Loop first empties the Microtask Queue, then processes the Task Queue.
Because of this, Promise callbacks always execute before setTimeout() callbacks (when both are ready).```