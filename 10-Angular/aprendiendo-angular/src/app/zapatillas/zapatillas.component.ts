import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'app-zapatillas',
    templateUrl: './zapatillas.component.html',
    // styleUrls: ['../../assets/styles.css']
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {

    public titulo = 'Componente de Zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.mi_marca = 'Fila';
        this.color = 'blue';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 40, true),
            new Zapatilla('Reebook Class', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Negra', 180, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),

        ];
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas();
        // console.log(this.zapatillas);
        alert(this._zapatillaService.getTexto());
        this.getMarcas();
    }


    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }

            // console.log(index);
        });

        console.log(this.marcas);
    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index) {
        // delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur() {
        console.log('Has salido del input');
    }

    mostrarPalabra() {
        alert(this.mi_marca);
    }
}
