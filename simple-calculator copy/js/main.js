// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

let total = 0;

let makeZero = document
  .querySelector("#pumpkin")
  .addEventListener("click", funcMakeZero);
let plusThree = document
  .querySelector("#dominosPizza")
  .addEventListener("click", funcPlusThree);
let plusNine = document
  .querySelector("#zebra")
  .addEventListener("click", funcPlusNine);
let minusTwo = document
  .querySelector("#cantThinkOfAnything")
  .addEventListener("click", funcMinusTwo);

function funcMakeZero() {
  total = 0;
  document.querySelector("#pumpkin").style.backgroundColor = "red";
  document.querySelector("#placeToPutResult").innerText = total;
  document.querySelector("#placeToPutResult").style.backgroundColor = "red";
  document.querySelector("#placeToPutResult").style.color = "black";
}

function funcPlusThree() {
  total += 3;
  document.querySelector("#dominosPizza").style.backgroundColor = "blue";
  document.querySelector("#placeToPutResult").innerText = total;
  document.querySelector("#placeToPutResult").style.backgroundColor = "blue";
  document.querySelector("#placeToPutResult").style.color = "white";
}

function funcPlusNine() {
  total += 9;
  document.querySelector("#zebra").style.backgroundColor = "green";
  document.querySelector("#placeToPutResult").innerText = total;
  document.querySelector("#placeToPutResult").style.backgroundColor = "green";
  document.querySelector("#placeToPutResult").style.color = "black";
}

function funcMinusTwo() {
  total -= 2;
  document.querySelector("#cantThinkOfAnything").style.backgroundColor =
    "yellow";
  document.querySelector("#placeToPutResult").innerText = total;
  document.querySelector("#placeToPutResult").style.backgroundColor = "yellow";
  document.querySelector("#placeToPutResult").style.color = "black";
}

var filePath = "/background-pciker/warp.png";
document.querySelector("h2").addEventListener("click", warp);

function warp() {
  document.body.classList.toggle("background");
}
