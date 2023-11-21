const prevBtnELement = document.getElementById("<");
const nextBtnElement = document.getElementById(">");
const tableElement = document.getElementById("calendar");
const yearElement = document.getElementById("year");
const monthElement = document.getElementById("month");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();

date.setMonth(date.getMonth() + 1);
date.setDate(0);
let lastDate = date.getDate();

let monthCal = 0;
function prevMon(event) {
  getCalendar(--monthCal);
}

prevBtnELement.addEventListener("click", prevMon);

function nextMon(event) {
  getCalendar(++monthCal);
}

nextBtnElement.addEventListener("click", nextMon);

// 오늘 날짜 알아서 달이랑 년 월 출력
// 이전, 다음 버튼 누르면 똑같은 메커니즘으로 날짜 불러옴
yearElement.textContent = year;
monthElement.textContent = month + "월";

let cnt = 1;
let flag = false;
for (let i = 0; i < 6; i++) {
  if (cnt <= lastDate) {
    const newRow = tableElement.insertRow(i + 1);
    for (let j = 0; j < 7; j++) {
      const newCell = newRow.insertCell(j);
      if (day === j) flag = true;
      if (cnt <= lastDate && flag === true) {
        newCell.textContent = cnt++;
      }
    }
  }
}

function getCalendar(e) {
  while (tableElement.rows.length > 1) {
    tableElement.deleteRow(tableElement.rows.length - 1);
  }

  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1 + e;
  day = date.getDay();

  yearElement.textContent = year;
  monthElement.textContent = month + "월";

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  lastDate = date.getDate();

  cnt = 1;
  flag = false;
  console.dir(tableElement);
  for (let i = 0; i < 6; i++) {
    if (cnt <= lastDate) {
      const newRow = tableElement.insertRow(i + 1);
      for (let j = 0; j < 7; j++) {
        const newCell = newRow.insertCell(j);
        if (day === j) flag = true;
        if (cnt <= lastDate && flag === true) {
          newCell.textContent = cnt++;
        }
      }
    }
  }
}
