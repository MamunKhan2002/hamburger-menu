const number1 = 6;
const number2 = 4;

function getAddNum(num1, num2) {
    // console.log(typeof num1);
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        const text = 'Please provide a number';
        return text;
    }
    const sum = num1 + num2;
    return sum;
}

const addNumResult = getAddNum(number1, number2);
console.log(addNumResult);