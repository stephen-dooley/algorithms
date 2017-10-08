function reverseString(s) {
  var indexOfLastCharInString = s.length - 1;
  var sReversed = '';

  for (var i = indexOfLastCharInString; i >= 0; i--) {
    sReversed += s[i];
  }

  return sReversed;
}

var s = process.argv[2];
console.log('`%s` reversed is `%s`.\nRun time: O(N)', s, reverseString(s));
