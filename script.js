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
