

const harry = {
  firstName: "Harry",
  lastName: "Potter",
  hairColor: "black",
};



// Input example

// buttonElement.onclick = () => {
//   // Input element value accessible within
//   // an onClick listener function
//   console.log(inputElement.value);
// };

// const handleClickToGetInputValue = () => {
//   console.log(inputElement.value);
// };

// buttonElement.onclick = handleClickToGetInputValue;



/*
if(counter>limit ){ // OR LESS THAN
  // display boom message
}

*/

// localStorage.setItem("foo", "bar");

// const ten = 10;
// console.log(typeof ten);
// // JSON.stringify(ten) => "ten"
// localStorage.setItem("ten", ten);
// const newTen = localStorage.getItem("ten");
// console.log(typeof newTen);
// console.log(typeof JSON.parse(newTen));

// localStorage.setItem("foo", "bar");

// 

// buttonElement.onclick = handleClickToGetInputValue;

//localStorage.setItem("harry", JSON.stringify(harry));
//const newHarry = localStorage.getItem("harry");
//console.log(newHarry);
//console.log(typeof newHarry);
//console.log(JSON.parse(newHarry));
//console.log(typeof JSON.parse(newHarry));

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

input1.addEventListener("input", (e) => {
  handleClickToGetInputValue(e)
})

input2.addEventListener("input", (e) => {
  limiter(e)
})

const limiter = (e) => {
  limit = parseInt(e.target.value);
  localStorage.setItem("Limiter", limit)
};

if(localStorage.getItem("Limiter") != undefined)
{limit = parseInt(localStorage.getItem("Limiter"))
}



const handleClickToGetInputValue = (e) => {
  numberChange = parseInt(e.target.value);
  localStorage.setItem("Numberchanger", numberChange)
};


if(localStorage.getItem("Numberchanger") != undefined)
{numberChange = parseInt(localStorage.getItem("Numberchanger"))
}