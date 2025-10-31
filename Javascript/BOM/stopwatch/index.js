
let hrs = document.getElementById("hrs");
let min = document.getElementById("min")
let sec = document.getElementById("sec")

let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")

let h = 0;
let m = 0;
let s = 0;
let timer;
let isRunning = false;
function updateTimer() {
    hrs.textContent = h < 10 ? "0" + h : h;
    min.textContent = m < 10 ? "0" + m : m;
    sec.textContent = s < 10 ? "0" + s : s;
}

updateTimer();

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            s++;
            if (s == 59) {
                m++;
                s = 0;
            }
            if (m == 59) {
                h++;
                m = 0;
            }
            updateTimer();
        }, 10);
    }
}

function pauseTimer() {
    clearInterval(timer)
    isRunning = false
}

function resetTimer() {
    clearInterval(timer)
    isRunning = false
    h = 0;
    m = 0;
    s = 0;
    updateTimer()
}
startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resetBtn.addEventListener("click", resetTimer)
