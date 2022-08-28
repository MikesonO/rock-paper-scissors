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

console.log(getComputerChoice());


function playerSelection(playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()) {

  if (playerChoice === "rock") {
    return "rock";
  } else if (playerChoice === "paper") {
    return "paper";
  } else if (playerChoice === "scissors") {
    return "scissors";
  } else {
    alert("This choice is invalid!");
    return playerSelection();
  }

}

console.log(playerSelection());