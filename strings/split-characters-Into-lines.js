function splitCharacters(chars, maxCharsPerLine) {
  var lines = [];

  // chars = ['T', 'h', 'i', 's', ...]

  while (chars.length > 0) {
    if (chars.length <= maxCharsPerLine) { // check if you can append the last set of chars
      lines.push(chars.join(''));

      return lines; // assume we have reached the end of the character set
    } else {
      lines.push(chars.splice(0, maxCharsPerLine).join(''));
    }
  }

  return lines;
}

function wrapText(text, maxCharsPerLine) {
  var characters = text.split('');

  return splitCharacters(characters, maxCharsPerLine).join('\n');
}

var text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
console.log('Wrapped Text:\n', wrapText(text, 10));
