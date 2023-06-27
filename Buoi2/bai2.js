function calculateElectricityBill(usage) {
    let unitPrice = 0;
  
    if (50 >= usage) {
      unitPrice = 1678;
    } else if (100 >= usage) {
      unitPrice = 1734;
    } else if (100 >= usage) {
      unitPrice = 2014;
    } else if (300 >= usage) {
      unitPrice = 2536;
    } else if (400 >= usage) {
      unitPrice = 2834;
    } else if (500 >= usage) {
      unitPrice = 2927;
    } else {
      console.log('Dùng ít thôi, không có điện mà dùng đâu');
      return 0;
    }
  
    let totalCost = unitPrice * usage;
    return totalCost;
  }
  

const usage = 250;
const electricityBill = calculateElectricityBill(usage);
console.log("Giá điện: ", electricityBill);
  