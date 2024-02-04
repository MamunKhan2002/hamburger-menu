// return the uniq value in array

const names = ['abul', 'babul', 'kabul', 'abul', 'cabul', 'babul'];

function uniqNames(value) {
    const uniqArr = [];
    for (let nam of names) {
        if (uniqArr.includes(nam) === false) {
            uniqArr.push(nam);
        }
    }
    return uniqArr;
}
const uniqArray = uniqNames(names);
// console.log(uniqArray);


// --------------------------------------------




function uniqNumbers(value) {
    // console.log(value);
    const uniqNum = [];
    for (let i = 0; i < value.length; i++) {
        // console.log(value[i]);
        if (uniqNum.includes(value[i]) === false) {
            uniqNum.push(value[i]);
        }
    }
    return uniqNum;
}

const uniqNum = uniqNumbers(numbers);
console.log(uniqNum);