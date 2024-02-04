/*Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming*/

function findLongestWord(input) {
    const words = input.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const text = 'I am learning Programming to become a programmer';
const longestWord = findLongestWord(text);
console.log(longestWord);