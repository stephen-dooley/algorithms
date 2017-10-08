// i++ will increment next time the same line of code is called
// ++i increments now. makes the call to stack immediately
function getLetterCount(s) {
  var letterCounter = {};

  for (var i = 0; i < s.length; i++) { // O(n^2) assuming string of same length
    var letter = s[i];
    letterCounter[letter] = letterCounter[letter] ? ++letterCounter[letter] : 1;
  }

  return letterCounter;
}

function isAnagram(s1, s2) {
  // s1 = 'hello'
  // s2 = 'elohl'
  var isAnagramPair = true;

  var s1LetterCounter = getLetterCount(s1); // O(N) where N=s1.length
  var s2LetterCounter = getLetterCount(s2); // O(N) where N=s2.length

  if (Object.keys(s1LetterCounter).length !== Object.keys(s2LetterCounter).length) {
    isAnagramPair = false;
    return false;
  }

  Object.keys(s1LetterCounter).forEach(function (key) { // O(1) because finit number of letters
    if (!s2LetterCounter[key] || (s1LetterCounter[key] !== s2LetterCounter[key])) {
      isAnagramPair = false;
    }
  });

  return isAnagramPair;
}

var s1 = process.argv[2];
var s2 = process.argv[3];
console.log('`%s` is anagram of `%s`.\nAnswer: `%s`.\nRun time: O(N)', s1, s2, isAnagram(s1, s2));

// Assumptions:
// - no spaces in the strings
