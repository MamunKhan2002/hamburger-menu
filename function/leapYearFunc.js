function leapYear(years) {
    let result;
    if (years % 100 !== 0 && years % 4 === 0) {
        result = `${years} is a leap year.`;
    } else if (years % 400 === 0) {
        result = `${years} is a leap year.`;
    } else {
        result = `${years} is a not leap year.`;

    }
    return result;
}

const ISleapYear = leapYear(2025);
console.log(ISleapYear);