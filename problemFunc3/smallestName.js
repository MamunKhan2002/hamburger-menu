/*
 Find the friend with the smallest name.
 const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(names) {
    let smallName = names[0];
    for (const name of names) {
        // console.log(name);
        if (name.length < smallName.length) {
            smallName = name;
        }
    }
    return smallName;
}

const smallestName = getSmallestName(names);
console.log(smallestName);