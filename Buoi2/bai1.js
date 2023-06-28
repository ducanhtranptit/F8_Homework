// # Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

function taxiFee (distance) {
    let rates;

    if (0 > distance) {
        console.log('Ban da nhap sai');
    } else {
        if (1 >= distance) {
            rates = 15000;
        } else if (1 < distance && 5 >= distance) {
            rates = 13500;
        } else {
            rates = 11000;
        }
    }

    let totalCost = distance * rates;

    if (distance > 120) {
        saleOff = totalCost * 0.1;
        totalCost -= saleOff;
    }

    return totalCost;
}


var distance = 10;
console.log(taxiFee(distance));