/**
 * Find a heights number in an Array const points = [5, 63, 24, 5, 67, 32, 9, 43];
 */

const points = [5, 63, 24, 5, 67, 32, 9, 43];

function getMaxNumber(arrays) {
    if (!Array.isArray(arrays)) {
        const text = 'Please provide an Arrays.';
        return text;
    }
    let maxNumber = arrays[0];
    for (const arr of arrays) {
        if (arr > maxNumber) {
            maxNumber = arr
        }
    }
    return maxNumber;
}

const maxNum = getMaxNumber({ points });
console.log(maxNum);