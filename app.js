const prevBtnELement = document.getElementById("<");
const nextBtnElement = document.getElementById(">");
const tableElement = document.getElementById("calendar");
const yearElement = document.getElementById("year");
const monthElement = document.getElementById("month");

const date = new Date();
// 이번달의 마지막날로 설정
console.log(date.getDate());
// 달의 첫날과 마지막 날을
let firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
// 요일과 일을 비교해서 시작 요일을 1로 해주기 위해 요일 구함
let day = firstDate.getDay();

let monthCal = 0;
function prevMon() {
  monthCal--;
  firstDate = new Date(date.getFullYear(), date.getMonth() + monthCal, 1);
  lastDate = new Date(date.getFullYear(), date.getMonth() + 1 + monthCal, 0);
  day = firstDate.getDay();
  getCalendar();
}

prevBtnELement.addEventListener("click", prevMon);

function nextMon() {
  monthCal++;
  firstDate = new Date(date.getFullYear(), date.getMonth() + monthCal, 1);
  lastDate = new Date(date.getFullYear(), date.getMonth() + 1 + monthCal, 0);
  day = firstDate.getDay();
  getCalendar();
}

nextBtnElement.addEventListener("click", nextMon);

// 이전, 다음 버튼 누르면 똑같은 메커니즘으로 날짜 불러옴
yearElement.textContent = firstDate.getFullYear();
monthElement.textContent = firstDate.getMonth() + 1 + "월";

let cnt = 1;
let flag = false;
for (let i = 0; i < 6; i++) {
  if (cnt <= lastDate.getDate()) {
    const newRow = tableElement.insertRow(i + 1);
    for (let j = 0; j < 7; j++) {
      const newCell = newRow.insertCell(j);
      // 요일과 첫째주 시작일을 비교해 같으면 그 날짜부터 시작하기 위해 boolean값 넣어줌
      if (day === j) flag = true;
      // 마지막 날까지 출력
      if (cnt <= lastDate.getDate() && flag === true) {
        // 당일에 표시하기위해 class 추가
        if (
          date.getDate() === cnt &&
          date.getMonth() === firstDate.getMonth() &&
          date.getFullYear() === firstDate.getFullYear()
        ) {
          newCell.classList.add("today");
        }
        newCell.textContent = cnt++;
      }
    }
  }
}

function getCalendar(e) {
  //기존 월 삭제
  while (tableElement.rows.length > 1) {
    tableElement.deleteRow(tableElement.rows.length - 1);
  }

  yearElement.textContent = firstDate.getFullYear();
  monthElement.textContent = firstDate.getMonth() + 1 + "월";

  cnt = 1;
  flag = false;

  for (let i = 0; i < 6; i++) {
    if (cnt <= lastDate.getDate()) {
      const newRow = tableElement.insertRow(i + 1);
      for (let j = 0; j < 7; j++) {
        const newCell = newRow.insertCell(j);
        if (day === j) flag = true;
        if (cnt <= lastDate.getDate() && flag === true) {
          if (
            date.getDate() === cnt &&
            date.getMonth() === firstDate.getMonth() &&
            date.getFullYear() === firstDate.getFullYear()
          ) {
            newCell.classList.add("today");
          }
          newCell.textContent = cnt++;
        }
      }
    }
  }
}
