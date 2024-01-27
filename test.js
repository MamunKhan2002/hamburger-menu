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

/*task number one */
// let burgerPrice = 300;
// let cokePrice = 30;

// if (burgerPrice >= 500) {
//     let coke = 'coke free';
//     console.log('burger price' + ' ' + burgerPrice + ' ' + 'tk');
//     console.log(coke);
// }

// else {
//     let totalPrice = burgerPrice + cokePrice;
//     console.log('coke Price' , ' ' , cokePrice,'tk');
//     console.log('burger price' , ' ' , burgerPrice ,'tk');
//     console.log('total price' , ' ' , totalPrice,'tk');
// }



/*
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

 */
/* task number two */
/*let BMI;
let weightBmi = 40;
let hightBmi = 61;

if (BMI < 18.5) {
    console.log('You are underweight.');
} else if (BMI >= 18.5 || BMI >= 24.9) {
    console.log('you are normal.');
} else if (BMI >= 25 || BMI <= 29.9) {
    console.log('you are overweight.');
} else {
    console.log('you are obese.');
}*/

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// tusk three
/*
let result = 99;

if (result >= 90 && result <= 100) {
    console.log('Grade: A');
} else if (result >= 80 && result < 90) {
    console.log('Grade: B');
} else if (result >= 70 && result < 80) {
    console.log('Grade: C');
} else if (result >= 60 && result < 70) {
    console.log('Grade D');
} else {
    console.log('Grade: Fail');
}

*/


// ====================================

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 79;
let friendScore = 39;

if (myScore >= 80) {
    if (friendScore > 80) {
        console.log('Go for a lunch');
    } else if (friendScore < 80 && friendScore >= 60) {
        console.log('Good luck next time.');
    } else if (friendScore < 60 && friendScore >= 40) {
        console.log('Massage Unseen.');
    } else {
        console.log('Block your friend.');
    }
} else {
    console.log('Go to home and sleep and act sad');
}
