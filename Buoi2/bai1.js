// # Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

function taxiFee (distance) {
    let rates1 = 15000, rates2 = 15000, rates3 = 13500;
    let totalCost;

    if (0 > distance) {
        console.log('Ban da nhap sai');
    } else {
        if (1 >= distance) {
            totalCost = distance * rates1;
        } else if (1 < distance && 5 >= distance) {
            totalCost = (distance - 1) * rates2 + 1 * rates1;

        } else {
            rates = 11000;
        }
    }
;

    if (distance > 120) {
        saleOff = totalCost * 0.1;
        totalCost -= saleOff;
    } else {
        return "So vao khong hop le!!!"
    }

    return totalCost;
}


var distance = 10;
console.log(taxiFee(distance));