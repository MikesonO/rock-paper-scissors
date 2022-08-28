player1 = 0;
player2 = 0;

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

function getPlayerChoice(playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()) {

  if (playerChoice === "rock") {
    return "rock";
  } else if (playerChoice === "paper") {
    return "paper";
  } else if (playerChoice === "scissors") {
    return "scissors";
  } else {
    alert("This choice is invalid!");
    return getPlayerChoice();
  }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(Player1, Player2) {

  if (playerSelection == computerSelection) {
    return "Tie!"
  } else if (playerSelection == "rock") { //Player1 - ROCK
    if (computerSelection == "paper") {
      player2 ++;
      return "You Lose! Paper beats Rock"
    } else if (computerSelection == "scissors") {
      player1 ++;
      return "You Win! Rock beats Scissors"
    }
  } else if (playerSelection == "paper") { //Player1 - PAPER
    if (computerSelection == "rock") {
      player1 ++;
      return "You Win! Paper beats Rock"
    } else if (computerSelection == "scissors") {
      player2 ++;
      return "You Lose! Scissors beats Paper"
    }
  } else if (playerSelection == "scissors") { //Player1 - SCISSORS
    if (computerSelection == "rock") {
      player2 ++;
      return "You Lose! Rock beats Scissors"
    } else if (computerSelection == "paper") {
      player1 ++;
      return "You Win! Scissors beats Paper"
    }
  }

}

console.log(playRound(playerSelection, computerSelection));
console.log (player1);
console.log (player2);