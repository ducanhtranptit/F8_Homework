var flatArray = function (arr) {
  var array = arr.reduce((returnArray, currentArray) => {
    return returnArray.concat(
      Array.isArray(currentArray) ? flatArray(currentArray) : currentArray
    );
  }, []);
  return array;
};

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

console.log(flatArray(arr));

var newArray = flatArray(arr);
result = [];

for (var i = 0; i < newArray.length; i++) {
  var element = newArray[i];
  var type = typeof element;

  /*
  nếu như mảng type chưa có phần tử thì sẽ tạo mảng rỗng mới
  tương ứng có bao nhiêu kiểu dữ liệu xuất hiện trong mảng thì sẽ có bấy nhiêu mảng con được tạo ra
  */
  if (!result[type]) {
    result[type] = [];
  }

  result[type].push(element);
}

console.log(result); //chưa nghĩ ra được output giống như anh Hoàng An, trăm sự nhờ Dương giúp đỡ anh với nhé :3
