function inchToFeet(inch) {
    // console.log(inch);
    const feet = inch / 12;
    const inchNumber = inch % 12;
    const feetNumber = parseInt(feet);
    const result = `${feetNumber} ft ${inchNumber}`;
    return result;
}

const height = inchToFeet(75);
// console.log(height);

function mileToKm(mile) {
    const kilometre = mile * 1.60934;
    return kilometre;
}

const km = mileToKm(55);
console.log(km);