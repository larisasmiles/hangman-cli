// dependency for inquirer npm package
var inquirer = require("inquirer");
// dependency for Word and Letter constructors
var Word = require("./Word.js");
var Letter = require("./Letter.js");

// variable we will use to count how many times our questions have been asked
var count = 0;

console.log("\n----------------------------------------------------");
console.log("Hangman Game -- Guess some Pets!");

var myWord = new Word();
myWord.setRandomWord();

var myLetter = new Letter(myWord.randomWord);
myLetter.getLetters();

var askQuestion = function () {

  if (count < 20) {

    console.log("\n" + myLetter.letters.join(" ") + "\n");

    inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter!"
      }
    ]).then(function (answers) {

      var letterFound = myLetter.matchLetters(answers.letter);

      if (myWord.randomWord === myLetter.letters.join('')) {
        console.log("\nCORRECT!!!")

        console.log("\n" + myLetter.letters.join(" ") + "\n");
        console.log("You got it right! Next word!");

        myWord.setRandomWord();
        myWord.numberOfGuesses = 8;
        myLetter.randomWord = myWord.randomWord;
        myLetter.letters = [];
        myLetter.getLetters();
      }
      else if (letterFound) {
        console.log("\nCORRECT!!!")
      }
      else if (myWord.numberOfGuesses > 1) {
        console.log("\nINCORRECT!!!");
        myWord.numberOfGuesses--;
        console.log("\n" + myWord.numberOfGuesses + " Guesses remaining!");
      }
      else {
        console.log("\nYou have no more guesses left, Sorry you lost!\n");
        myWord.setRandomWord();
        myWord.numberOfGuesses = 8;
        myLetter.randomWord = myWord.randomWord;
        myLetter.letters = [];
        myLetter.getLetters();
        EndGame();
        return;
      }

      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });

  }
  else {
    console.log("\nI'm getting bored - Game Over!")
  }
};

askQuestion();

function EndGame() {
  inquirer
    .prompt({
      name: "end",
      type: "rawlist",
      message: "Would you like to End the game?",
      choices: ["Y", "N"]
    })
    .then(function(answer) {
      if (answer.end.toUpperCase() === "Y") {
        console.log("\nThanks for Playing");
      }
      else {
        count = 0;
        askQuestion();
      }
    });
}