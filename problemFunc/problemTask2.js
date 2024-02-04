/*Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0.*/

const numbers = [5, 6, 11, 12, 5, 98, 5];

function repeatNum(arrays, num) {
    let count = [];
    for (let arr of arrays) {
        if (arr === num) {
            count.push(arr)
        }
    }
    const repeat = count.length;
    return repeat;
}

const repeatResult = repeatNum(numbers, 7);
console.log(repeatResult);