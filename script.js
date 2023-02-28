const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playerSelection = prompt(
  "Enter your choice: rock, paper, or scissors"
).toLowerCase();
// catch when player presses cancel
if (playerSelection === null) {
  console.log(
    "Your game has been cancelled. If you wish to play again, please refresh your browser!"
  );
  // catch when player enters an empty string
} else if (playerSelection === "") {
  console.log(
    "You didn't type anything! Please type either rock, paper or scissors."
  );
} else {
  const computerSelection = getComputerChoice();

  function playRound(playerSelection, computerSelection) {
    // catch when player makes invalid choice
    if (!choices.includes(playerSelection)) {
      return `Invalid choice! Please choose either ${choices.join(", ")}.`;
    }
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

  const roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
}
