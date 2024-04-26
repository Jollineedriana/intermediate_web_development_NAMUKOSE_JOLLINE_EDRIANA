function isPalindrome(str) {
    // checking if a character is alphanumeric
    function isAlphanumeric(char) {
      return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
    }
  
  // Removing non-alphanumeric characters and convert to lowercase
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
        if (isAlphanumeric(str[i])) {
            cleanStr += str[i].toLowerCase();
        }
    }
  
 
    for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false; 
        }
    }
    return true; 
  }
  
  console.log(isPalindrome("madam")); 
  console.log(isPalindrome("nurses run")); 
  console.log(isPalindrome("hello")); 