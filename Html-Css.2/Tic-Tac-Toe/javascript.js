
let turno = 0;
let botones = document.querySelectorAll("input");

movimiento = event => {
    let btn = event.target;
    if (turno %2 == 0) {
        btn.style.background = "Gold";
    } else {
        btn.style.background = "Green";
    }
        let haGanadoAlguien = evaluateWin();

    turno++;

    if (haGanadoAlguien == true) {
        alert("Olé! Enhorabuena");
  
    }
}

evaluateWin = param => {
const color0 = document.querySelector('.btn0').style.backgroundColor;
const color1 = document.querySelector('.btn1').style.backgroundColor;
const color2 = document.querySelector('.btn2').style.backgroundColor;
const color3 = document.querySelector('.btn3').style.backgroundColor;
const color4 = document.querySelector('.btn4').style.backgroundColor;
const color5 = document.querySelector('.btn5').style.backgroundColor;
const color6 = document.querySelector('.btn6').style.backgroundColor;
const color7 = document.querySelector('.btn7').style.backgroundColor;
const color8 = document.querySelector('.btn8').style.backgroundColor;



    if (color0 == color1 && color0 == color2 && color0 != '') {
        return true;
    } else if (color3 == color4 && color3 == color5 && color3 != '') {
        return true;
    }else if (color6 == color7 && color6 == color8 && color6 != '') {
        return true;
    }else if (color0 == color3 && color0 == color6 && color0 != '') {
        return true;
    }else if (color1 == color4 && color1 == color7 && color1 != '') {
        return true;
    }else if (color2 == color5 && color2 == color8 && color2 != '') {
        return true;
    }else if (color0 == color4 && color0 == color8 && color0 != '') {
        return true;
    }else if (color2 == color4 && color2 == color6 && color2 != '') {
        return true;
    }
}

document.querySelectorAll('#wrapper input').forEach(obj => {
    obj.addEventListener('click', movimiento)
})