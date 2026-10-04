const text1 = "Texto 1";
const text2 = "Texto 2";

const text = document.getElementById("text");
const button = document.getElementById("myButton");

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (text.textContent === text1) {
        text.textContent = text2;
    } else {
        text.textContent = text1;
    }   
});