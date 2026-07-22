# Project related to dom

## Project link
[click here]

# Solution code

# projecr 1
``` Javascript
console.log("sameer")
const buttons=document.querySelectorAll(".button")

const body=document.querySelector("body")
const nav=document.querySelector("nav")

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "green";
            
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "red";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "yellow";
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "blue";
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "yellow";
        }
        

    }
)
})
```

## Project 2 solution
```Javascript

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    // Select the result div
    const results = document.querySelector("#results");

    // Validate height
    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height`;
    }

    // Validate weight
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight`;
    }

    // If both inputs are valid
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi <= 18.6) {
            results.innerHTML = `Your BMI is <span>${bmi}</span> (Underweight)`;
        }

        else if (bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML = `Your BMI is <span>${bmi}</span> (Normal Weight)`;
        }

        else if (bmi >= 24.9) {
            results.innerHTML = `Your BMI is <span>${bmi}</span> (Overweight)`;
        }
    }
});

```

# Project 3 solution
```Javascript

const clock = document.getElementById('clock');

// const clock = document.querySelector('#clock');

// setInterval() repeatedly executes the function
// 1000 means 1000 milliseconds = 1 second
setInterval(function () {

    let date = new Date();;

    clock.innerHTML = date.toLocaleTimeString();

}, 1000); 
```

# Project 4 Solution
```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworHi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numguess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a valid number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a valid number less than 100");
  } else {
    preGuess.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess=== randomNumber){
    displayMessage(`you Guess it right`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is too low`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess) {
  userInput.value=""
  guessSlot.innerHTML+=`${guess}      `
  numguess++;
  remaining.innerHTML=`${10-numguess}`
}

function displayMessage(message) {
    loworHi.innerHTML=`<h2>${message}</h2>`;
 
}

function endGame() {
  userInput.value = "";               // Clear the input box
  userInput.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;

  startover.appendChild(p);

  playGame = false;
  newGame();
}

function newGame() {
 const newgameButton= document.querySelector('#newgame')
 newgameButton.addEventListener('click',function(e){
     randomNumber = parseInt(Math.random() * 100 + 1);
     preGuess=[]
     numguess=1
     guessSlot.innerHTML=""
     remaining.innerHTML=`${10-numguess}`
     userInput.removeAttribute('disabled')
     startover.removeChild(p)
    playGame=true
 })
}
```