




let counter = 0;

let limit = 35;

let numberChange = 5;

const boom = document.getElementById("boom")
const counterUp = document.getElementById("increase")
const counterDown = document.getElementById("decrease")
const number = document.getElementById("numbercounter")

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

numbercounter.innerHTML = counter;

counterUp.addEventListener("click", () => {
  counter += numberChange;
  checkboom()
})


counterDown.addEventListener("click", () => {
  counter -= numberChange;
  checkboom()
})

const checkboom = () => {
  number.innerHTML = counter;
  if(counter > limit || counter < -limit){ 
    boom.innerHTML = "BOOOOOOM"
  }else{
    boom.innerHTML = ""
    
  }
}

input1.addEventListener("keypress", (e) => {
  if(e.target.value.length === 0){
  }else{
  numberChange = parseInt(e.target.value);
  localStorage.setItem("Numberchanger", numberChange)}
})

input2.addEventListener("keypress", (e) => {
  if(e.target.value.length === 0){
  }else{
  limit = parseInt(e.target.value);
  localStorage.setItem("Limiter", limit)}

})

if(localStorage.getItem("Limiter") != undefined)
{limit = parseInt(localStorage.getItem("Limiter"))
}

if(localStorage.getItem("Numberchanger") != undefined)
{numberChange = parseInt(localStorage.getItem("Numberchanger"))
}