'use strict'
// Pruebas con let y var

//prueba con var
var numero = 40;
console.log(numero); //valor 40

if (true) {
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); //valor 50

//prueba con let

var texto = "Curso JS Victor Robles";

console.log(texto); // valor ""

if (true) {
    let texto = "Curso Laravel"; //valor laravel
    console.log(texto);
}

console.log(texto); // valor ""