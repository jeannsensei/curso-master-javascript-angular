'use strict'

// () => {} es function name(params) {}


window.addEventListener('load', () => {


    // Eventos del raton

    var boton = document.querySelector("#boton");

    function cambiaColor() {

        console.log("Me has dado click");

        var bg = boton.style.background;

        if (bg == "green") {
            boton.style.background = "red";

        } else {
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;

    };


    //Evento Click

    boton.addEventListener('click', function() {
        cambiaColor();
        this.style.border = "10px solid black";
        console.log(this);
    });


    // Mouse over

    boton.addEventListener('mouseover', function() {
        boton.style.background = "#ccc";
    });

    // Mouse out

    boton.addEventListener('mouseout', function() {
        boton.style.background = "white";
    });

    // Focus

    var input = document.querySelector("#campo_nombre");

    input.addEventListener('focus', function() {
        console.log("[focus] Estas dentro del input");
    });

    // Blur

    input.addEventListener('blur', function() {
        console.log("[blur] Estas fuera del input");
    });

    // Keydown

    input.addEventListener('keydown', function(event) {
        console.log("[keydown] Estas pulsando una tecla", String.fromCharCode(event.keyCode));
    });

    // Keypress

    input.addEventListener('keypress', function(event) {
        console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));
    });

    // Key up

    input.addEventListener('keyup', function(event) {
        console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
    });


});