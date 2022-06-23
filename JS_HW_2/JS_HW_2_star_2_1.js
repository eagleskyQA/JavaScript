const printWord = function(word, q) {
  word = String(word);
  word_2 = word;
  for (let i = 1; i <= q; i++) {
  console.log(word);
  word += word_2;
}
}

printWord('Hi ', 2)
printWord('WTF ', 3)
printWord('Ментор, который проверил это, ты лучший :) ', 4)
printWord(444, 4)