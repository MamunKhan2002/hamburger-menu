/*Task-3:
Write a function to count the number of vowels in a string.
*/

const text = 'Write a function to count the number of vowels in a string.';

function textVowels(value) {
    const simpleText = text.toLowerCase()
    const countVowels = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < simpleText.length; i++) {
        if (vowels.includes(simpleText[i]) === true) {
            countVowels.push(simpleText[i])
        }
    }
    const vowelsCountLen = countVowels.length;
    return vowelsCountLen;
}


const vowelsResult = textVowels(text);
console.log(vowelsResult);