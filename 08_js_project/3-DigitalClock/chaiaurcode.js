// Select the element whose id is "clock"
const clock = document.getElementById('clock');

// Another way to select the same element
// const clock = document.querySelector('#clock');

// setInterval() repeatedly executes the function
// 1000 means 1000 milliseconds = 1 second
setInterval(function () {

    // Create a Date object containing the current date and time
    let date = new Date();

    // Print the current time in the console (optional)
    // console.log(date.toLocaleTimeString());

    // Display the current time inside the clock element
    clock.innerHTML = date.toLocaleTimeString();

}, 1000); // Execute this function every 1 second