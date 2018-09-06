import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contactousuario';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
public usuario: ContactoUsuario;
public show_data;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '');
   }

  ngOnInit() {
  }

  onSubmit(form) {
    this.show_data = this.usuario.nombre;
    console.log('Evento submit lanzado');
    console.log(this.usuario);
    form.reset();
  }

}
