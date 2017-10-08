/* jshint strict:false */
function isOneAway(word1, word2) {
  var smallerWordIndex = 0;
  var difference = '';

  var largerWord, smallerWord;

  if (Math.abs(word1.length - word2.length) === 1) {
    largerWord = word1.length > word2.length ? word1 : word2;
    smallerWord = word1.length < word2.length ? word1 : word2;
  } else if (word1.length === word2.length) {
    largerWord = word1;
    smallerWord = word2;
  } else {
    return false; // O(1) time
  }

  for (var largerWordIndex = 0; largerWordIndex < largerWord.length; largerWordIndex++) { // O(n)
    if (smallerWord[smallerWordIndex] !== largerWord[largerWordIndex] || smallerWordIndex === smallerWord.length) {
      difference += largerWord[largerWordIndex];
    } else {
      ++smallerWordIndex;
    }
  }

  return difference.length < 2;
}

var word1 = 'Hpllo';
var word2 = 'Hello';
console.log('The word `%s` is one edit away from `%s`? [True/False]\n\nAnswer: %s\nRun time: O(N)', word1, word2, isOneAway(word1, word2));
