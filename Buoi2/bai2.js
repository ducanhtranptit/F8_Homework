// # Tính tiền điện
// Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau

// Input: Số điện tiêu thụ hàng tháng

// Output: Hiển thị số tiền phải đóng

// Chi tiết giá điện theo bậc

function calculateElectricityBill(usage) {
  const rates = [1678, 1734, 2014, 2536, 2834, 2927];
  
  if (usage < 0) {
    return "\nPlease enter a valid electricity usage.\nUsage cannot be less than 0.\n";
  } else if (usage <= 50) {
    return usage * rates[0];
  } else if (usage <= 100) {
    return 50 * rates[0] + (usage - 50) * rates[1];
  } else if (usage <= 200) {
    return 50 * rates[0] + 50 * rates[1] + (usage - 100) * rates[2];
  } else if (usage <= 300) {
    return 50 * rates[0] + 50 * rates[1] + 100 * rates[2] + (usage - 200) * rates[3];
  } else if (usage <= 400) {
    return 50 * rates[0] + 50 * rates[1] + 100 * rates[2] + 100 * rates[3] + (usage - 300) * rates[4];
  } else if (usage > 400) {
    return 50 * rates[0] + 50 * rates[1] + 100 * rates[2] + 100 * rates[3] + 100 * rates[4] + (usage - 400) * rates[5];
  }
}

const usage = parseFloat(prompt("Enter your electricity usage (kWh): "));
const electricityBill = calculateElectricityBill(usage);

console.log(`Your electricity bill is: $${electricityBill.toFixed(2)}`);