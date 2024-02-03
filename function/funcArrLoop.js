const points = [33, 21, 45, 65, 34, 7, 96, 5];
const numbers = [54, 6, 56, 3, 21, 67, 21, 4];

function sumOfPoints(num) {
    let sum = 0;
    for (let number of num) {
        sum += number;
    }
    return sum;
}

const sumResult = sumOfPoints(numbers);
console.log(sumResult);