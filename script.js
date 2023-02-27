// define array called "choices" with three options as strings.
const choices = ["Rock", "Paper", "Scissors"];
// arrow function to randomly select one of the choices from array
const getComputerChoice = () => {
  // Generate a random integer between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);
  // Return the choice at the randomly generated index
  return choices[randomNumber];
};
