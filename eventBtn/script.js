document.getElementById("event-more").addEventListener("mouseenter", function () {
    console.log("clicked");
})

document.getElementById("input-box").addEventListener("focus", function () {
    console.log("Input box clicked");
})

document.getElementById("input-box").addEventListener("blur", function () {
    console.log("input box out-site.");
})


document.getElementById("delete-text").addEventListener("click", function () {
    const textTitle = document.getElementById("text-title");
    textTitle.style.display = "none";
})

document.getElementById("input-text").addEventListener("keyup", function (even) {
    const inputTextValue = even.target.value;
    const deleteText = document.getElementById("delete-text");
    if (inputTextValue === "delete") {
        deleteText.removeAttribute("disabled");
    } else {
        deleteText.setAttribute("disabled", true);
    }
})