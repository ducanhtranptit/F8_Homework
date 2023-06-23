function findMax(a, b, c) {
    let max = a;
  
    if (b > max) {
      max = b;
    }
  
    else if (c > max) {
      max = c;
    }
  
    return max;
  }
  
var a = 10;
var b = 5;
var c = 8;
 
var result = findMax(a, b, c);
  
console.log("Số lớn nhất là:", result);