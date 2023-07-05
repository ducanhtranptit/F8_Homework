var reverseNum = function (n) {
  if (Number.isInteger(n)) {
    if (n === 0) {
      return n;
    }

    var checkNegative = false;
    if (n < 0) {
      checkNegative = true;
      n = Math.abs(n);
    }

    var reverseNumber = 0;

    while (n > 0) {
      reverseNumber = reverseNumber * 10 + (n % 10);
      n = Math.floor(n / 10);
    }

    if (checkNegative) {
      reverseNumber = -reverseNumber;
    }

    return reverseNumber;
  } else {
    return "ERROR";
  }
};

var n = -32194;
var newNum = reverseNum(n);
if (typeof newNum === "string") {
  console.log(newNum);
} else {
  console.log(`Số đảo ngược là: ${newNum}`);
}
