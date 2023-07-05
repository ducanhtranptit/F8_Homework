var printFibo = function (n) {
  var fiboArray = [];
  if (n <= 0) {
    return "ERROR";
  } else if (Number.isInteger(n)) {
    if (n === 1) {
      fiboArray.push(1);
    } else if (n >= 2) {
      fiboArray.push(1, 1);

      for (var i = 2; i < n; i++) {
        var nextFibo = fiboArray[i - 1] + fiboArray[i - 2];
        fiboArray.push(nextFibo);
      }
    }
    return fiboArray;
  } else {
    return "ERROR";
  }
};

var n = 9999999999;
var fibo = printFibo(n);

if (typeof fibo === "string") {
  console.log(fibo);
} else {
  for (var i = 0; i < fibo.length; i++) {
    console.log(`Số fibonacci thứ ${i + 1}: ${fibo[i]}`);
  }
}
