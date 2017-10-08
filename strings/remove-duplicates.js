function removeDuplicates(s) {
  var uniqueChars = {};
  var newString = '';

  var stringLength = s.length;
  for (var i = 0; i < stringLength; i++) {
    var character = s[i];

    if (!uniqueChars[character]) {
      uniqueChars[character] = true; // store for reference
      newString += character;
    }
  }

  return newString;
}

var s = process.argv[2];
console.log('Before: `%s`.\n After: `%s`.\nRun time: O(N)', s, removeDuplicates(s));
