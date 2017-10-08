function permutation(s) {
  return getPermutations(s, '', 0);
}

function getPermutations(s, prefix) {
  if (s.length === 0) {
    console.log(prefix + '\n----------');
  } else {
    for (var i = 0 ; i < s.length; i++) {
      var remainder = s.substring(0, i) + s.substring(i+1);
      getPermutations(remainder, prefix + s[i]);
    }
  }
}

var string = process.argv[2];
console.log('All permutations of `%s`.\nRun time: O(N^2 * N!)', string);
permutation(string)
