const num1 = 81;
const num2 = 17;

function oddNum(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;

}

const result = oddNum(num1);
const result2 = oddNum(num2);
console.log(result);
console.log(result2);