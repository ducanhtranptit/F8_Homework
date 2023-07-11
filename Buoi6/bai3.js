function filterDuplicates(array) {
  var result = [];
  var visited = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (!visited[element]) {
      result.push(element);
      visited[element] = true;
    }
  }

  return result;
}

var arr = [1, 2, 3, 2, 4, 1, 5, 3];
var filteredArr = filterDuplicates(arr);
console.log(filteredArr);
