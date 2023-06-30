var calculateTotal = function(n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
    var a = 1 / i;
    total += a;
  }
  return total;
}

var n = 100;
console.log(calculateTotal(n));