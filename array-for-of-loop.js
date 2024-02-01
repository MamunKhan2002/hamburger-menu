const friends = ["Mask", "Elin", "Alon", "Worker"];
// ------for of loop
for (const friend of friends) {
    // console.log(friend);
}

const points = [21, 34, 64, 86, 89, 5];

for (const point of points) {
    // console.log(point);
}

// ==============for loop
for (let i = 0; i < points.length; i++) {
    // console.log(`Index of points: `,i);
    // console.log(`Points of point: `, points[i]);
}

for (let n = 0; n < friends.length; n++) {
    // console.log(n);
    // console.log(friends[n]);
}


// ------while loop
let i = 0;
while (i < points.length) {
    console.log(i);
    console.log(points[i]);
    i++;
}