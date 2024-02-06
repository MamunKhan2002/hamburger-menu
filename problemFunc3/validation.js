function getPersonDetails(info) {
    if (typeof info !== 'object') {
        const text = 'Please provide an object.';
        return text;
    } else if (typeof info.age !== 'number') {
        const text = 'Please enter the age of numbers.';
        return text;
    } else if (typeof info.name !== 'string') {
        const text = 'Please enter name of the String.'
    }
    return `My name is ${info.name} and I am ${info.age} years old.`
}

const personDetails = getPersonDetails( [name: '55', age: 34] );
console.log(personDetails);