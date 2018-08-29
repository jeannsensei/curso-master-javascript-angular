'user strict'

// ejercicio 1
// programa que nos pida dos numeros y nos diga cual es el mayor y si son iguales

var numero1 = parseFloat(prompt("Introduce el primer numero", 0));
var numero2 = parseFloat(prompt("Introduce el 2do numero", 0));


while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseFloat(prompt("Introduce el primer numero", 0));
    var numero2 = parseFloat(prompt("Introduce el 2do numero", 0));
}

if (numero1 == numero2) {
    alert("Los numeros son iguales");

} else if (numero1 > numero2) {
    alert("El " + numero1 + " es mayor al " + numero2);
} else if (numero1 < numero2) {
    alert("El " + numero2 + " es mayor al " + numero1);
} else {
    alert("Introduce un numero");
}


console.log(numero1, numero2);