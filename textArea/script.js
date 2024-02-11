document.getElementById("btn-click").addEventListener("click", function () {
    const textArea = document.getElementById("text-area");
    const textAreaValue = textArea.value;
    const commentArea = document.getElementById("comment-area");
    const p = document.createElement("p");
    p = textAreaValue;
    commentArea.appendChild(p);
    textArea.value = "";

})