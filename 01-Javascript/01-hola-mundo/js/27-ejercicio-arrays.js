'user strict'

/* EJERCICIO ARRAY

1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que diga si está en el array y diga su posicion (indice)

*/

//funcion para mostrar array

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li><br/>");
    });
    document.write("</ul>");
}


// 1.

// var numeros = new Array(6);

var numeros = [];

// pedir numeros y mostrar por consola

for (var i = 0; i <= 5; i++) {
    // numeros[i] = parseInt(prompt("Introduce un número", 0));
    numeros.push(parseInt(prompt("Introduce un número", 0)));
}

console.log(numeros);

//2. mostrar en la pagina

mostrarArray(numeros);

// 3. ordenar y mostrar

// numeros.sort(); /// lo ordena de manera alfabetica

numeros.sort(function(a, b) { return a - b }); //lo ordena de manera numerica
console.log(numeros);
mostrarArray(numeros, ' ordenados');

// para mostrar lo mejor es hacer una funcion en vez de copiar otra vez el codigo de mostrar en la pagina


// 4. Invertir y mostrar

numeros.reverse();
mostrarArray(numeros, ' revertido');

// 5. cuantos elementos tiene

document.write("<h1>El array tiene: " + numeros.length + "</h1><hr>");

// 6.  Busqueda de un valor introducido por el usuario, que diga si está en el array y diga su posicion (indice)

numeros.reverse();
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posición de la busqueda: " + posicion + "</h1><hr>")
} else {
    document.write("<h1>No encontrado</h1>");
}