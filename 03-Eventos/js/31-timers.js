'use strict'

// timers

window.addEventListener('load', function() {

    //Timers 
    // setInterval, en el segundo parámetro se coloca el tiempo en milisegundos, el primero
    // es la función o lo que sea, se ejecuta hasta el infinito 
    // setTimeout es 1 sola vez

    var tiempo = intervalo();

    function intervalo() {

        tiempo = setInterval(function() {

            console.log("Set interval ejecutado");

            document.getElementById("start").style.fontSize = "50px";

            var encabezado = document.getElementById("start");

            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 1000);

        return tiempo;

    }




    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function() {
        alert("Has detenido el bucle");
        clearInterval(tiempo);

    })

    var inicio = document.querySelector("#inicio");
    inicio.addEventListener("click", function() {
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    })


});