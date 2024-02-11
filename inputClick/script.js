function changeText() {
    const titleText = document.getElementById("title-text");
    titleText.innerText = "Hello World!";
}

document.getElementById("change-text").addEventListener("click", function () {
    const titleText = document.getElementById("title-text");
    titleText.innerText = "How are you Man!!!";
})

