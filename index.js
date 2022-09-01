//Variables
let player1 = 0;
let player2 = 0;
let round = 1;
let playerSelection = null;
let computerSelection = null;
const option = document.querySelectorAll(".rps-btn");
const restart = document.querySelector("#restart-btn");
let player1Score = document.querySelector("#player1");
let player2Score = document.querySelector("#player2");
let gameText = document.querySelector("#game-text");
let gameRound = document.querySelector("#game-round");

//Gets Player 2 Choice (Computer)
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return "rock";
  } else if (randomChoice === 2) {
    return "paper";
  } else if (randomChoice === 3) {
    return "scissors"
  }
}

//Rock, Paper, Scissor Buttons
option.forEach(button => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    if (playerSelection === "rock") {
      playerSelection = "rock";
    } else if (playerSelection === "paper") {
      playerSelection = "paper";
    } else if (playerSelection === "scissors") {
      playerSelection = "scissors";
    }
    computerSelection = getComputerChoice();

    game();
  })
});

//Plays 1 Round and Increments Player Score
function playRound(Player1, Player2) {

  if (playerSelection == computerSelection) {
    return "Tie!"
  } else if (playerSelection == "rock") { //Player1 - Rock
    if (computerSelection == "paper") {
      player2++;
      return "You Lose! Paper beats Rock"
    } else if (computerSelection == "scissors") {
      player1++;
      return "You Win! Rock beats Scissors"
    }
  } else if (playerSelection == "paper") { //Player1 - Paper
    if (computerSelection == "rock") {
      player1++;
      return "You Win! Paper beats Rock"
    } else if (computerSelection == "scissors") {
      player2++;
      return "You Lose! Scissors beats Paper"
    }
  } else if (playerSelection == "scissors") { //Player1 - Scissors
    if (computerSelection == "rock") {
      player2++;
      return "You Lose! Rock beats Scissors"
    } else if (computerSelection == "paper") {
      player1++;
      return "You Win! Scissors beats Paper"
    }
  }
}

//Restart Button
restart.addEventListener("click", () => {
  player1 = 0;
  player2 = 0;
  round = 1;
  player1Score.textContent = "Player Score: 0";
  player2Score.textContent = "Computer Score: 0";
  gameText.textContent = "First to 5 Points Wins!";
  gameRound.textContent = "Round: 1";
  option.forEach(button => {
    button.disabled = false;
  })

});

//Edits The Score Text
function editScore() {
  player1Score.textContent = `Player Score: ${player1}`
  player2Score.textContent = `Computer Score: ${player2}`
}

//Disables Buttons
function disableOption() {
  option.forEach(button => {
    button.disabled = true;
    removeProperty =
  })
}

//Main Game Function
function game() {
  gameRound.textContent = (`Round: ${round++}`);
  gameText.textContent = playRound(playerSelection, computerSelection);
  editScore();

  if (player1 === 5) {
    gameText.textContent = "You Win The game!";
    disableOption();
  } else if (player2 === 5) {
    disableOption();
    gameText.textContent = "You Lose The Game!";
  }
}