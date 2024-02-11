// const items = document.getElementsByClassName("item");

// for (const item of items) {
//     item.addEventListener("click", function (event) {
//         item.parentNode.removeChild(event.target)
//     })
// }

document.getElementById("ul-list").addEventListener("click", function (event) {
    //    console.log(event.target);
    event.target.parentNode.removeChild(event.target)
})

document.getElementById("btn-post").addEventListener("click", function () {
    const li = document.createElement("li");
    const ulList = document.getElementById("ul-list");
    li.innerText = "How are you?";
    ulList.appendChild(li);
    li.classList.add("item")
})