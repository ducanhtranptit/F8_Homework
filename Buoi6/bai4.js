var numbers = [5, 1, 9, 8, 10];
var element = 4;

numbers.sort(function (a, b) {
  return a - b;
});

var insertIndex = 0;
while (numbers[insertIndex] < element) {
  insertIndex++;
}

numbers.splice(insertIndex, 0, element);

console.log(numbers);
