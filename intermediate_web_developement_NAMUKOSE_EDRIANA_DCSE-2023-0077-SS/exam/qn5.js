function sortLetters(str) {
    const letters = Array.from(str);
    letters.sort();
    const sortedStr = letters.join('');
    return sortedStr;
  }
  
  console.log(sortLetters("webmaster")); 