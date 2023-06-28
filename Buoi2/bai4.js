// # Kiểm tra số nguyên tố
// Viết chương trình kiểm tra 1 số có phải số nguyên tố hay không?



function checkPrime(number) {
    if (1 >= number) {
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