const numbers = [65, 4, 32, 11, 5, 12, 54, 67];

function sumOfEven(num) {
    let EvenNum = [];
    let sum = 0;
    for (let number of num) {
        if (number % 2 === 0) {
            EvenNum.push(number);
            sum += number;
        }
    }
    // return sum;
    return {EvenNum, sum};
}

const evenResult = sumOfEven(numbers);
console.log(evenResult);