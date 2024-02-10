const main = document.querySelector('main');

const section = document.createElement('section');
main.appendChild(section);

const div = document.createElement('div');
section.appendChild(div);

const ul = document.createElement('ul');
div.appendChild(ul);
ul.style.listStyle = "none";
ul.style.display = 'flex';
ul.style.gap = '20px';
ul.style.alignItems = 'center';


const li1 = document.createElement('li');
li1.innerText = 'Home';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Skill';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Tutorials';
li3.id = 'middle';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'About';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'Contact';
ul.appendChild(li5);

const middle = document.querySelector('#middle');

middle.style.color = 'red';
middle.style.fontSize = "40px";

middle.nextElementSibling.style.fontSize = "30px";
middle.nextElementSibling.style.color = 'blue';
middle.previousElementSibling.style.fontSize = '25px';
middle.previousElementSibling.style.color = 'green';

// ul.removeChild()


let ul_list = document.getElementsByClassName('ul_list');
// console.log(ul_list);

// ul_list.

// let liList = document.getElementsByTagName('li');

let sections = document.getElementsByClassName('sec1');
for (let section of sections) {
    // console.log(section);
    section.style.backgroundColor = "lightgrey";
    section.style.padding= '5px';
    section.style.marginBottom='10px';
    section.style.borderRadius="15px";
    section.style.width='200px'
    section.classList.add('name');
    section.classList.add('secClass');
}

sections.style.color="green"

