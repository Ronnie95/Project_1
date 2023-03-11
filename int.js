const spiders = document.querySelector('.spiders');
const cats = document.querySelector('.cats');
const dogs = document.querySelector('.dogs');
const giraffes = document.querySelector('.giraffes');
const cognac = document.querySelector('.cognac');
const brandy = document.querySelector('.brandy');
const wine = document.querySelector('.wine');
const gin = document.querySelector('.gin');
const year = document.querySelector('.year');
const year1 = document.querySelector('.year1');
const year2 = document.querySelector('.year2');
const year3 = document.querySelector('.year3');



spiders.addEventListener("click", (event) => changeRed(event));
cats.addEventListener("click", (event) => changeRed(event));
giraffes.addEventListener("click", (event) => changeRed(event));
dogs.addEventListener("click", (event) => correctAnswer(event));

function changeRed() {
    event.target.style.backgroundColor = "red";
}
function correctAnswer() {
    event.target.style.backgroundColor = "green";
}

cognac.addEventListener("click", (event) => changeRed(event));
brandy.addEventListener("click", (event) => changeRed(event));
wine.addEventListener("click", (event) => changeRed(event));
gin.addEventListener("click", (event) => correctAnswer(event))

spiders.addEventListener("click", (event) => changeRed(event));
cats.addEventListener("click", (event) => changeRed(event));
giraffes.addEventListener("click", (event) => changeRed(event));
dogs.addEventListener("click", (event) => correctAnswer(event));


year.addEventListener("click", (event) => changeRed(event));
year2.addEventListener("click", (event) => changeRed(event));
year3.addEventListener("click", (event) => changeRed(event));
year1.addEventListener("click", (event) => correctAnswer(event));
