const frase= ["más la es elefante pequeña hormiga que el", "es grande el la elefante que más hormiga"];
const fraseOrdenada= ["la hormiga es más pequeña que el elefante ", "el elefante es más grande que la hormiga "];
        
let numAleatorio = Math.floor(Math.random()*(1 - 0+1)) + 0
let miFrase = frase[numAleatorio];

let palabras = miFrase.split(" ");

let codigo = '';
palabras.forEach(obj => {
codigo += '<span class="button">'+obj+'</span>'+' ';
});
document.querySelector('#caja1').innerHTML+= codigo ;

const anadeHTML = _ =>{
obj = event.target.innerHTML;
document.querySelector('#caja2').innerHTML+= obj+" ";
}

let buttons = document.querySelectorAll('.button');

for(i=0;i<buttons.length;i++)
    buttons[i].addEventListener('click', anadeHTML);


function check(){
    miFrase = document.querySelector('#caja2').innerHTML;

    console.log(miFrase);
    console.log(fraseOrdenada[numAleatorio]);

    if (miFrase == fraseOrdenada[numAleatorio]) alert("Está bien");
    else alert("No");
}