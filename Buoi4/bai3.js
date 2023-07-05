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

    var unitPlace = n % 10;
    n = Math.floor(n / 10);

    var tensPlace = n % 10;
    n = Math.floor(n / 10);

    var hundredPlace = n % 10;
    n = Math.floor(n / 10);

    var thousandPlace = n % 10;

    if (thousandPlace > 0) {
      unitsString += units[thousandPlace] + " " + thousands[1] + " ";
    }

    if (hundredPlace > 0) {
      unitsString += units[hundredPlace] + " " + hundreds[2] + " ";
    }

    if (tensPlace > 0) {
      if (tensPlace === 1) {
        unitsString += "ten ";
      } else {
        unitsString += units[tensPlace] + " " + hundreds[1] + " ";
      }
    }

    if (unitPlace > 0 && tensPlace !== 1) {
      unitsString += units[unitPlace];
    }

    return unitsString.trim();
  } else {
    return "ERROR";
  }
}

var n = 2341;
var units = convertNum(n);
console.log(units);
