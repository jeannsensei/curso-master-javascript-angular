'use strict'

// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.background = color;
}

/////////////////// Conseguir elementos con un ID concreto

// document.getElementById
// document.querySelector

var encabezado = document.querySelector("#encabezado");
console.log(encabezado);

var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);

/////////////////// Conseguir elementos por su clase CSS

var divsRojos = document.getElementsByClassName('rojo');
// console.log(divsRojos);
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for (div in divsRojos) {
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";

    }
}



/////////////////// Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");
// console.log(todosLosDivs);
var valor;
var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");



for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
};

seccion.append(hr);

//appendChild añade despues - prepend añade antes


// todosLosDivs[2].textContent;

// var contenidoEnTexto = todosLosDivs[2];

// contenidoEnTexto.innerHTML = "Otro texto para el 2do div";
// contenidoEnTexto.style.background = "red";

// var contenidoEnTexto = todosLosDivs[2].textContent;
// console.log(contenidoEnTexto);


// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");


caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";