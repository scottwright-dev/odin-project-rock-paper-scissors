const choices = ["rock", "paper", "scissors"];

// generate random computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

function game() {
  let playerScore = 0;
  let computerScore = 0;
  // play 5 rounds
  for (let roundCount = 1; roundCount <= 5; roundCount++) {
    // prompt for player choice input and remove case sensitivity
    let playerSelection = prompt(
      `Enter your choice: rock, paper, or scissors. Round ${roundCount} of 5.`
    );
    // catch when player presses cancel
    if (playerSelection === null) {
      console.log(
        "Your game has been cancelled. If you wish to play again, please refresh your browser!"
      );
      return;
      // catch when player enters an empty string
    } else if (playerSelection === "") {
      console.log(
        "You didn't type anything! Refresh the browser then type either rock, paper or scissors."
      );
      // do not count as a round
      roundCount--;
      continue;
    }
    playerSelection = playerSelection.toLowerCase();
    // get computer's choice
    const computerSelection = getComputerChoice();
    // catch if player makes an invalid input
    if (!choices.includes(playerSelection)) {
      console.log(
        `Invalid choice! Please choose either ${choices.join(", ")}.`
      );
      // do not count as a round
      roundCount--;
      continue;
    }
    // tie game cases
    if (playerSelection === computerSelection) {
      console.log(
        `Round ${roundCount}: It's a tie! Both players chose ${playerSelection} `
      );
      // winning cases
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      console.log(
        `Round ${roundCount}: You win! ${playerSelection} beats ${computerSelection}!`
      );
      playerScore++;
      // losing cases
    } else {
      console.log(
        `Round ${roundCount}: You lose! ${computerSelection} beats ${playerSelection}!`
      );
      computerScore++;
    }
  }
  // print final result of the game
  if (playerScore > computerScore) {
    console.log(
      `Result: You won the game! Congratulations! The final score was: you ${playerScore} computer: ${computerScore}.`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Result: You lost the game! The final score was: you ${playerScore} computer: ${computerScore}.`
    );
  } else {
    console.log(
      "Result: It's a tie game! Try again to see if you can beat the computer!"
    );
  }
}

game();
