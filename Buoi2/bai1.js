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