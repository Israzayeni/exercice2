document.addEventListener("DOMContentLoaded", function () {
    const colorInput = document.querySelector("#colorInput");
    const sizeInput = document.querySelector("#sizeInput");
    const fontSelect = document.querySelector("#fontSelect");
    const textToEdit = document.querySelector("#textToEdit");

    function updateTextStyle() {
        textToEdit.style.color = colorInput.value;
        textToEdit.style.fontSize = sizeInput.value + "px";
        textToEdit.style.fontFamily = fontSelect.value;
    }

    colorInput.addEventListener("input", updateTextStyle);
    sizeInput.addEventListener("input", updateTextStyle);
    fontSelect.addEventListener("change", updateTextStyle);
});


