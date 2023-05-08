
function viewMenu(){
    document.getElementById("menu").style.height = "60px";   
}

function viewPar(){
    document.getElementById("ModalStart").style.display = "flex";
    document.getElementById("defoltDiv").style.display = "flex";
    document.getElementById("modalWindow").style.display = "flex";
    document.getElementById("defoltDiv").style.backgroundColor = "black"
}
function modalWindowBack(){
    document.getElementById("modalWindow").style.display = "none";
    document.getElementById("ModalStart").style.display = "none";
    document.getElementById("defoltDiv").style.display = "none";
}
function viewForm(){
    document.getElementById("ModalStart2").style.display = "flex";
    document.getElementById("defoltDiv2").style.display = "flex";
    document.getElementById("modalWindow2").style.display = "flex";
    document.getElementById("defoltDiv2").style.backgroundColor = "black"
}
function modalWindowBack2(){
    document.getElementById("modalWindow2").style.display = "none";
    document.getElementById("ModalStart2").style.display = "none";
    document.getElementById("defoltDiv2").style.display = "none";
}

let time = 14399;
const countDownEl = document.getElementById("times_all");
setInterval(updateCountdown, 1000);
    function updateCountdown() {
        const minutes = Math.floor(time / 240);
        // time / 240
        const hour = Math.floor(time / 3600);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0"+ seconds:seconds;
        countDownEl.innerHTML = `${hour}:${minutes}:${seconds}`;
        time--;
        if (hour == 0 && seconds == 0 && minutes == 0){
            time++
            countDownEl.innerHTML = "Время вышло"
            clearInterval(updateCountdown);
        }
}
function viewDiv(){
    document.getElementById("lastTimes").style.display = "none";

}

