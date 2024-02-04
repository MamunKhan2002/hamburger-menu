const height = [54, 6, 62, 43, 14, 54, 64, 34, 34];


function getLongest(numbers) {
    let getLongestNum = numbers[0];
    for (const number of numbers) {
        if (number > getLongestNum) {
            getLongestNum = number;
        }
    }
    return getLongestNum;
}

const getLongestResult = getLongest(height);
console.log(getLongestResult);