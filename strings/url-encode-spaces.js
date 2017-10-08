function urlEncodeSpaces(s) {
  // /s+ replaces a run of whitespaces and /g is global so it replaces all occurences
  return s.replace(/\s+/g, '\%20')
}

var s = process.argv[2];
console.log('`%s` encoded is `%s`.\nRun time: O(N)', s, urlEncodeSpaces(s));
