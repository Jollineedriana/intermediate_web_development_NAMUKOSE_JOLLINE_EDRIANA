
function longestWord(word) {
    let words = word.split(' ');
    let longestWord = words[0];
    for(let i = 0; i < words.length; i++) {
      if(words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
  console.log(longestWord('Web Development Tutorial'), 'Expected output: Development');

  
  