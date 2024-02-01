const number = [1, 200, 30, 4, 5, 5, 7, 8, 9];

// let rev = number.reverse();
// console.log(rev);

// --------------two way
let i = 0;
let reverse = [];
while (i < number.length) {
    let num = number[i];
    reverse.unshift(num);
    i++;
}
// console.log(reverse);

// ------------Three way
let rev = [];
for (let i = 0; i < number.length; i++) {
    // console.log(number[i]);
    let num = number[i];
    rev.push(num);
}
console.log(rev);

// ---------Four Way

for (let i = number.length - 1; i >= 0; i--) {
    // console.log(number[i]);
}