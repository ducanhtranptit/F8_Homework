var flatArray = function (arr) {
  var array = arr.reduce((returnArray, currentArray) => {
    return returnArray.concat(
      Array.isArray(currentArray) ? flatArray(currentArray) : currentArray
    );
  }, []);
  return array;
};
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(flatArray(arr));
