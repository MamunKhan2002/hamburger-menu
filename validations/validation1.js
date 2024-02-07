function totalPicnicCost(Quantity) {
    // console.log(Quantity);
    if (Quantity !== "number") {
        const text = 'Please provide valid number';
        return text;
    }
    const first100PerFee = 5000;
    const sec101To200PerFee = 4000;
    const above200PerFee = 3000;
    if (Quantity <= 100) {
        const first100TotalFee = first100PerFee * Quantity;
        return first100TotalFee;
    } else if (Quantity <= 200) {
        const first100TotalFee = first100PerFee * 100;
        const sec101To200total = Quantity - 100;
        const sec101To200totalFee = sec101To200total * sec101To200PerFee;
        const remainTotalFee = first100TotalFee + sec101To200totalFee;
        return remainTotalFee;
    } else {
        const first100TotalFee = first100PerFee * 100;
        const sec101To200total = Quantity - 100;
        const sec101To200totalFee = sec101To200total * sec101To200PerFee;
        const above200Total = Quantity - 200;
        const above200TotalFee = above200PerFee * above200Total;
        const remainTotalFee = first100TotalFee + sec101To200totalFee + above200TotalFee;
        return remainTotalFee;
    }
}
const totalCost = totalPicnicCost('202');
console.log(totalCost);