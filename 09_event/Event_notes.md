# JavaScript Events Notes
```Javascript
// JavaScript is a sequential language (runs line by line).
// But events do not execute sequentially.
// They execute only when the user performs an action.

// Examples of Events
// Click
// Double Click
// Key Press
// Mouse Move
// Scroll
// Resize
// Form Submit
// Page Load
```
```
// ===========================================================
// Ways to Add Events
// ===========================================================
```
```Javascript
// 1. Inline HTML (Not Recommended)
 <button onclick="alert('Hello')">Click</button>

// Problems:
// • Mixes HTML and JavaScript
// • Difficult to maintain
// • Only one event can be used

// -----------------------------------------------------------
```
```Javascript
// 2. DOM Property

element.onclick = function(){
    console.log("Clicked");
}

// Problems:
// • Only one event handler can exist.
// • If another onclick is assigned,
//   the previous one is overwritten.

// -----------------------------------------------------------
```
```Javascript
// 3. addEventListener()  (Best Method)

// Advantages:
// ✔ Multiple event listeners
// ✔ Better control
// ✔ Supports Bubbling & Capturing
// ✔ Can remove listeners
// ✔ Recommended method

// Syntax

element.addEventListener(event, callback, options);

// Example

button.addEventListener("click", function(){

});

// OR

button.addEventListener("click", myFunction);

// Parameters

// event
// Type of event
// Example:
// click
// dblclick
// keydown
// keyup
// mouseover

// callback
// Function that runs when event occurs.

// options
// true  -> Capturing
// false -> Bubbling (Default)
```
```Javascript
// ===========================================================
// Event Object (e)
// ===========================================================

// Every event listener receives an Event Object.

// Example

button.addEventListener("click",function(e){

    console.log(e);

});

// Event Object stores complete information
// about the current event.
```
```Javascript
// ===========================================================
// Important Event Properties
// ===========================================================
```
```Javascript
// type
// Returns event type.
// Example:
// click
// keydown

e.type

// -----------------------------------------------------------
```
```Javascript
// target
// Returns the element on which
// the event actually occurred.

e.target

// -----------------------------------------------------------
```
```Javascript
// currentTarget
// Returns the element on which
// event listener is attached.

e.currentTarget

// -----------------------------------------------------------
```
```Javascript
// timeStamp
// Returns the time when event occurred.

e.timeStamp

// -----------------------------------------------------------
```
```Javascript
// defaultPrevented
// Returns true if preventDefault()
// has already been called.

e.defaultPrevented

// -----------------------------------------------------------
```
```Javascript
// clientX
// Mouse X position inside browser.

e.clientX

// -----------------------------------------------------------
```
```Javascript
// clientY
// Mouse Y position inside browser.

e.clientY

// -----------------------------------------------------------
```
```Javascript
// screenX
// Mouse X position on monitor.

e.screenX

// -----------------------------------------------------------
```
```Javascript
// screenY
// Mouse Y position on monitor.

e.screenY

// -----------------------------------------------------------
```
```Javascript
// altKey
// Returns true if Alt key is pressed.

e.altKey

// -----------------------------------------------------------
```
```Javascript
// ctrlKey
// Returns true if Ctrl key is pressed.

e.ctrlKey

// -----------------------------------------------------------
```
```Javascript
// shiftKey
// Returns true if Shift key is pressed.

e.shiftKey

// -----------------------------------------------------------
```
```Javascript
// key
// Returns pressed key.

e.key

// -----------------------------------------------------------
```
```Javascript
// keyCode
// Old property (Deprecated)

e.keyCode

// Use e.key instead.

// -----------------------------------------------------------
```
```Javascript
// button
// Mouse button pressed

// 0 = Left
// 1 = Middle
// 2 = Right

e.button

// -----------------------------------------------------------
```
```Javascript
// bubbles
// Returns true if event bubbles.

e.bubbles

// -----------------------------------------------------------
```
```Javascript
// cancelable
// Returns whether preventDefault()
// can be used.

e.cancelable

// -----------------------------------------------------------
```
```Javascript
// eventPhase

// 1 = Capturing
// 2 = Target
// 3 = Bubbling

e.eventPhase
```
```Javascript
// ===========================================================
// Common Events
// ===========================================================

// Mouse Events

click
dblclick
mousedown
mouseup
mousemove
mouseover
mouseout
mouseenter
mouseleave
contextmenu

// -----------------------------------------------------------

// Keyboard Events

keydown
keyup
keypress (Deprecated)

// -----------------------------------------------------------

// Form Events

submit
change
input
focus
blur
reset

// -----------------------------------------------------------

// Window Events

load
DOMContentLoaded
resize
scroll
beforeunload

// -----------------------------------------------------------

// Clipboard Events

copy
cut
paste

// -----------------------------------------------------------

// Drag Events

drag
dragstart
dragend
dragenter
dragleave
dragover
drop

// -----------------------------------------------------------

// Touch Events

touchstart
touchmove
touchend

// ===========================================================
// Event Bubbling
// ===========================================================

// Default behaviour

// Flow

Child
   ↓
Parent
   ↓
Grand Parent

// Third parameter = false

element.addEventListener("click", fun, false);

// ===========================================================
// Event Capturing
// ===========================================================

// Flow

Grand Parent
     ↓
Parent
     ↓
Child

// Third parameter = true

element.addEventListener("click", fun, true);

// ===========================================================
// preventDefault()
// ===========================================================

// Stops browser's default action.

// Example

link.addEventListener("click",function(e){

    e.preventDefault();

});

// Example:
// Link will not open
// Form will not submit

// ===========================================================
// stopPropagation()
// ===========================================================

// Stops event from moving
// to parent elements.

child.addEventListener("click",function(e){

    e.stopPropagation();

});

// ===========================================================
// removeEventListener()
// ===========================================================

// Removes event listener.

function hello(){

}

button.addEventListener("click",hello);

button.removeEventListener("click",hello);

// Same function reference is required.

// ===========================================================
// once Option
// ===========================================================

// Event runs only one time.

button.addEventListener("click",hello,{
    once:true
});

// ===========================================================
// passive Option
// ===========================================================

// Improves performance.
// Mostly used for scroll and touch events.

window.addEventListener("scroll",handleScroll,{
    passive:true
});

// ===========================================================
// capture Option
// ===========================================================

// Same as passing true.

button.addEventListener("click",hello,{
    capture:true
});

// ===========================================================
// Event Delegation (Very Important)
// ===========================================================

// Instead of attaching listeners
// to every child element,
// attach one listener to parent.

document.querySelector("ul").addEventListener("click",function(e){

    console.log(e.target);

});

// Advantages
// • Better Performance
// • Less Memory
// • Works for dynamically created elements
```
```Javascript
// ===========================================================
// Interview Revision
// ===========================================================

// addEventListener()      -> Add Event
// removeEventListener()   -> Remove Event
// preventDefault()        -> Stop Default Action
// stopPropagation()       -> Stop Bubbling/Capturing
// target                  -> Actual Clicked Element
// currentTarget           -> Listener Element
// type                    -> Event Type
// key                     -> Pressed Key
// clientX/clientY         -> Mouse Position (Browser)
// screenX/screenY         -> Mouse Position (Screen)
// ctrlKey                 -> Ctrl Pressed
// altKey                  -> Alt Pressed
// shiftKey                -> Shift Pressed
// button                  -> Mouse Button
// timeStamp               -> Event Time
// bubbles                 -> Event Bubbles?
// eventPhase              -> Capturing / Target / Bubbling
// once                    -> Execute Only Once
// passive                 -> Better Performance
// capture                 -> Capturing Mode```