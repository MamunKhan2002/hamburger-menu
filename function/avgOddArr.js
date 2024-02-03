const points = [56, 34, 23, 12, 54, 214, 3,];

function avgEvenPoint(value) {
    const evenPoints = [];
    let sum = 0;
    for (let point of points) {
        if (point % 2 === 0) {
            evenPoints.push(point)
            sum += point;
        }
    }
    const len = evenPoints.length;
    const average = sum / len;
    return average;
}

const avgEvenPointResult = avgEvenPoint(points);
console.log('Avg-Even-Point-Result Is: ', avgEvenPointResult);