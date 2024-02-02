/*Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:'TomTimTinTik'*/


let text = ['Tom', 'Tim', 'Tin', 'Tik'];
let textStr = ' ';
for (let x of text) {
    let text2 = x;
    textStr += x;

};

console.log(textStr);