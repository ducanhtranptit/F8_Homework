var arr1 = [1, 4, 3, 2];
var arr2 = [5, 2, 6, 7, 1];
var diff = arr1.reduce((pre, current) => {
  if (arr2.includes(current)) {
    pre.push(current);
  }
  return pre;
}, []);

console.log(diff);
