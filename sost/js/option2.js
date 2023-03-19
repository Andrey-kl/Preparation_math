const e1 = 0.75
const e2 = 18
const e3 = 0.875
const e4 = 1.125
const e5 = 8
const e6 = 330
const e7 = -2
const e8 = 1.2
const e9 = 30
const e10 = 5.8
const e11 = 4
const e12a = "пк/2;"
const e12b = "5п/2;7п/2;4п;"
const e13 = "125rad(6)/3"
const e14 = "(-оо;-3rad(2)];[3;4)"
const e15 = "3 млн"
const e16 = 7
const e17 = "-7/9;0;1;5/9"
const e18a = "1;1;1;1;1;1;1"
const e18b = "нет"
const e18c = "7;7;7;9;11 или 7;9;11;14"
const counter = 0
function viewDiv(){
    document.getElementById("BtnSave").style.display = "none";
    document.getElementById("div1").style.display = "flex";
    let counter = 0
    document.getElementById("Cans1").innerHTML = e1;
    document.getElementById("Cans2").innerHTML = e2;
    document.getElementById("Cans3").innerHTML = e3;
    document.getElementById("Cans4").innerHTML = e4;
    document.getElementById("Cans5").innerHTML = e5;
    document.getElementById("Cans6").innerHTML = e6;
    document.getElementById("Cans7").innerHTML = e7;
    document.getElementById("Cans8").innerHTML = e8;
    document.getElementById("Cans9").innerHTML = e9;
    document.getElementById("Cans10").innerHTML = e10;
    document.getElementById("Cans11").innerHTML = e11;
    document.getElementById("Cans12a").innerHTML = e12a;
    document.getElementById("Cans12b").innerHTML = e12b;
    document.getElementById("Cans13").innerHTML = e13;
    document.getElementById("Cans14").innerHTML = e14;
    document.getElementById("Cans15").innerHTML = e15;
    document.getElementById("Cans16").innerHTML = e16;
    document.getElementById("Cans17").innerHTML = e17;
    document.getElementById("Cans18a").innerHTML = e18a;
    document.getElementById("Cans18b").innerHTML = e18b;
    document.getElementById("Cans18c").innerHTML = e18c;

    let NUans1 = document.getElementById("z1").value;
    let NUans2 = document.getElementById("z2").value;
    let NUans3 = document.getElementById("z3").value;
    let NUans4 = document.getElementById("z4").value;
    let NUans5 = document.getElementById("z5").value;
    let NUans6 = document.getElementById("z6").value;
    let NUans7 = document.getElementById("z7").value;
    let NUans8 = document.getElementById("z8").value;
    let NUans9 = document.getElementById("z9").value;
    let NUans10 = document.getElementById("z10").value;
    let NUans11 = document.getElementById("z11").value;
    let NUans12a = document.getElementById("z12a").value;
    let NUans12b = document.getElementById("z12b").value;
    let NUans13 = document.getElementById("z13").value;
    let NUans14 = document.getElementById("z14").value;
    let NUans15 = document.getElementById("z15").value;
    let NUans16 = document.getElementById("z16").value;
    let NUans17 = document.getElementById("z17").value;
    let NUans18a = document.getElementById("z18a").value;
    let NUans18b = document.getElementById("z18b").value;
    let NUans18c = document.getElementById("z18с").value;

    document.getElementById("Uans1").innerHTML = NUans1;
    document.getElementById("Uans2").innerHTML = NUans2;
    document.getElementById("Uans3").innerHTML = NUans3;
    document.getElementById("Uans4").innerHTML = NUans4;
    document.getElementById("Uans5").innerHTML = NUans5;
    document.getElementById("Uans6").innerHTML = NUans6;
    document.getElementById("Uans7").innerHTML = NUans7;
    document.getElementById("Uans8").innerHTML = NUans8
    document.getElementById("Uans9").innerHTML = NUans9;
    document.getElementById("Uans10").innerHTML = NUans10;
    document.getElementById("Uans11").innerHTML = NUans11;
    document.getElementById("Uans12a").innerHTML = NUans12a;
    document.getElementById("Uans12b").innerHTML = NUans12b;
    document.getElementById("Uans13").innerHTML = NUans13;
    document.getElementById("Uans14").innerHTML = NUans14;
    document.getElementById("Uans15").innerHTML = NUans15;
    document.getElementById("Uans16").innerHTML = NUans16;
    document.getElementById("Uans17").innerHTML = NUans17;
    document.getElementById("Uans18a").innerHTML = NUans18a;
    document.getElementById("Uans18b").innerHTML = NUans18b;
    document.getElementById("Uans18c").innerHTML = NUans18c;

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
    if (e5 == NUans5) {
        document.getElementById("Uans5").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans5").style.backgroundColor = "lightpink";
    }
    if (e6 == NUans6) {
        document.getElementById("Uans6").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans6").style.backgroundColor = "lightpink";
    }
    
    if (e7 == NUans7) {
        document.getElementById("Uans7").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans7").style.backgroundColor = "lightpink";
    }
    
    if (e8 == NUans8) {
        document.getElementById("Uans8").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans8").style.backgroundColor = "lightpink";
    }
    if (e9 == NUans9) {
        document.getElementById("Uans9").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans9").style.backgroundColor = "lightpink";
    }
    if (e10 == NUans10) {
        document.getElementById("Uans10").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans10").style.backgroundColor = "lightpink";
    }
    
    if (e11 == NUans11) {
        document.getElementById("Uans11").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans11").style.backgroundColor = "lightpink";
    }
    if (e12a == NUans12a) {
        document.getElementById("Uans12a").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans12a").style.backgroundColor = "lightpink";
    }
    if (e12b == NUans12b) {
        document.getElementById("Uans12b").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans12b").style.backgroundColor = "lightpink";
    }
    if (e13 == NUans13) {
        document.getElementById("Uans13").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans13").style.backgroundColor = "lightpink";
    }
    if (e14 == NUans14) {
        document.getElementById("Uans14").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans14").style.backgroundColor = "lightpink";
    }
    
    if (e15 == NUans15) {
        document.getElementById("Uans15").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans15").style.backgroundColor = "lightpink";
    }
    
    if (e16 == NUans16) {
        document.getElementById("Uans16").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans16").style.backgroundColor = "lightpink";
    }
    if (e17 == NUans17) {
        document.getElementById("Uans17").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans17").style.backgroundColor = "lightpink";
    }
    if (e18a == NUans18a) {
        document.getElementById("Uans18a").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans18a").style.backgroundColor = "lightpink";
    }
    if (e18b == NUans18b) {
        document.getElementById("Uans18b").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans18b").style.backgroundColor = "lightpink";
    }
    if (e18c == NUans18c) {
        document.getElementById("Uans18c").style.backgroundColor = "lightgreen";
        counter ++
    } else {
        document.getElementById("Uans18c").style.backgroundColor = "lightpink";
    }
    
    
    console.log(counter)
    document.getElementById("count").innerHTML = counter;
  };