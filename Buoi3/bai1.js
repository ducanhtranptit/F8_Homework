function getNum(n) {
  var evenNum = [];
  var oddNum = [];

  if (Number.isInteger(n)) {
    for (var i = 0; i <= n; i++) {
      if (i % 2 === 0) {
        evenNum.push(i);
      } else {
        oddNum.push(i);
      }
    }
    return {
      even: evenNum,
      odd: oddNum
    };
  } else {
    return "Bạn đã nhập sai!!!";
  }
}

var n = 10;
var result = getNum(n);

if (typeof result === "string") {
  console.log(result);
} else {
  console.log("Số lẻ: " + result.odd.join(", "));
  console.log("Số chẵn: " + result.even.join(", "));
}