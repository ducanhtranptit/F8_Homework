Array.prototype.reduce2 = function (callback, initValue) {
  if (this.length === 0 && initValue === undefined) {
    throw new TypeError("Reduce2 of empty array with no initial value");
  }

  preValue = initValue === undefined ? this[0] : initValue;
  startIndex = initValue === undefined ? 1 : 0;

  for (var i = startIndex; i < this.length; i++) {
    preValue = callback(preValue, this[i]);
  }

  return preValue;
};

const numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce2((preValue, currentValue) => {
  return preValue + currentValue;
}, 0);
console.log(sum);

var sum = numbers.reduce((preValue, currentValue) => {
  return preValue + currentValue;
}, 0);
console.log(sum);
