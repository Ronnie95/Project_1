const firstQ = document.getElementById("red")
const purple = document.querySelector('.purple');
const green = document.getElementsByClassName("Green");
const orange = document.getElementsByClassName("Orange");


firstQ.addEventListener("click", changeRed);

function changeRed() {
    firstQ.style.backgroundColor = "red";
}
purple.addEventListener("click", changeHtml)

function changeHtml() {
    purple.innerHTML = "wrong answer tough guy"
}