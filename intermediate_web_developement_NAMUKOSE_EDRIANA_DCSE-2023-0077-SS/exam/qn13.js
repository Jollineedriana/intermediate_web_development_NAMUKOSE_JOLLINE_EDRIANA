function findSecondLowestAndGreatest(numbers) {
    // Sorting the array in ascending order
    const sortedArray = numbers.sort((a, b) => a - b);
    // Second lowest number
    const secondLowest = sortedArray[1];
    // Second greatest number 
    const secondGreatest = sortedArray[sortedArray.length - 2];
  
    return [secondLowest, secondGreatest];
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log(findSecondLowestAndGreatest(numbers));
  console.log(getSecondLowestAndGreatest(numbers)); 