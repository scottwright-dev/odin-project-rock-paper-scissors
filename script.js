// An array of choices available in the game
const choices = ["rock", "paper", "scissors"];

// Generate random computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

// Set initial scores
let playerScore = 0;
let computerScore = 0;
let roundCount = 1;

// event listener buttons
const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
    playRound("rock");
  }
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
    playRound("paper");
  }
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
    playRound("scissors");
  }
});

// event listener for the play Again button
const playAgainButton = document.querySelector('#playAgainButton');
playAgainButton.addEventListener("click", () => {
  // Reset game state
  playerScore = 0;
  computerScore = 0;
  roundCount = 1;

  // Clear previous results off the screen
  let resultsDiv = document.querySelector('#results');
  resultsDiv.innerHTML = "";
});

// Function that plays a game round
function playRound(playerSelection) {
  // Get computer's choice
  const computerSelection = getComputerChoice();

  // Print round result to screen
  let resultsDiv = document.querySelector('#results');
  // declare variable to store round result string
  let roundResult;

  // Handle tie game cases
  if (playerSelection === computerSelection) {
    roundResult = `Round ${roundCount}: It's a tie! Both players chose ${playerSelection}`;
    resultsDiv.innerHTML += roundResult + "<br>";

    // Handle winning cases
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    roundResult = `Round ${roundCount}: You win! ${playerSelection} beats ${computerSelection}!`;
    resultsDiv.innerHTML += roundResult + "<br>";
    playerScore++;

    // Handle losing cases
  } else {
    roundResult = `Round ${roundCount}: You lose! ${computerSelection} beats ${playerSelection}!`;
    resultsDiv.innerHTML += roundResult + "<br>";
    computerScore++;
  }
  // Increment round count
  roundCount++;

  // Check if game is over
  if (playerScore === 5 || computerScore === 5) {
    // Print final result of the game
    if (playerScore > computerScore) {
      roundResult = `Result: You won the game! Congratulations! The final score was: you ${playerScore} computer: ${computerScore}.`;
      resultsDiv.innerHTML += roundResult + "<br>";
    } else {
      roundResult = `Result: You lost the game! The final score was: you ${playerScore} computer: ${computerScore}.`;
      resultsDiv.innerHTML += roundResult + "<br>";
    }
  }
}
