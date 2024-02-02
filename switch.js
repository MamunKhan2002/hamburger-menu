/*

const day = 3;

switch (day) {
    case 1:
        console.log('Saturday');
        break;
    case 2:
        console.log('Sunday');
        break;
    case 3:
        console.log('Monday');
        break;
    case 4:
        console.log('Tuesday');
        break;
    case 5:
        console.log('Wednesday');
        break;
    case 6:
        console.log('Thursday');
        break;
    case 7:
        console.log('Friday');
        break;
    default: {
        console.log('Invalid Day');
    }
}

*/

/**
 * let lightCondition = !false;

switch (true) {
    case lightCondition:
        console.log('Light On');
        break;
    default: {
        console.log('Light Off');
    }
}
 */

function calcGradeing(marks) {
    let result;
    switch (true) {
        case (marks <= 100 && marks >= 80):
            result = ('You got (A+)');
            break;
        case (marks <= 79 && marks >= 60):
            result = ('You got (A)');
            break;
        case (marks <= 59 && marks >= 50):
            result = ('You got (A-)');
            break;
        case (marks <= 49 && marks >= 40):
            result = ('You got (B)');
            break;
        case (marks <= 39 && marks >= 33):
            // result = ('Your Passed Mark:', marks);
            result = (`Your Passed Mark: ${marks}`);
            break;
        case (marks < 33):
            result = ('You fail');
            break;
        default: {
            return 'Invalid Score';
        }
    }
    return result;
}


let firstPerson = calcGradeing(55);
let firstPerson2 = calcGradeing(33);
let firstPerson3 = calcGradeing('dahdsadh');
console.log(firstPerson);
console.log(firstPerson2);
console.log(firstPerson3);