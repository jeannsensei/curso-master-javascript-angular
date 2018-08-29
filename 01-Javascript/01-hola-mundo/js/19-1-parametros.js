'use strict'

// FUNCIONES
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function calculadora(numero1, numero2) {

    //conjunto de instrucciones 

    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("*********************");

}



for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8);

}