function isPrime(num) {
    if(num <= 1) {
      console.log(num, 'Not prime');
      return false;
    }
    if(num <= 3) {
      console.log(num, 'Is prime');
      return true;
    }
    if(num % 2 === 0) {
      console.log(num, 'Not prime');
      return false;
    } else {
      console.log(num, 'is prime');
      return true;
    }
  }
  
  isPrime(5);
  isPrime(-5);
  isPrime(8);
  isPrime(1);