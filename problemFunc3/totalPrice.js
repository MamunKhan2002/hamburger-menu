/*
*Your task is to calculate the total budget required to buy electronics:
laptop = 35000 tk
tablet = 15000 tk
mobile = 20000 tk


*Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    // console.log(laptopQuantity, tabletQuantity, mobileQuantity);
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalLaptopPrice = laptopPrice * laptopQuantity;
    const totalTabletPrice = tabletPrice * tabletQuantity;
    const totalMobilePrice = mobilePrice * mobileQuantity;

    const totalProductPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalProductPrice;
}

const totalPrice = calculateElectronicsBudget(2, 1, 3);
console.log(totalPrice);