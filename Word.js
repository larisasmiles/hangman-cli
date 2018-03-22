// Word constructor for managing Word objects

var Word = function () {
  this.randomWord = "";
  this.numberOfGuesses = 8;
  this.randomWordArray = ["dog", "cat", "turtle", "hamster", "Snake", "Pig", "fish"];
  this.setRandomWord = function () {
      var ranWord = this.randomWordArray[Math.floor(Math.random() * this.randomWordArray.length)];
      this.randomWord = ranWord.toUpperCase();
  };
}

module.exports = Word;