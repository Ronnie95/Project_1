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
const begin = document.querySelector('.begin');
const q1 = document.querySelector('.q1');
const nxtb = document.querySelector('.nxtb');
const q2 = document.querySelector('.q2');
const nxtc = document.querySelector('.nxtc');
const q3 = document.querySelector('.q3');

yangR.addEventListener("click", (event) => changeRed(event));
yangR.addEventListener("click", (event) => newHtml(event));

amazon.addEventListener("click", (event) => changeRed(event));
amazon.addEventListener("click", (event) => newHtml(event));

yenR.addEventListener("click", (event) => changeRed(event));
yenR.addEventListener("click", (event) => newHtml(event));

miss.addEventListener("click", (event) => changeRed(event));
miss.addEventListener("click", (event) => newHtml(event));

nileR.addEventListener("click", (event) => correct(event))
nileR.addEventListener("click", (event) => correctAnswer(event))

function changeRed() {
    event.target.style.backgroundColor = "red";
}
function correctAnswer() {
    event.target.style.backgroundColor = "green";
}

function newHtml(event) {
    event.target.innerHTML = "Sorry that's wrong"
   
  }

  function correct() {
    event.target.innerHTML = "That's Right!!";
}

function lastCorrect() {
    event.target.innerHTML = "Congrats you beat the round!!"
}

basketBall.addEventListener("click", (event) => changeRed(event));
basketBall.addEventListener("click", (event) => newHtml(event));

tennis.addEventListener("click", (event) => changeRed(event));
tennis.addEventListener("click", (event) => newHtml(event));

hock.addEventListener("click", (event) => changeRed(event));
hock.addEventListener("click", (event) => newHtml(event));

lax.addEventListener("click", (event) => changeRed(event));
lax.addEventListener("click", (event) => newHtml(event));

fut.addEventListener("click", (event) => correctAnswer(event))
fut.addEventListener("click", (event) => correct(event))



rob.addEventListener("click", (event) => changeRed(event));
rob.addEventListener("click", (event) => newHtml(event));

adam.addEventListener("click", (event) => changeRed(event));
adam.addEventListener("click", (event) => newHtml(event));

idris.addEventListener("click", (event) => changeRed(event));
idris.addEventListener("click", (event) => newHtml(event));

denzel.addEventListener("click", (event) => changeRed(event));
denzel.addEventListener("click", (event) => newHtml(event));

leo.addEventListener("click", (event) => correctAnswer(event))
leo.addEventListener("click", (event) => lastCorrect(event))


begin.addEventListener("click", () => {
    if(q1.style.display == "none"){
        q1.style.display = "block";
    }
    else{
        q1.style.display = "none";
    }
})


nileR.addEventListener("click", () => {
    if(nxtb.style.display == "none"){
        nxtb.style.display = "block";
    }
    else{
        nxtb.style.display = "none";
    }
})

nxtb.addEventListener("click", () => {
    if(q2.style.display == "none"){
        q2.style.display = "block";
    }
    else{
        q2.style.display = "none";
    }
})

fut.addEventListener("click", () => {
    if(nxtc.style.display == "none"){
        nxtc.style.display = "block";
    }
    else{
        nxtc.style.display = "none";
    }
})


nxtc.addEventListener("click", () => {
    if(q3.style.display == "none"){
        q3.style.display = "block";
    }
    else{
        q3.style.display = "none";
    }
})
