'use strict'

//fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");
// var usuarios = [];


getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data)


        return getInfo();
    })

.then(data => {
        div_profesor.innerHTML = data;

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })

// capturar errores en promesas
.catch(error => {
    console.log(error + " " + "error en las peticiones, es algo, mira el codigo o no sé");
});


function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {

    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        ulr: 'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject) => {

        var profesor_string = '';

        setTimeout(() => {
            var profesor_string = JSON.stringify(profesor);

            // validacion si es string tirar error porque debe convertirse en objeto
            if (typeof profesor_string != 'string' || profesor_string == '') return reject('error');

            return resolve(profesor_string);

        }, 3000);



    });

};


function listadoUsuarios(usuarios) {
    console.log(usuarios);

    usuarios.map((user, i) => {
        let nombre = document.createElement("h3")
        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    });
}

function mostrarJanet(user) {
    console.log(user);

    let nombre = document.createElement("h4")
    let avatar = document.createElement("img");

    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = "100";

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = "none";

}