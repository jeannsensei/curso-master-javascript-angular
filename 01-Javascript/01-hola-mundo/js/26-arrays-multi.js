'use strict'

// ARRAYS MULTIDIMENSIONALES

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

// peliculas.sort();

peliculas.reverse();

console.log(peliculas);


var cine = [categorias, peliculas];

// console.log(cine[0][1]);

/*
var elemento = "";

do {
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
} while (elemento != "ACABAR");

peliculas.pop();


console.log(peliculas);
*/

var indice = peliculas.indexOf('Gran torino');

if (indice > -1) {
    peliculas.splice(indice, 1)
}

var peliculas_string = peliculas.join(" - ");

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(peliculas_string);
console.log(cadena_array);