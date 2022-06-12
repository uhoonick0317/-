const timeDiv = document.getElementById("clock");
const todayDiv = document.getElementById("today");



function getTime() {
  let now = new Date();
  let hour = now.getHours(); //0-23시
  let minute = now.getMinutes(); //0-59분
  let second = now.getSeconds(); //0-59초
  let noon = "오전";
  if (hour > 11) {
    noon = "오후";
    hour = hour - 12;
    if (hour == 0) {
      hour = 12;
    }
  }


  timeDiv.textContent =
    noon +
    " " +
    formatNumber(hour) +
    ":" +
    formatNumber(minute) +
    ":" +
    formatNumber(second);
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear(); //0-23시
  const month = date.getMonth()+1; //0-59분
  const day = date.getDate(); //0-59초
  const dayNumber = date.getDay();
  const dayList = ["일","월","화","수","목","금","토"]
  const daylabel=(dayList[date.getDay()]+'요일');
  todayDiv.textContent = formatNumber(year) + "-" + formatNumber(month) + "-" + formatNumber(day) + daylabel;
}


getDate();
getTime();
setInterval(getTime, 1000);


function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
