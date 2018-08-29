'use strict'

// Arrays o arreglos o matrices

//empiezan desde 0

var nombre = "Victor Robles";

var nombres = ["Rafa", "Jeannuel", "Juan", 52, true];

var lenguajes = new Array("PHP", "js", "go", "java", "c", "pascal");

// console.log(nombres);

// console.log(nombres[2]);
// console.log(lenguajes);

// // console.log(nombres.length);

// var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

// if (elemento >= nombres.length) {
//     alert("Introduce el número correcto menor que " + nombres.length);
// } else {
//     alert("El usuario seleccionado es: " + nombres[elemento]);
// }

// document.write("<h1>Lenguajes de programación del 2018 </h1>");

// 
// for (var i = 0; i < lenguajes.length; i++) {

//     document.write("<li>" + lenguajes[i] + "</li>");

// }
// 
document.write("<ul>");

lenguajes.forEach((elemento, indice, arr) => {
    document.write("<li>" + indice + "-" + elemento + "</li>");
});

// otra forma

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");


// busquedas

// var busqueda = lenguajes.find(function(lenguaje) {

//     return lenguaje == "PHP";

// });

var precios = [10, 20, 50, 80, 12];

var busqueda_precios = precios.some(precio => precio >= 20);

console.log(busqueda_precios);

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

console.log(busqueda);