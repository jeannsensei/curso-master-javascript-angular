'use strict'

/* 
transformación de textos

*/

var numero = 44;
var texto1 = "Bienvenido al curso de Javascript curso";
var texto2 = "Es muy buen curso";

// var busqueda = texto1.indexOf("curso");

// var busqueda = texto1.lastIndexOf("curso");

// var busqueda = texto1.search("curso");

// var busqueda = texto1.match(/curso/g);

// var busqueda = texto1.substr(14, 7);

// var busqueda = texto1.charAt(20);

// var busqueda = texto1.startsWith("Bienvenido");

// var busqueda = texto1.endsWith("Bienvenido");

var busqueda = texto1.includes("Javascript");

console.log(busqueda);