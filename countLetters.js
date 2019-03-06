function countLetter (word) {
  var characterCount = {}
  word = word.split(' ').join('');

for (var letter of word) {
  if (!characterCount[letter]) {
    characterCount[letter] = 0;
  }
  characterCount[letter]++
}
return characterCount;
}

console.log(countLetter("Lighthouse Labs"));
