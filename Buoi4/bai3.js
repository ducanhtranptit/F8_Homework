function convertNum(n) {
  if (n > 0 && n < 9999 && Number.isInteger(n)) {
    var units = [
      "không",
      "một",
      "hai",
      "ba",
      "bốn",
      "năm",
      "sáu",
      "bảy",
      "tám",
      "chín",
    ];
    var hundreds = ["", "mươi", "trăm"];
    var thousands = ["", "nghìn"];

    var unitsString = "";

    if (n === 0) {
      return units[0];
    }

    var unit = n % 10;
    n = Math.floor(n / 10);

    var ten = n % 10;
    n = Math.floor(n / 10);

    var hundred = n % 10;
    n = Math.floor(n / 10);

    var thousandPlace = n % 10;

    if (thousandPlace > 0) {
      unitsString += units[thousandPlace] + " " + thousands[1] + " ";
    }

    if (hundred > 0) {
      unitsString += units[hundred] + " " + hundreds[2] + " ";
    }

    if (ten > 0) {
      if (ten === 1) {
        unitsString += "ten ";
      } else {
        unitsString += units[ten] + " " + hundreds[1] + " ";
      }
    }

    if (unit > 0 && ten !== 1) {
      unitsString += units[unit];
    }

    return unitsString.trim();
  } else {
    return "ERROR";
  }
}

var n = 2341;
var units = convertNum(n);
console.log(units);
