/**
Phone word lookup
We want to build a service where users type in a number and
see what words "spell" out that number.
Recall that the digits 2-9 have letters associated with them:
 ----   ---   ----
|    | |ABC| |DEF |
|  1 | | 2 | | 3  |
 ----   ---   ----
 ----   ---   ----
| GHI| |JKL| |MNO |
|  4 | | 5 | | 6  |
 ----   ---   ----
 ----   ---   ----
|PQRS| |TUV| |WXYZ|
|  7 | | 8 | | 9  |
 ----   ---   ----
 ----   ---   ----
|    | |   | |    |
|  * | | 0 | | #  |
 ----   ---   ----

a = # numbers per letter
b = # numbers of digits
O(4^b)

{
  '2': ['a'],
  '234': ['a', ,
  'aahed':

The number 43556 can spell "hello", for example.
We want to implement a function that, when given a number, can
return a list of all English words that spell that number.
You can assume that numbers are at most 10 digits or less.
*/

var _ = require('underscore');
var request = require('request');

// Construct a letter -> number mapping
var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
var NUMBERS = '22233344455566677778889999';
var LETTERS_TO_NUMBERS = _.object(LETTERS, NUMBERS);

// list of English words
var wordList = [];
var mapping = {};

// Given a phone number (integer), return a list of
// English words that 'spell out' the number.
var phoneWords = function(phoneNumber) {
  return mapping[phoneNumber];
};

// Get the word list
var DICTIONARY_FILE = 'https://s3.amazonaws.com/burr-data/word_list.txt';
request(DICTIONARY_FILE, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.log('Error downloading word list file.');
    return;
  }
  wordList = body.split('\n');
  console.log('We have this many words: ', wordList.length);

  var firstTen = wordList.slice(0,10);
  console.log('First 10 words are: ', firstTen);

  mapping = generateWordsToNumberMapping(wordList);
  runTests();
});

function generateWordsToNumberMapping(wordList) {
  var mappingOfNumberToWords = {};

  _.map(wordList, function (word) {
    var lettersInWord = word.split('');
    var number = '';

    _.each(lettersInWord, function (letter) {
        number += LETTERS_TO_NUMBERS[letter];
    });

    if (!mappingOfNumberToWords[number]) {
      mappingOfNumberToWords[number] = [word]
    } else {
      mappingOfNumberToWords[number].push(word);
    }
  });

  return mappingOfNumberToWords;
}

// Compare output
var compareArrays = function(phoneNumber, array1, array2) {
  array1 = array1 || [];
  array2 = array2 || [];
  var passed = _.isEqual(array1.sort(), array2.sort());
  console.log(passed ? 'TEST PASSED:' : 'TEST FAILED:', phoneNumber);
};

// Run tests
var runTests = function() {
  compareArrays(2, phoneWords(2), ['a']);
  compareArrays(228, phoneWords(228), ['act', 'cat', 'bat']);
};

