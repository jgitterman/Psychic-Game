// Alert title
alert("Welcome to The Psychic Game!");

// Alert instructions
alert("Are you a Psychic?" + "\n" + "Try to guess the letter the computer chose by clicking a letter on your keyboard." + "\n" + "You have 10 guesses for each round." + "\n" + "If you guess the correct letter you win," + "\n" + "if you guess the wrong letter 10 times you lose." + "\n" + "Good luck!");

// Create array
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Create variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

// Store variables
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses");
var guessedText = document.getElementById("lettersGuessed");

// Set up a reset function
function reset() {
  guessesLeft = 10;
  guessedLetters = [];
  compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
  console.log(compGuess)
}
// call reset funciton
reset();

// Display variables before game starts
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesText.textContent = "Guesses left: " + guessesLeft;
guessedText.textContent = "Letters guessed: " + guessedLetters;

// Trigger listener
document.onkeyup = function (event) {
  // Determine which key was pressed
  var userGuess = event.key;

  // console log computers guess
  console.log(compGuess)

  // Alert if they picked the letter already
  if (guessedLetters.includes(userGuess)) {
    alert(("You already guessed that letter." + "\n" + "try a different letter."));
    return false;
  }

  // Create if functions to determine game status
  if (userGuess === compGuess) {
    wins++;
    alert("You Win!" + "\n" + "But how did you know?" + "\n" + "Press any letter to play again!");
    reset();
  } else {
    guessesLeft--;
    guessedLetters.push(userGuess);
    if (guessesLeft === 0) {
      losses++
      reset();
      alert("You Lose!" + "\n" + "I told you so :p" + "\n" + "Press any letter to play again!");
    }
  }

  // Alert if they didnt click a letter
  if (!compChoices.includes(userGuess)) {
    alert("That is not a letter.");
    guessesLeft++;
  }

  // Display variables
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesText.textContent = "Guesses left: " + guessesLeft;
  guessedText.textContent = "Letters guessed: " + guessedLetters;

}


// THINGS I STILL NEED TO FIGURE OUT...
// Is there a better way to display varibales before picking a letter and make the code work other than the way I did it?
// Is there a better way to add guessed letters on click