document.getElementById("btn-text").addEventListener("click", function () {
    const inputText = document.getElementById("input-text");
    const inputValue = inputText.value;
    // console.log(inputValue);
    const headingText = document.getElementById("heading-text");
    headingText.innerText = inputValue;
    inputText.value = "";
})