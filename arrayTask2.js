/*Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:[12, 98, 78, 46]*/

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNum = [];
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    let num = numbers[i];
    if (num % 2 === 0) {
        evenNum.push(num);
    }
}

// console.log(evenNum);
let revN = [];
let i = 0;
while (i < numbers.length) {
    // console.log(numbers[i]);
    let num = numbers[i];
    if (num % 2 === 0) {
        revN.push(num);
    }
    i++;
}

console.log(revN);