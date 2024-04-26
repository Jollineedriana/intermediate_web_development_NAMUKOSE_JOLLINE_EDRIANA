function computeSum(num1, num2) {
    if (num1 === num2) {
        var result = 3 * (num1 + num2);
        console.log(`The triple sum of ${num1} and ${num2} is ${result}.`);
        return result;
    } else {
        var result = num1 + num2;
        console.log(`The sum of ${num1} and ${num2} is ${result}.`);
        return result;
    }
}


var num1 = 4;
var num2 = 4;
var sumResult = computeSum(num1, num2);
console.log("Sum:", sumResult);

var num3 = 3;
var num4 = 7;
var sumResult = computeSum(num3, num4);
console.log("Sum:", sumResult);
