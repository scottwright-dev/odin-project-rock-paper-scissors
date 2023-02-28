const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playerSelection = "paper";
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
