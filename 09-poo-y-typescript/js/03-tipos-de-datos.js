"use strict";
var almuerzo = "Hola Mundo";
// String con | se puede exigir multiples tipos de datos
var cadena = "Jeannuel Garcia";
cadena = 44;
// Number
var numero = 12;
// Boolean
var verdadero_falso = true;
// Any
var cualquiera = "Hola";
cualquiera = 77;
// Arrays <tipo de dato> -> <string><any><number>
var lenguajes = ["PHP", "JS", "CSS"];
//en number se puede poner any, es otra manera de elegir tipo
var years = [12, 13, 14];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes);
// uso de let y var
var numero1 = 10;
var numero2 = 12;
if (numero == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
