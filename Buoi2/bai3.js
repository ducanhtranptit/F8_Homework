function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const N = 5;
const result = factorial(N);
console.log(`Giai thừa của ${N} là: ${result}`);