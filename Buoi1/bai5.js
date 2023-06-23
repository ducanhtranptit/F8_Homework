function sortAscending(a, b, c) {
    if (a > b) {
      [a, b] = [b, a];
    }
    if (b > c) {
      [b, c] = [c, b];
    }
    if (a > b) {
      [a, b] = [b, a];
    }
  
    return [a, b, c];
  }
  
var a = 5;
var b = 2;
var c = 7;
var result = sortAscending(a, b, c);
  
console.log("Thứ tự tăng dần:", result[0], result[1], result[2]);