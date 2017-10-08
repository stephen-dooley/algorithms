/* jshint strict:false */
// Time complexity: O(nlogn)
function isPermutationOfPalindrome(word) {
  var letterCounter = {};

  // O(N)+ O(N) + O(N) + O(N)
  word.replace(' ', '').toLowerCase().split('').forEach(function (letter) {
    letterCounter[letter] = letterCounter[letter] ? ++letterCounter[letter] : 1;
  });

  var numberOfTimesValueIsOne = 0;
  var numberOfTimesValueIsUneven = 0;

  // O(N)
  for (var key in letterCounter) {
    var value = letterCounter[key];

    if (value === 1) {
      ++numberOfTimesValueIsOne;
    }

    if ((value !== 1) && (value%2 !== 0)) {
      ++numberOfTimesValueIsUneven;
    }
  }

  if (numberOfTimesValueIsOne > 1 || numberOfTimesValueIsUneven > 0) {
    return false;
  } else {
    return true;
  }
}

var word = 'tact Coall';
console.log('The word `%s` is a permutation of a palindrome? [True/False]\n\nAnswer: %s\nRun time: O(N)', word, isPermutationOfPalindrome(word));
