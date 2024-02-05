/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const numbers = [167, 190, 120, 165, 137];

function getLowestNum(arrays) {
    let lowestNum = arrays[0];
    for (const arr of arrays) {
        // console.log(arr);
        if (arr > lowestNum) {
            lowestNum = arr;
        }
    }
    return lowestNum;
}

const lowestNumber = getLowestNum(numbers);
console.log(lowestNumber);
