/*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd*/


function odd_even(num) {
    // console.log(num);
    if (num % 2 === 0) {
        // console.log('Even');
        let Even = `Even: ${num}`;
        return Even;
    } else {
        // console.log('Odd');
        let Odd = `Odd: ${num}`;
        return Odd;
    }
}

const oddNum = odd_even(7);
console.log(oddNum);
console.log('----------');
const EvenNum = odd_even(8);
console.log(EvenNum);