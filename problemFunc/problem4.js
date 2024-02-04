/*Generate a random number between 10 to 20.*/

function randomNum(max, min) {
    // console.log(max, min);
    const randomResult = Math.round(Math.random() * (max - min + 1) + min);
    return randomResult;
}


const randomResult = randomNum(20, 10);
console.log(randomResult);