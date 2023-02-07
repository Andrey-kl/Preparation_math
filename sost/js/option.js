
const t1 = 22
const t2 = 22


function end(){
    let tn1 = document.getElementById("z1").value

    if (tn1 == t1) {
        document.getElementById("ans1").innerHTML = "Верно"
    } else if (tn1 == ""){
        document.getElementById("ans1").innerHTML = "Вы ничего не ввели"
    } else{
        document.getElementById("ans1").innerHTML = "Не верно"
    }
}



let time = 14399;
const countDownEl = document.getElementById("times_all");
setInterval(updateCountdown, 1000);
    function updateCountdown() {
        const minutes = Math.floor(time / 240);
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
