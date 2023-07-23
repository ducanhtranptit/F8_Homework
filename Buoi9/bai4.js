Object.prototype.getCurrency = function (currency) {
  var inputValue = String(this);
  var numbers = "0123456789";
  for (var i = 0; i < inputValue.length; i++) {
    if (numbers.indexOf(inputValue[i]) !== -1) {
      continue;
    } else {
      throw new TypeError("Invalid input value!");
    }
  }

  var formatValue = "";
  var count = 0;

  for (var j = inputValue.length - 1; j >= 0; j--) {
    count++;
    formatValue = inputValue[j] + formatValue;
    if (count === 3 && j !== 0) {
      formatValue = "," + formatValue;
      count = 0;
    }
  }

  return formatValue + " " + currency;
};

var price1 = 12000;
console.log(price1.getCurrency("đ"));

var price = "12000a00ư0";
console.log(price.getCurrency("đ"));
