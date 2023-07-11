var checkPrime = function (n) {
  if (Number.isInteger(n)) {
    if (n <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
};

var arr = [1, 5, 3, 6, 7, 8];
var sumPrime = 0;
var countPrime = 0;
var hasPrimes = false;

for (var i = 0; i < arr.length; i++) {
  if (checkPrime(arr[i])) {
    sumPrime += arr[i];
    countPrime++;
    hasPrimes = true;
  }
}

if (hasPrimes) {
  var averageOfPrimes = sumPrime / countPrime;
  console.log("Trung bình các số nguyên tố:", averageOfPrimes);
} else {
  console.log("Không có số nguyên tố trong mảng.");
}
