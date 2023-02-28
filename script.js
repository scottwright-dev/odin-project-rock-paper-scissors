const choices = ["rock", "paper", "scissors"];

// arrow function to randomly select one of the three choices from array.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playerSelection = "paper";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  // check to ensure playerSelection is valid by comparing playerChoice with choices array
  if (!choices.includes(playerSelection)) {
    return `Invalid choice! Please choose either ${choices.join(", ")}.`;
  }
  // compare choices to determine winner of round
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}
