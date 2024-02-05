const mobiles = [
    { name: 'Sumsang', price: 24000, color: 'green'},
    { name: 'Walton', price: 30000, color: 'green' },
    { name: 'Nokia', price: 18000, color: 'green' },
    { name: 'Symphony', price: 12000, color: 'green' }
];

function getLongestPrice(items) {
    let longestItemPrice = items[0];
    for (const item of items) {
        if (item.price > longestItemPrice.price) {
            longestItemPrice = item;
        }
    }
    return longestItemPrice;
}

const longestPrice = getLongestPrice(mobiles);
console.log(longestPrice);