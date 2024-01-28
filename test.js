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



// ====================================
//   task number one
// ====================================
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

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



// ====================================
//   task number tow
// ====================================

/*
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

 */

// let weight = 55;
// let height = 61;
// let BMI = 55 / 61 ^ 2;
// console.log(BMI);


// if (BMI < 18.5) {
//     console.log('You are underweight.');
// } else if (BMI >= 18.5 || BMI >= 24.9) {
//     console.log('you are normal.');
// } else if (BMI >= 25 || BMI <= 29.9) {
//     console.log('you are overweight.');
// } else {
//     console.log('you are obese.');
// }

// ====================================
//   task number three
// ====================================

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

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
//   task number four
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
// let myScore = 70;
// let friendScore = 35;

// if (myScore >= 80) {
//     if (friendScore >= 80) {
//         console.log('Go for a lunch');
//     } else if (friendScore < 80 && friendScore >= 60) {
//         console.log('Good luck next time.');
//     } else if (friendScore < 60 && friendScore >= 40) {
//         console.log('Massage Unseen.');
//     } else {
//         console.log('Block your friend.');
//     }
// } else {
//     console.log('Go to home and sleep and act sad');
// }



// ====================================
//   task number five
// ====================================


// you have two numbers in two variables, called: num1, num2

// now declare a variable called result.
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else.

// also, write it using ternary operator.



// let num1 = 75;
// let num2 = 55;
// let result;
// if (num1 > num2) {
//     result = num1 * 2;
//     console.log(result);
// } else {
//     let sum = num1 + num2;
//     console.log(sum);
// }

// result = num1 > num2 ? num1 * 2 : num1 + num2;
// console.log(result);


// ====================================
//   task number six
// ====================================

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


// let ticketPrice = 800;
// let age = 18;
// let seniorCitizensAge = 40;
// let student = false;


// if (age < 10) {
//     console.log('Ticket Free');
// } else if (student) {
//     let discount = 800 * 50 / 100;
//     let ticketFare = ticketPrice - discount;
//     console.log(ticketFare);
// } else if (seniorCitizensAge >= 60) {
//     let discount = 800 * 15 / 100;
//     let ticketFare = ticketPrice - ticketFare;
//     console.log(ticketFare);
// } else {
//     console.log(ticketPrice);
// }

// =================================================================
                    // Array
// =================================================================
// First Task..........

const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Water-lemon'];
fruits[2] = 'Jambura';
let fruits2 = fruits.indexOf('Mango');

console.log(fruits[3]);
console.log(fruits);
console.log(fruits2);


// ==Task Two ----------

const touristDestinations = ['Bangladesh', 'India', 'Pakistan', 'England'];
touristDestinations.push('Japan');
console.log(touristDestinations);
touristDestinations.push('China', 'Kushmir');
console.log(touristDestinations);
touristDestinations.pop('Kashmir');
console.log(touristDestinations);


// ====Task Three===-----
const books = ['Bangla', 'Hindi', 'Math', 'English', 'javascript'];

console.log(books.includes('javascript'));


