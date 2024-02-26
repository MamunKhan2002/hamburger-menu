
// //  map  ()
// const numbers = [1, 3, 5, 7, 9];

// const result = numbers.map(p => p + 1);
// console.log(result);


// // for of loop 
// const even = [];
// for (const num of numbers) {
//     const result = num + 1;
//     even.push(result);
// }

// console.log(even);

// const point = [33, 50, 79, 78, 90, 101, 30];

// const pointResult = point.filter(p => p % 10 === 0);

// console.log(pointResult);

// const findResult = point.find(p => p % 10 === 0);

// console.log(findResult);

// ======================

// const instructor = [
//     { name: 'Nodi', age: 28, position: 'Senior' },
//     { name: 'Akil', age: 26, position: 'Junior' },
//     { name: 'Sobuj', age: 25, position: 'Senior' }
// ];

// const insResult = instructor.filter(p => p.position === "Senior");

// console.log(insResult);

const people = [
    { name: "Meena", age: 20 },
    { name: "rina", age: 15 },
    { name: "Suchorita", age: 22 }
];


const peopleResult2 = people.map(p => p.age + 1)

// let sum = 0;
// function sumOfAge(obj) {
//     for (const x of obj) {
//         const age = x.age;
//         sum += age;
//     }
//     return sum;
// }

// const result = sumOfAge(people)

// console.log(result);


// const peopleResult = people.reduce((p, c) => p + c.age, 0);

// console.log(peopleResult);

const a = [1, 2, 3, 4, 5];
// while (a.length > 0) {
//     a.pop();
// } 

// a.splice(0, a.length);

// console.log(a);


// const person = {
//     name: "Sumit",
//     age: 34
// }

// const details = ({name, age}) => `${name} ${age}`;

// const personDetails =  details(person);

// console.log(personDetails);
