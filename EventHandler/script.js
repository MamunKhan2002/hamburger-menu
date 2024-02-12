const textBox = document.getElementById("text-box");
document.getElementById("btn-delete").addEventListener("click", function (event) {
    const headTitle = document.getElementById("title-text");
    headTitle.style.display = "none";
    textBox.value = "";
})

document.getElementById("text-box").addEventListener("keyup", function (event) {
    const btnDelete = document.getElementById("btn-delete");
    const textBoxValue = event.target.value;
    if (textBoxValue === "delete") {
        btnDelete.removeAttribute("disabled")
    } else {
        btnDelete.setAttribute("disabled", true)
    }
})