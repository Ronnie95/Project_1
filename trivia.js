const firstQ = document.getElementById("red")
const purple = document.querySelector('.purple');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const arkansas = document.querySelector('.arkansas');
const new = document.querySelector('.new');
const california = document.querySelector('.california');
const alabama = document.querySelector('.alabama');
const maine = document.querySelector('.maine');
const tv = document.querySelector('.tv');
const Bananas = document.querySelector('.Bananas');
const clothes = document.querySelector('.clothes');
const toothpaste = document.querySelector('.toothpaste');
const Lemons = document.querySelector('.Lemons');


firstQ.addEventListener("click", (event) => changeRed(event));
firstQ.addEventListener("click", (event) => newHtml(event));
function changeRed() {
    event.target.style.backgroundColor = "red";
}
function newHtml(event) {
  event.target.innerHTML = "Incorrect"
 
}

purple.addEventListener("click", (event) => newHtml(event));
purple.addEventListener("click", (event) => changeRed(event));
orange.addEventListener("click", (event) => newHtml(event));
orange.addEventListener("click", (event) => changeRed(event));

green.addEventListener("click", (event) => correctAnswer(event))
green.addEventListener("click", (event) => correct(event))
function correctAnswer() {
    event.target.style.backgroundColor = "green";
}
function correct() {
    event.target.innerHTML = "Correct";
}
