/*Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/

function makeAvg(arr) {
    let len = arr.length;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let array = arr[i];
        sum += array;
    }
    let average = sum / len;
    return average;
}

const arrayLenAvg = makeAvg([4, 23, 13, 78, 43, 21]);
console.log(arrayLenAvg);
