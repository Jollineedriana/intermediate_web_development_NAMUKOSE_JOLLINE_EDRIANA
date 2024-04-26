function reverseNumber(number) {
    let reversedNumber = 0;
    
    while (number !== 0) {
        // Extract the last digit of the number
        let digit = number % 10;
        
        // Appending the digit to the reversed number
        reversedNumber = reversedNumber * 10 + digit;
        
        // Removing the last digit
        number = (number - digit) / 10;
    }
    
    return reversedNumber;
}
let originalNumber = 32243;
let reversedNumber = reverseNumber(originalNumber);
console.log("Original Number:", originalNumber);
console.log("Reversed Number:", reversedNumber);