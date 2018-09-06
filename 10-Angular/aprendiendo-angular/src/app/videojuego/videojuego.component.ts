import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({

    selector: 'app-videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

    public titulo: string;
    public listado: string;

    constructor() {

        this.titulo = 'Componente de Videojuegos';
        this.listado = 'Listado de los juegos más populares';


        console.log('Se ha cargado videojuego');
    }

    ngOnInit() {
        // console.log('OnIni ejecutado');
    }

    ngDoCheck() {
        // console.log('Do check ejecutado');
    }

    ngOnDestroy() {
        // console.log('OnDestroy ejecutado');
    }

    cambiarTitulo() {
        this.titulo = 'Nuevo titulo del componente';
    }



 }
