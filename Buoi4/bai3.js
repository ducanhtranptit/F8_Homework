function numberToWords(n) {
  if (n < 0 || n > 9999) {
    return "Số cần chuyển đổi phải từ 0 đến 9999.";
  }

  var ones = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
    "mười",
    "mười một",
    "mười hai",
    "mười ba",
    "mười bốn",
    "mười lăm",
    "mười sáu",
    "mười bảy",
    "mười tám",
    "mười chín",
  ];
  var unit = ["", "mươi", "trăm"];
  var thousand = ["", "nghìn"];

  function convertChunk(chunk) {
    var result = "";
    var hundred = Math.floor(chunk / 100);
    var ten = Math.floor((chunk % 100) / 10);
    var one = chunk % 10;

    if (hundred > 0) {
      result += ones[hundred] + " " + unit[2] + " ";
    }

    if (ten > 1) {
      result += ones[ten] + " " + unit[1] + " ";
      if (one > 0) {
        result += ones[one] + " ";
      }
    } else if (ten === 1) {
      result += ones[10 + one] + " ";
    } else if (one > 0) {
      result += ones[one] + " ";
    }

    return result.trim();
  }

  var result = "";
  var chunks = [];

  while (n > 0) {
    chunks.push(n % 1000);
    n = Math.floor(n / 1000);
  }

  for (var i = chunks.length - 1; i >= 0; i--) {
    var chunk = chunks[i];
    if (chunk > 0) {
      result += convertChunk(chunk) + " " + thousand[i] + " ";
    }
  }

  return result.trim();
}

var n = 1257;
var words = numberToWords(n);
console.log(words);
