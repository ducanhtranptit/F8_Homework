function checkSameSign(a, b) {
    if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
      console.log("Hai số có cùng dấu.");
    } else {
      console.log("Hai số không có cùng dấu.");
    }
}

var a = 5;
var b = -10;
checkSameSign(a, b);