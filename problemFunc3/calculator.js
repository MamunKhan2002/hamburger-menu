function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

function subs(num1, num2) {
    const result = num1 - num2;
    return result;
}

function multi(num1, num2) {
    const result = num1 / num2;
    return result;
}

function dived(num1, num2) {
    const result = num1 % num2;
    return result;
}

function calculator(a, b, operation) {
    // console.log(a, b, operation);
    if (operation === 'add') {
        return add(a, b);
    } else if (operation === 'subs') {
        return subs(a, b);
    } else if (operation === 'multi') {
        return multi(a, b);
    } else if (operation === 'dived') {
        return dived(a, b);
    } else {
        return 'Only calculate add, sub, multi, divide';
    }
}

const calculatorResult = calculator(7, 'ewrwe', 'dived');
console.log(calculatorResult);