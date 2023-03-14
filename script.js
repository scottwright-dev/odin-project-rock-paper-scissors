// An array of choices available in the game
const choices = ["rock", "paper", "scissors"];

// Generate random computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

// Function that runs the game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Prompt for player choice input and remove case sensitivity
  let playerSelection = prompt(
    `Enter your choice: rock, paper, or scissors.`
  );

  // Catch when player presses cancel
  if (playerSelection === null) {
    console.log(
      "Your game has been cancelled. If you wish to play again, please refresh your browser!"
    );
    return;

    // Catch when player enters an empty string
  } else if (playerSelection === "") {
    console.log(
      "You didn't type anything! Refresh the browser then type either rock, paper or scissors."
    );

    // Restart game
    game();
    return;
  }

  // Convert player's selection to lowercase
  playerSelection = playerSelection.toLowerCase();

  // Get computer's choice
  const computerSelection = getComputerChoice();

  // Catch if player makes an invalid input
  if (!choices.includes(playerSelection)) {
    console.log(
      `Invalid choice! Please choose either ${choices.join(", ")}.`
    );

    // Restart game
    game();
    return;
  }

  // Handle tie game cases
  if (playerSelection === computerSelection) {
    console.log(
      `It's a tie! Both players chose ${playerSelection} `
    );

    // Restart game
    game();
    return;

    // Handle winning cases
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(
      `You win! ${playerSelection} beats ${computerSelection}!`
    );
    playerScore++;

    // Handle losing cases
  } else {
    console.log(
      `You lose! ${computerSelection} beats ${playerSelection}!`
    );
    computerScore++;
  }

  // Print final result of the game
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

// Call the game function to start playing
game();
