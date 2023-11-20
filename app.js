const monthElement = document.getElementById("month");
const prevBtnELement = document.getElementById("<");
const nextBtnElement = document.getElementById(">");
const tableElement = document.getElementById("calendar");

const month = new Date().getMonth()+1;

monthElement.textContent = month+'월';
let cnt = 0;
function prevMon(event) {
  if(month + cnt <= 1){
    console.log(cnt);
  }else{
    monthElement.textContent = month+ (--cnt)+'월';
}
}

prevBtnELement.addEventListener("click", prevMon);

function nextMon(event) {
  monthElement.textContent = month + (++cnt) + '월';
}

nextBtnElement.addEventListener("click", nextMon);

let date = new Date().getMonth();
console.log(date);
// 오늘 날짜 알아서 달이랑 년 월 출력
// 이전, 다음 버튼 누르면 똑같은 메커니즘으로 날짜 불러옴

for (let i = 0; i < 6; i++) {
  const newRow = tableElement.insertRow();
  for (let i = 0; i < 7; i++) {
    const newCell1 = newRow.insertCell(i);
    newCell1.textContent = i + 1;
  }
}
