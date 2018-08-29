'use strict'

// FUNCIONES
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function calculadora(numero1, numero2, mostrar = false) {

    //conjunto de instrucciones 
    if (mostrar == false) {
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicacion: " + (numero1 * numero2));
        console.log("Division: " + (numero1 / numero2));
        console.log("*********************");
    } else {
        document.write("Suma: " + (numero1 + numero2) + "<br/>");
        document.write("Resta: " + (numero1 - numero2) + "<br/>");
        document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
        document.write("Division: " + (numero1 / numero2) + "<br/>");
        console.log("*********************");
    }



    // console.log(mostrar);



}

calculadora(3, 5);
calculadora(1, 2, true);