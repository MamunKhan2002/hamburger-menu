const firstName = 'Abdullah Al';
const lastName = 'Mamun';

function getFullName(first, last) {
    if (typeof first !== 'string' || typeof last !== 'string') {
        const text = 'Please provide string ..';
        return text;
    }
    const fullName = `${first}  ${last}`;
    return fullName;
}

const fullNameResult = getFullName(firstName, lastName);
console.log(fullNameResult);