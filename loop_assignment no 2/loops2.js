// Set a maximum value:
var maxValue = 30;
// Generate a random number:
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(randomNumber);
// Track the guess status:
var correctGuess = false;
// Simulate user guesses:
var predefined = [6, 23, 16, 27,];
// Iterate over guesses:
var index = 0;
while (!correctGuess && index < predefined.length) {
    // Check the user's guess:
    var currentGuess = predefined[index];
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You've guessed the correct number:", currentGuess);
        correctGuess = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Too low! Guess higher.");
    }
    else {
        console.log("Too high! Guess lower.");
    }
    index++;
}
