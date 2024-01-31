let person = {
    firstName: "Mamun",
    lastName: "khan",
    age: 24,
    eyeColor: "black"
}

person["profession"] = "Student";
// console.log(person);
let personKeys = Object.keys(person);
console.log("---Keys---");
console.log(personKeys);

let personValues = Object.values(person)
console.log("---Values---");
console.log(personValues);

console.log("---Iterate---");
