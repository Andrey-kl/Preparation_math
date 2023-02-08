const e1 = 22
const e2 = 22
const e3 = 22
const e4 = 22
const e5 = 22
const e6 = 22
const e7 = 22
const e8 = 22
const e9 = 22
const e10 = 22
const e11 = 22
const e12a = "п/6 + пk, п/3 + пk"
const e12b = "7п/6; 13п/6; 4п/3; 7п/3"
const e13 = "arctg 5√2/4"
const e14 = "(-5; -√22]; [-4; 4]; [√22; 5)"
const e15 = "9 млн"
const e16 = 3
const e17 = "(−∞; -5); (-5; 0); (0; 3); (3; 4)"
const e18 = 22
const counter = 0


function end(){
    let i1 = document.getElementById("z1").value
    let i2 = document.getElementById("z1").value
    let i3 = document.getElementById("z1").value
    let i4 = document.getElementById("z1").value
    let i5 = document.getElementById("z1").value
    let i6 = document.getElementById("z1").value
    let i7 = document.getElementById("z1").value
    let i8 = document.getElementById("z1").value
    let i9 = document.getElementById("z1").value
    let i10 = document.getElementById("z1").value
    let i11 = document.getElementById("z1").value
    let i12 = document.getElementById("z1").value
    let i13 = document.getElementById("z1").value
    let i14 = document.getElementById("z1").value
    let i15 = document.getElementById("z1").value
    let i16 = document.getElementById("z1").value
    let i17 = document.getElementById("z1").value
    let i18 = document.getElementById("z1").value

    if (i1 == e1) {
        counter++
    }
    if (i2 == e4) {
        counter++
    }
    if (i3 == e3) {
        counter++
    }
    if (i4 == e4) {
        counter++
    }
    if (i5 == e5) {
        counter++
    }
    if (i6 == e6) {
        counter++
    }
    if (i7 == e7) {
        counter++
    }
    if (i8 == e8) {
        counter++
    }
    if (i9 == e9) {
        counter++
    }
    if (i10 == e10) {
        counter++
    }
    if (i11 == e11) {
        counter++
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
