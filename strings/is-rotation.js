function isRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const concatonatedStrings = `${s1}${s1}`;
  return concatonatedStrings.indexOf(s2) > -1;
}

var s1 = process.argv[2];
var s2 = process.argv[3];
console.log('`%s` is rotation of `%s`.\nAnswer: `%s`.\nRun time: O(N)', s1, s2, isRotation(s1, s2));
