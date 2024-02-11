/**option 2 Final use*/
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// ========================================

/**option 3*/
const makePink = document.getElementById('btnPink');
makePink.onclick = bgPink;

function bgPink() {
    document.body.style.backgroundColor = "pink";
}


const makeYellow = document.getElementById('btnYellow');
makeYellow.onclick = function bgYellow() {
    document.body.style.backgroundColor = 'Yellow';
    // document.body.style.transition = '0.3s';

}
// ========================================

/*option 4 */

const makeGoldenRod = document.getElementById('btn-goldenrod');

makeGoldenRod.addEventListener("click", bgGoldenRod);

function bgGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
}

/*option 4 Another*/

const makeGreenColor = document.getElementById('Make_Green');
makeGreenColor.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
})

/*option 4 Another but final use*/

document.getElementById('make-purple').addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
})