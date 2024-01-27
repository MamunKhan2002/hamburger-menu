// let totalTk = 1000;

// let apples = 500;

// let oranges = 200;

// let totalBuy = (apples + oranges);

// let back = (totalTk - totalBuy)

// console.log(back);

// -----------------

// let Mathematics = 75.25;
// let Biology = 65;
// let Chemistry = 80;
// let Physics = 35.45;
// let Bangla = 99.50;

// let totalMarks = (Mathematics + Biology + Chemistry + Physics + Bangla);

// let averageMarks = (totalMarks / 5);
// let averageMarks2 = parseFloat(averageMarks.toFixed(2));
// console.log(averageMarks2);



// -------------task-3-------------------

// let x = 119;

// let result2 = (199 % 5);

// console.log(result2);


// ------------------------------

// var a1 = isNaN('11');

// console.log(a1);

// var a2 = (2-10);

// console.log(a2);

/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


let burgerPrice = 500;
let cokePrice = 30;

if (burgerPrice >= 500) {
    let coke = 'coke free';
    console.log('burger price' + ' ' + burgerPrice + ' '  + 'tk');
    console.log(coke);
}

else {
    let totalPrice = burgerPrice + cokePrice;
    console.log( 'coke Price' + ' ' + cokePrice + ' ' + 'tk');
    console.log('burger price' + ' ' + burgerPrice + ' '  + 'tk');
    console.log('total price' + ' '  + totalPrice)  + ' ' + 'tk'; 
}