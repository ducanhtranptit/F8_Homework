var carculateSum = function (...args) {
  var result = 0;
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      throw new Error("Invalid input data!!");
    } else {
      result += args[i];
    }
  }

  return result;
};

try {
  var result = carculateSum(1, 2, 3, 4, 5, 6, 7);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
