const nileR = document.querySelector('.nile');
const miss = document.querySelector('.miss')
const yangR = document.querySelector('.yang');
const amazon = document.querySelector('.amazon');
const yenR = document.querySelector('.yen');
const fut = document.querySelector('.futbol');
const basketBall = document.querySelector('.bas');
const tennis = document.querySelector('.ten');
const hock = document.querySelector('.hockey');
const lax = document.querySelector('.lax');
const rob = document.querySelector('.rob');
const adam = document.querySelector('.adam');
const leo = document.querySelector('.leo');
const denzel = document.querySelector('.denzel');
const idris = document.querySelector('.idris');

yangR.addEventListener("click", (event) => changeRed(event));
amazon.addEventListener("click", (event) => changeRed(event));
yenR.addEventListener("click", (event) => changeRed(event));
miss.addEventListener("click", (event) => changeRed(event));
yangR.addEventListener("click", (event) => changeRed(event));
nileR.addEventListener("click", (event) => correctAnswer(event))

function changeRed() {
    event.target.style.backgroundColor = "red";
}
function correctAnswer() {
    event.target.style.backgroundColor = "green";
}


basketBall.addEventListener("click", (event) => changeRed(event));
tennis.addEventListener("click", (event) => changeRed(event));
hock.addEventListener("click", (event) => changeRed(event));
lax.addEventListener("click", (event) => changeRed(event));
fut.addEventListener("click", (event) => correctAnswer(event))



rob.addEventListener("click", (event) => changeRed(event));
adam.addEventListener("click", (event) => changeRed(event));
idris.addEventListener("click", (event) => changeRed(event));
denzel.addEventListener("click", (event) => changeRed(event));
leo.addEventListener("click", (event) => correctAnswer(event))
