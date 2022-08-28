
function getComputerChoice(){

  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1){
    return "Rock";
  } else if (randomChoice === 2){
    return "Paper";
  } else if (randomChoice === 3){
    return "Scissors"
  }
}

console.log(getComputerChoice());
