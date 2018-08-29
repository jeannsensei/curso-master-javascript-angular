'use strict'

var fecha = new Date();

var year = fecha.getFullYear();

var mes = fecha.getMonth();

var dia = fecha.getDate();

var hora = fecha.getHours();

var minutos = fecha.getMinutes();


// para mostrar en la pagina 

var textoHora = `
   <li> El año es: ${year}  <br/></li>
   <li>El mes es: ${mes}   <br/></li>
   <li>El día es: ${dia}   <br/></li>
   <li>La hora es: ${hora} <br/></li>
   <li>Los minutos son: ${minutos}</li>
`;

console.log(textoHora);

var w_textoHora = document.querySelector("#textoHora");

w_textoHora.innerHTML = textoHora;

// numero aleatorio
// math ceil es para volver entero un numero con decimales
var numeror = Math.ceil(Math.random() * 10);
console.log(numeror);

if (numeror >= 5) {
    console.log("El numero es mayor que 5");
} else {
    console.log("El numero es menor que 5");
}

// https://www.w3schools.com/jsref/jsref_obj_math.asp