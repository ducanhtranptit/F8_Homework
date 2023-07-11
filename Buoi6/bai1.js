var arr = [1, 5, 3, 6, 7, 8];
var min = Math.min(...arr);
var max = Math.max(...arr);
var indexMin = arr.indexOf(min);
var indexMax = arr.indexOf(max);

console.log("Giá trị nhỏ nhất:", min);
console.log("Giá trị lớn nhất:", max);
console.log("Chỉ số của giá trị nhỏ nhất:", indexMin);
console.log("Chỉ số của giá trị lớn nhất:", indexMax);
