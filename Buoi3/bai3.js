var checkEvenNum = function(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var calculateTotal = function (a, b) {
  var evenTotal = 0, oddTotal = 0;
  for (var i = a; i <= b; i++) {
    if (checkEvenNum(i)) {
      evenTotal += i;
    } else {
      oddTotal += i;
    } 
  }
  return {
    evenTotal: evenTotal,
    oddTotal: oddTotal
  };
}

var a = 5, b = 9;
var total = calculateTotal(a,b);
console.log("Tổng số chẵn:", total.evenTotal);
console.log("Tổng số lẻ:", total.oddTotal);