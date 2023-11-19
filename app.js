// 1930년 1월 1일은 수요일
// 윤년일때는 2월 29일까지
//
const monthElement = document.getElementById("month");
const prevBtnELement = document.getElementById("<");
const nextBtnElement = document.getElementById(">");
const ulElement = document.getElementById("calendar");

function prevMon(event) {
  alert("미구현");
}

prevBtnELement.addEventListener("click", prevMon);

function nextMon(event) {
  alert("미구현");
}

nextBtnElement.addEventListener("click", nextMon);

const newListElement = document.createAttribute("li");
// const newSpanElement = document.createAttribute("span");
// newSpanElement.textContent = 1;
// newListElement.appendChild(newSpanElement);
ulElement.appendChild(newListElement);

// let day = 1;
// for(let i=0; i<7; i++){
//   const newListElement = document.createAttribute('li');

//   for(let j=0; j<6; j++){
//     if(day === 32) break;
//     const newSpanElement = document.createAttribute('span');
//     newSpanElement.textContent = day++;
//     newListElement.appendChild(newSpanElement);

//   }
// }
