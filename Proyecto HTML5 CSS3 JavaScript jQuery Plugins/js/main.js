$(document).ready(function() {

    // slider

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
    });

    // Posts 
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

    /* < article class="post" >
        <h2>Prueba de título</h2>
        <span class="date">Fecha de publicación</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur blanditiis ducimus cum maiores autem architecto tempore, ab ea veritatis dignissimos error ad dolor explicabo labore alias fuga itaque? Nisi?</p>
        <a href="#" class="button-more">Leer más</a>
            </article >
    */


});