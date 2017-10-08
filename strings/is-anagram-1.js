/* jshint strict:false */
function isPermutation(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  // get the letters and sort them, then check if they are identical

  // run time O(N) + O(N LogN) + O(N)
  // --> O(2N + N LogN)
  // --> O(N + N LogN)
  // --> O(N LogN) drop the non-dominant term
  return a.split('').sort().join('') === b.split('').sort().join('');
}

var word1 = 'doggo';
var word2 = 'godog';
console.log('The word `%s` is a permutation of `%s`? [True/False]\n\nAnswer: %s\nRun time: O(N Log N)', word1, word2, isPermutation(word1, word2));
