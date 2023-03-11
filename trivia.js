const firstQ = document.getElementById("red")
const purple = document.querySelector('.purple');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const arkansas = document.querySelector('.arkansas');
const california = document.querySelector('.california');
const alabama = document.querySelector('.alabama');
const maine = document.querySelector('.maine');
const tv = document.querySelector('.tv');
const Bananas = document.querySelector('.Bananas');
const clothes = document.querySelector('.clothes');
const toothpaste = document.querySelector('.toothpaste');
const Lemons = document.querySelector('.lemons');
const begin = document.querySelector('.begin');
const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');
const nxt = document.querySelector('.nxt')
const nxt1 = document.querySelector('.nxt1')


firstQ.addEventListener("click", (event) => changeRed(event));
firstQ.addEventListener("click", (event) => newHtml(event));

function changeRed(event) {
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

function correctAnswer(event) {
    event.target.style.backgroundColor = "green";
}
function correct(event) {
    event.target.innerHTML = "Correct";

}
function lastCorrect(event) {
    event.target.innerHTML = "Congrats you won the game!!"
}


arkansas.addEventListener("click", (event) => newHtml(event));
arkansas.addEventListener("click", (event) => changeRed(event));

california.addEventListener("click", (event) => newHtml(event));
california.addEventListener("click", (event) => changeRed(event));

maine.addEventListener("click", (event) => newHtml(event));
maine.addEventListener("click", (event) => changeRed(event));

alabama.addEventListener("click", (event) => correctAnswer(event))
alabama.addEventListener("click", (event) => correct(event))

Bananas.addEventListener("click", (event) => correctAnswer(event))
Bananas.addEventListener("click", (event) => lastCorrect(event))

tv.addEventListener("click", (event) => newHtml(event));
tv.addEventListener("click", (event) => changeRed(event));

clothes.addEventListener("click", (event) => newHtml(event));
clothes.addEventListener("click", (event) => changeRed(event));

toothpaste.addEventListener("click", (event) => newHtml(event));
toothpaste.addEventListener("click", (event) => changeRed(event));

Lemons.addEventListener("click", (event) => newHtml(event));
Lemons.addEventListener("click", (event) => changeRed(event));

begin.addEventListener("click", () => {
    if(question1.style.display == "none"){
        question1.style.display = "block";
    }
    else{
        question1.style.display = "none";
    }
})

green.addEventListener("click", () => {
    if(nxt.style.display == "none"){
        nxt.style.display = "block";
    }
    else{
        nxt.style.display = "none";
    }
})

nxt.addEventListener("click", () => {
    if(question2.style.display == "none"){
        question2.style.display = "block";
    }
    else{
        question2.style.display = "none";
    }
})

alabama.addEventListener("click", () => {
    if(nxt1.style.display == "none"){
        nxt1.style.display = "block";
    }
    else{
        nxt1.style.display = "none";
    }
})

nxt1.addEventListener("click", () => {
    if(question3.style.display == "none"){
        question3.style.display = "block";
    }
    else{
        question3.style.display = "none";
    }
})

