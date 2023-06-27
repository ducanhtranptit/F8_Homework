function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  

const N = 5;
const result = factorial(N);
console.log(`Giai thừa của ${N} là: ${result}`);        