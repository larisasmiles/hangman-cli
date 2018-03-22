
// Letter constructor for handling Letter objects

var Letter = function (ranWord) {
  this.letters = [];
  this.randomWord = ranWord;
  this.getLetters = function () {
      for (var i = 0; i < this.randomWord.length; i++) {
          this.letters[i] = "_";
      };
  }
}

Letter.prototype.matchLetters = function (letter) {
  var letterFound = false;
  for (var i = 0; i < this.randomWord.length; i++) {

      if (this.randomWord[i] === letter.toUpperCase()) {
          this.letters[i] = letter.toUpperCase();
          letterFound = true;
      }
  }
  return letterFound;
};

module.exports = Letter;