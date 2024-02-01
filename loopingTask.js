// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output: ['orange', 'yellow', 'green', 'blue', 'red']


const color = ['red', 'blue', 'green', 'yellow', 'orange'];
let i = 0;
let rev = [];
while (i < color.length) {
    let paint = color[i];
    rev.unshift(paint)
    i++
    // console.log(paint);
}
// console.log(rev);
let reverse = [];
for (let i = 0; i < color.length; i++) {
    // console.log(color[i]);
    let paint = color[i];
    reverse.unshift(paint);

}

// console.log(reverse);

let reverseColor = [];
for (let i = color.length - 1; i >= 0; i--) {
    // console.log(i);
    // console.log(color[i]);
    let paint = color[i];
    reverseColor.push(paint);
}
console.log(reverseColor);
