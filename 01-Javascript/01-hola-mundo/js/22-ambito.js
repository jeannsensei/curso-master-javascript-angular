'use strict'

// las variables globales son las que se encuentran por fuera de la funcion y se pueden utilizar en
// las funciones pero si la variable está dentro de la función, entonces solo se puede usar
// dentro de la función


function holaMundo(texto) {
    console.log(texto);
    console.log(numero.toString());
}

var numero = 12;
var texto = "Hola mundo soy una variable global";

holaMundo(texto);