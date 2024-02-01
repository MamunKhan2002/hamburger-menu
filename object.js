// const myPet = {
//     name: 'Putie',
//     age: 2,
//     color: 'White',
//     isMale: true,
//     'sound': 'meo meow'
// };
// myPet.color = 'Black'
// let myPetAge = myPet['age'];
// console.log(myPet['sound']);

// for (key in myPet) {
//     console.log(`${key} : ${myPet[key]}`);
// }

const student = {
    name: {
        firstName: 'Mamun',
        lastName: 'Khan',
    },
    age: 24,
    subject: ['Bangla', 'English', 'Math'],
    isMale: true
};
// console.log(student);

for (key in student.subject) {
    console.log(student.subject[key]);
}