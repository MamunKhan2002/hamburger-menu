document.getElementById("item-2").addEventListener("click", function (event) {
    console.log("item-2 Checked");
    event.stopPropagation();

})

document.getElementById('ul-list').addEventListener("click", function (event) {
    console.log("Clicked ul-list");
    event.stopPropagation();
})
document.getElementById("list-container").addEventListener("click", function () {
    console.log("Clicked list-container");
})