var checkPrime = function(n) {
  if (Number.isInteger(n)) {
    if (n <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true
  } else {
    return false;
  }
}


var n = 3;

if (checkPrime(n)) {
  console.log('True');
} else {
  console.log('False');
}