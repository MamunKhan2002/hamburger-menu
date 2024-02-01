/*Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 76, 46];

Output: [12, 98, 76, 46]*/
const numbers = [12, 98, 5, 41, 23, 76, 46];
let rev = [];
let i = 0;
while (i < numbers.length) {
    let num = numbers[i];
    if (num % 2 === 0) {
        rev.push(num)
    }
    i++;
}
console.log(rev);