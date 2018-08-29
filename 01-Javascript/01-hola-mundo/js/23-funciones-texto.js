'use strict'

/* 
transformación de textos

*/

var numero = 44;
var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
dato = texto1.toUpperCase();

console.log(dato);

// calcular longitud de texto

var nombre = "Jeannuel García";
nombre = ["hola", "hola"];

console.log(nombre.length);

// concatenar - unir texto

// var textoTotal = texto1 + " " + texto2;

var textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);