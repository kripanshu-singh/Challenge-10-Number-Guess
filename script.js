let ran_num = Math.floor(Math.random() * 100 + 1);

let input = document.getElementById("guessFeild");
let submit = document.getElementById("submit");
let prevGuess = document.querySelector(".prevGuess");
let remainAttempt = document.querySelector(".remainGuess");
let lowOrHigh = document.querySelector(".lowOrHigh");
let startOver = document.querySelector(".result");

// * Creating vari
let para = document.createElement("p");
let prev = [];
let numOfGuess = 1;
let playable = true;

if (playable) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = input.value;
    validate(guess);
  });
}

function validate(guess) {
  if (guess <= 0 || guess > 100 || isNaN(guess)) {
    alert("Please Enter a Number between 1 to 100");
  } else {
    prev.push(guess);
    if (numOfGuess === 6) {
      displayMessage(`Game Over! Number Was :- ${ran_num}`);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess > ran_num + 5) {
    displayMessage("Your num is TOO Big");
  } else if (guess < ran_num - 5) {
    displayMessage("Your num is TOO small");
  } else if (ran_num < guess && guess <= ran_num + 5) {
    displayMessage("Your num is Big and Too close");
  } else if (ran_num > guess && guess >= ran_num - 5) {
    displayMessage("Your num is Small and Too close");
  } else if (guess == ran_num) {
    displayMessage("You Win the Game");
    endGame();
  }
}

function displayGuess(guess) {
  input.value = "";
  prevGuess.innerHTML += `${guess}   `;
  numOfGuess++;
  remainAttempt.innerHTML = `${6 - numOfGuess}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  para.style.cursor = "pointer";
  startOver.appendChild(para);
  playable = false;
  ResetGame();
}
function ResetGame() {
  let reset = document.getElementById("newGame");
  reset.addEventListener("click", (e) => {
    ran_num = Math.floor(Math.random() * 100 + 1);
    prev = [];
    numOfGuess = 1;
    input.value = "";
    input.removeAttribute("disabled");
    prevGuess.innerHTML = "";
    remainAttempt.innerHTML = `${6 - numOfGuess}`;
    para.innerHTML = "";
    displayMessage("");
    startOver.removeChild("para");
    playable = true;
  });
}
