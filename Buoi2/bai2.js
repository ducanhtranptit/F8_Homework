function calculateElectricityBill(usage) {
    let unitPrice = 0;
  
    if (usage <= 50) {
      unitPrice = 1678;
    } else if (usage <= 100) {
      unitPrice = 1734;
    } else if (usage <= 200) {
      unitPrice = 2014;
    } else if (usage <= 300) {
      unitPrice = 2536;
    } else if (usage <= 400) {
      unitPrice = 2834;
    } else if (usage <= 500) {
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
  