/**option 1 */
function makeRed() {
    document.body.style.backgroundColor = "red";
}

/**option 2 */
const makePink = document.getElementById('btnPink');
makePink.onclick = bgPink;

function bgPink() {
    document.body.style.backgroundColor = "pink";
}

/*option 3 */

const makeYellow = document.getElementById('btnYellow');
makeYellow.onclick = function bgYellow() {
    document.body.style.backgroundColor = 'Yellow';
    document.body.style.transition = '0.3s';
}