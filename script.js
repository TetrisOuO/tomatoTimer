const delay = (ms) => new Promise((r) => setTimeout(r, ms)); //用法: delay(1000) = 延遲1秒，此資料型態為Promise

const startStopElement = document.getElementById("startStop"); //抓取Element從ID裡尋找
let start_stop_key = true; //開始與停止判斷用
startStopElement.onclick = () => {
  //每當 startStop ID的按鈕被按到就觸發以下函數
  if (start_stop_key) {
    //看是否為真
    console.log("開始"); //以下是開始的動作
    start_stop_key = false; //利用start stop key切換模式
    startStopElement.textContent = "停止"; //把startStop ID的按鈕文字換成 "停止"
  } else {
    console.log("停止"); //以下是停止的動作
    start_stop_key = true; //利用start stop key切換模式
    startStopElement.textContent = "開始"; //把startStop ID的按鈕文字換成 "開始"
  }
};

function reset() {
  console.log("重置");
}

function timer() {
  setTimeout(() => {}, 1000);
}

// 換Tab 的時候標題會換
let docTitle = document.title; //設定初始時的文件名稱
window.addEventListener("blur", () => {
  //沒有focus tab的 時候
  document.title = "你要去哪？？？";
});
window.addEventListener("focus", () => {
  //切換回去的時候
  document.title = "專注中。。。";
});

let focus = document.getElementById("focus");
let rest = document.getElementById("rest");

let focuscircle = document.getElementById("focuscircle");
let restcircle = document.getElementById("restcircle");

let rest_dot = document.getElementById(".rest_dot");
let focus_dot = document.getElementById(".focus_dot");

// 把時間顯示出來
// document.getElementById('focus').innerHTML = (video time 16:10)

// <!DOCTYPE html>
// <html>
// <head>
// <style>
// .timer {
// width: 100px;
// height: 100px;
// border-radius: 50%;
// background-color: lightgrey;
// line-height: 100px;
// text-align: center;
// font-size: 24px;
// }
// </style>
// </head>
// <body>

// <div id="timer" class="timer">25:00</div>

// <script>
// let timer = document.getElementById("timer");
// let timeLeft = 25 * 60; // 25 minutes in seconds

// function updateTimer() {
// let minutes = Math.floor(timeLeft / 60);
// let seconds = timeLeft % 60;

// if (seconds < 10) {
// seconds = "0" + seconds;
// }

// timer.textContent = minutes + ":" + seconds;

// if (timeLeft > 0) {
// timeLeft--;
// } else {
// timeLeft = 25 * 60; // reset timer to 25 minutes
// }
// }

// function startTimer() {
// updateTimer();
// setTimeout(startTimer, 1000); // update timer every second
// }

// startTimer();
// </script>

// </body>
// </html>
