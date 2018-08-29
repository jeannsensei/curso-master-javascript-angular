'use strict'

/*
Hacer un programa que diga si un numero es par o impar

1. ventana prompt
2. si no es valido, volver a pedir numero
*/

var number = parseInt(prompt("Introduce un numero", 0));

while (isNaN(number)) {
    var number = parseInt(prompt("Introduce un numero", 0));
}

if (number % 2 == 0) {
    alert("Es un numero par");
} else {
    alert("Es impar");
}