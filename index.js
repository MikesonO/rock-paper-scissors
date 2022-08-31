let player1 = 0;
let player2 = 0;
let round = 1;
let playerSelection = null;
let computerSelection = null;
const option = document.querySelectorAll(".rps-btn");
const restart = document.querySelector("#restart-btn");
let player1Score = document.querySelector("#player1");
let player2Score = document.querySelector("#player2");


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

//Restart Button
restart.addEventListener("click", () =>{
  player1 = 0;
  player2 = 0;
  round = 1;
  player1Score.textContent = "Player Score: 0";
  player2Score.textContent = "Computer Score: 0";
  option.forEach(button => {
    button.disabled = false;
})

});

function editScore(){
  player1Score.textContent = `Player Score: ${player1}`
  player2Score.textContent = `Computer Score: ${player2}`
}

function disableOption() {
  option.forEach(button => {
      button.disabled = true
  })
}

function game() {
  if (player1 )

  console.log(`Round ${round++}`);
  console.log(playRound(playerSelection, computerSelection));
  editScore();

  if (player1 === 5){
    console.log("You win the game!");
    disableOption();
  } else if (player2 === 5){
    disableOption();
    console.log ("You lose the game!");
  } 



  // if (player1 > player2) {
  //   console.log("You win the game!");
  // } else if (player2 > player1) {
  //   console.log("You lose the game!");
  // } else {
  //   console.log("No Contest!");
  // }
}