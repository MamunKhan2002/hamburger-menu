const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);
for (const li of liCollection) {
    // console.log(li.innerText);
}

const allHeading = document.getElementsByTagName("h1");


const secTitle = document.getElementById('section-title1');
secTitle.innerText = 'Dom is changings';
secTitle.style.color = "pink";

const li = document.createElement("li");
li.innerText = 'About';
const ul = document.getElementById("ul-list");
ul.appendChild(li);

const li2 = document.createElement("li");
li2.innerText = 'About';
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = 'About';
ul.appendChild(li3)

const li4 = document.createElement("li");
li4.innerText = 'About';
ul.appendChild(li4)

const li5 = document.createElement("li");
li5.innerText = 'About';
ul.appendChild(li5)

console.log(ul.parentNode);

