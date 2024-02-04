const rima = 78;
const mim = 86;
const tithi = 68;


let getMaxResult;
if (rima > mim && rima > tithi) {
    getMaxResult = rima;
} else if (mim > rima && mim > tithi) {
    getMaxResult = mim;
} else {
    getMaxResult = tithi;
}

console.log(getMaxResult);