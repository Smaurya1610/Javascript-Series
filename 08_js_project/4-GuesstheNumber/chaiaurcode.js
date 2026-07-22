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
