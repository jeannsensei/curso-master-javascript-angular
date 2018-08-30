$(document).ready(function() {

    // slider

    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
        });
    }

    // Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [{
                title: 'Prueba de titulo 1',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur blanditiis ducimus cum maiores autem architecto tempore, ab ea veritatis dignissimos error ad dolor explicabo labore alias fuga itaque? Nisi?'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur blanditiis ducimus cum maiores autem architecto tempore, ab ea veritatis dignissimos error ad dolor explicabo labore alias fuga itaque? Nisi?'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur blanditiis ducimus cum maiores autem architecto tempore, ab ea veritatis dignissimos error ad dolor explicabo labore alias fuga itaque? Nisi?'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur blanditiis ducimus cum maiores autem architecto tempore, ab ea veritatis dignissimos error ad dolor explicabo labore alias fuga itaque? Nisi?'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur blanditiis ducimus cum maiores autem architecto tempore, ab ea veritatis dignissimos error ad dolor explicabo labore alias fuga itaque? Nisi?'
            },
        ];


        posts.forEach((item, index) => {
            var post = `
            <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
            </article>
        `;

            $("#posts").append(post);
        });
    }
    /* < article class="post" >
        <h2>Prueba de título</h2>
        <span class="date">Fecha de publicación</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur blanditiis ducimus cum maiores autem architecto tempore, ab ea veritatis dignissimos error ad dolor explicabo labore alias fuga itaque? Nisi?</p>
        <a href="#" class="button-more">Leer más</a>
            </article >
    */


    //Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function() {
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function() {
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function() {
        theme.attr("href", "css/blue.css")
    });

    //Scroll hacia arriba

    $('.subir').click(function(e) {
        e.preventDefault();

        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })

    // Login Falso

    $("#login form").submit(function() {
        var form_name = $("#form-name").val();

        localStorage.setItem("form_name_local", form_name)
    });

    var form_name = localStorage.getItem("form_name_local");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");
        about_parrafo.html("<strong> Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Desloguearse</a>");

        $("#login").hide();
        $("#logout").click(function() {
            localStorage.clear();
            location.reload();
        })
    }

    // acordeon jquery ui

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    // reloj

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function() {
            var reloj = moment().format("h:mm:ss");
            $("#reloj-centrado").html(reloj);
        }, 100)

    }

    // validacion formulario de contacto
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });


        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }


});