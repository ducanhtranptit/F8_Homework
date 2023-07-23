Array.prototype.filter2 = function (callback) {
  resultArray = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resultArray.push(this[i]);
    }
  }

  return resultArray;
};

const numbers = [1, 2, 3, 4, 5];

var evenNumbers = numbers.filter2((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);

var evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);
