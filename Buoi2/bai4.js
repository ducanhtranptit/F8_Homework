function checkPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  

const num = 37;
if (checkPrime(num)) {
  console.log(`${num} là số nguyên tố.`);
} else {
  console.log(`${num} không là số nguyên tố.`);
}