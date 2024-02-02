function textLen(str) {
    let len = str.length;
    if (len % 2 === 0) {
        return `Even ${len}`
    } else {
        return `Odd ${len}`
    }

}

const textOdd = textLen('Dhaka');
const textEven = textLen('Faka');
// console.log(textOdd);
// console.log('-----------');
// console.log(textEven);

// -----------------------------------------

function doubleTriple(number, double) {
    if (double) {
        let doubleTwo = number * 2;
        return doubleTwo;
    } else {
        let doubleThree = number * 3;
        return doubleThree;
    }
}

const text = doubleTriple(8, false)
// console.log(text);

// -----------------------------------

function arrayLen(arr) {
    let arrLen = arr.length;
    return arrLen;

}

const len = arrayLen([2, 32, 54, 6, 78, 9]);
// console.log(len);

function arrSum(arr) {
    let arrLen = arr.length;
    // console.log(arrLen);
    let sum = 0;
    for (let array of arr) {
        sum += array;
        // console.log(array)
        
    }
    return sum;
}

const result = arrSum([55, 4, 5, 23, 7, 89, 7, 86]);
console.log(result);