var calculateTotal = function(n) {
  var a = 0, total = 0;
  for (var i = 1; i <= n; i++) {
    a = i * (i + 1);
    total += a;
  }

  return total;
}

var n = 7;
console.log(calculateTotal(n));