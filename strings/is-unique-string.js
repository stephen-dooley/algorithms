/* jshint strict:false */
function isUnique(word) {
  var isUnique = true;
  var letterChecker = {};

  word.split('').forEach(function (letter) {
    if (letterChecker[letter]) {
      isUnique = false;
    }

    letterChecker[letter] = true;
  });

  return isUnique;
}

// if you can't use additional data structures you have to loop 2 time.
// 1 will loop through `i`, and the will loop through `j=i+1` to check neighbour
var word = process.argv[2];
console.log('Is the word `%s` is unique? [True/False]\n\nAnswer: %s\nRun time: O(N)', word, isUnique(word));
