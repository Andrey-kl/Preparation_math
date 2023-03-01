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

function viewDiv(){
    // document.getElementById("BtnSave").style.display = "none";
    document.getElementById("div1").style.display = "flex";
    let counter = 0

    document.getElementById("Cans1").innerHTML = e1;
    document.getElementById("Cans2").innerHTML = e2;
    document.getElementById("Cans3").innerHTML = e3;
    document.getElementById("Cans4").innerHTML = e4;

    let NUans1 = document.getElementById("z1").value;
    let NUans2 = document.getElementById("z2").value;
    let NUans3 = document.getElementById("z3").value;
    let NUans4 = document.getElementById("z4").value;

    document.getElementById("Uans1").innerHTML = NUans1;
    document.getElementById("Uans2").innerHTML = NUans2;
    document.getElementById("Uans3").innerHTML = NUans3;
    document.getElementById("Uans4").innerHTML = NUans4;

    if (e1 == NUans1) {
        document.getElementById("Uans1").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans1").style.backgroundColor = "lightpink";
    }
    if (e2 == NUans2) {
        document.getElementById("Uans2").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans2").style.backgroundColor = "lightpink";
    }
    
    if (e3 == NUans3) {
        document.getElementById("Uans3").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans3").style.backgroundColor = "lightpink";
    }
    
    if (e4 == NUans4) {
        document.getElementById("Uans4").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans4").style.backgroundColor = "lightpink";
    }
    
    
    console.log(counter)
    document.getElementById("count").innerHTML = counter;
  };



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
