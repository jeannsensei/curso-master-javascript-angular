'use strict'

// BOM
// Es el browser object model

function getBom() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
}

function getTotal() {
    console.log(screen.width);
    console.log(screen.height);
}

function getDireccion() {
    console.log(window.location);
    console.log(window.location.href);
}

function redirectionUrl(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url, "", "width=500, height=500");
}