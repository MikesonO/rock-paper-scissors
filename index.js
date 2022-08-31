let player1 = 0;
let player2 = 0;
let round = 1;
let playerSelection = null;
let computerSelection = null;


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

option = document.querySelectorAll(".rps-btn")
option.forEach(button => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    if (playerSelection === "rock") {
      console.log("rock");
    } else if (playerSelection === "paper") {
      console.log("paper");
    } else if (playerSelection === "scissors") {
      console.log("scissors");
    }
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    game();
  })
});

function playRound(Player1, Player2) {

  if (playerSelection == computerSelection) {
    return "Tie!"
  } else if (playerSelection == "rock") { //Player1 - ROCK
    if (computerSelection == "paper") {
      player2++;
      return "You Lose! Paper beats Rock"
    } else if (computerSelection == "scissors") {
      player1++;
      return "You Win! Rock beats Scissors"
    }
  } else if (playerSelection == "paper") { //Player1 - PAPER
    if (computerSelection == "rock") {
      player1++;
      return "You Win! Paper beats Rock"
    } else if (computerSelection == "scissors") {
      player2++;
      return "You Lose! Scissors beats Paper"
    }
  } else if (playerSelection == "scissors") { //Player1 - SCISSORS
    if (computerSelection == "rock") {
      player2++;
      return "You Lose! Rock beats Scissors"
    } else if (computerSelection == "paper") {
      player1++;
      return "You Win! Scissors beats Paper"
    }
  }
}

function gameReset(){
  player1 = 0;
  player2 = 0;
  round = 1;
}

function game() {
  console.log(`Round ${round++}`);
  console.log(playRound(playerSelection, computerSelection));
  console.log(`Player 1 score: ${player1}`);
  console.log(`Player 2 score: ${player2}`);

  if (player1 === 5){
    console.log("You win the game!");
    gameReset();
  } else if (player2 === 5){
    console.log ("You lose the game!");
    gameReset();
  } 



  // if (player1 > player2) {
  //   console.log("You win the game!");
  // } else if (player2 > player1) {
  //   console.log("You lose the game!");
  // } else {
  //   console.log("No Contest!");
  // }
}