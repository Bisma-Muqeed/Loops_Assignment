// Set a maximum value:
let maxValue = 30;

// Generate a random number:
let randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(randomNumber);

// Track the guess status:
let correctGuess :boolean  = false

// Simulate user guesses:
let predefined = [6 , 23 , 16 , 27];

// Iterate over guesses:
let index: number = 0;
while (!correctGuess && index < predefined.length) {

// Check the user's guess:
    const currentGuess: number = predefined[index];
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You've guessed the correct number:", currentGuess);
        correctGuess = true;
    } else if (currentGuess < randomNumber) {
        console.log("Too low! Guess higher.");
    } else {
        console.log("Too high! Guess lower.");
    }
    index++;
};