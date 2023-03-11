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
const begin = document.querySelector('.begin');
const q1 = document.querySelector('.q1');
const n = document.querySelector('.n');
const q2 = document.querySelector('.q2');
const n1 = document.querySelector('.n1');
const q3 = document.querySelector('.q3');



spiders.addEventListener("click", (event) => changeRed(event));
spiders.addEventListener("click", (event) => newHtml(event));

cats.addEventListener("click", (event) => changeRed(event));
cats.addEventListener("click", (event) => newHtml(event));

giraffes.addEventListener("click", (event) => changeRed(event));
giraffes.addEventListener("click", (event) => newHtml(event));

dogs.addEventListener("click", (event) => correctAnswer(event));
dogs.addEventListener("click", (event) => correct(event))

function changeRed() {
    event.target.style.backgroundColor = "red";
}

function correctAnswer() {
    event.target.style.backgroundColor = "green";
}


  function correct() {
    event.target.innerHTML = "Way to go that's correct";
}

function lastCorrect() {
    event.target.innerHTML = "Congrats you beat the round!!"
}

function newHtml(event) {
    event.target.innerHTML = "Unfortunately NO!"
   
  }

cognac.addEventListener("click", (event) => changeRed(event));
cognac.addEventListener("click", (event) => newHtml(event));

brandy.addEventListener("click", (event) => changeRed(event));
brandy.addEventListener("click", (event) => newHtml(event));

wine.addEventListener("click", (event) => changeRed(event));
wine.addEventListener("click", (event) => newHtml(event));

gin.addEventListener("click", (event) => correctAnswer(event))
gin.addEventListener("click", (event) => correct(event))



year.addEventListener("click", (event) => changeRed(event));
year.addEventListener("click", (event) => newHtml(event));

year2.addEventListener("click", (event) => changeRed(event));
year2.addEventListener("click", (event) => newHtml(event));

year3.addEventListener("click", (event) => changeRed(event));
year3.addEventListener("click", (event) => newHtml(event));

year1.addEventListener("click", (event) => correctAnswer(event));
year1.addEventListener("click", (event) => lastCorrect(event))

begin.addEventListener("click", () => {
    if(q1.style.display == "none"){
        q1.style.display = "block";
    }
    else{
        q1.style.display = "none";
    }
})


dogs.addEventListener("click", () => {
    if(n.style.display == "none"){
        n.style.display = "block";
    }
    else{
        n.style.display = "none";
    }
})

n.addEventListener("click", () => {
    if(q2.style.display == "none"){
        q2.style.display = "block";
    }
    else{
        q2.style.display = "none";
    }
})

gin.addEventListener("click", () => {
    if(n1.style.display == "none"){
        n1.style.display = "block";
    }
    else{
        n1.style.display = "none";
    }
})


n1.addEventListener("click", () => {
    if(q3.style.display == "none"){
        q3.style.display = "block";
    }
    else{
        q3.style.display = "none";
    }
})