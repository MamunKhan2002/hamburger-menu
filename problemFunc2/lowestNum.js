const points = [65, 75, 34, 12, 77, 85, 84, 43];

function getLowestPoint(numbers) {
    // console.log(numbers);
    let lowestPoint = numbers[0];
    for (const number of numbers) {
        if (number < lowestPoint) {
            lowestPoint = number;
        }
    }
    return lowestPoint;
}

const getLowestPointResult = getLowestPoint(points);
console.log(getLowestPointResult);