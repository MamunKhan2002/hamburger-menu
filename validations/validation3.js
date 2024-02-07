function getPerson(object) {
    if (typeof object !== 'object' || Array.isArray(object)) {
        return 'Please provide an object.';
    } else if (typeof object.name !== "string" || !isNaN(object.name)) {
        return "Please provide a string";
    } else if (typeof object.age !== "number") {
        return "please provide a number..";
    }
    return `My name is ${object.name}. I am ${object.age} years old.`
}


const personDetails = getPerson({name : "Mamun Khan"});
console.log(personDetails);