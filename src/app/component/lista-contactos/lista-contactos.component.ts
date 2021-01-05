import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  
  constructor(public dato:DatosService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.dato.crear_contacto() 
    this.dato.leer_contacto()
    this.dato.cantidad_contactos = this.dato.ContactosLocales    
  }

  Modal_Nuevo_Contacto(template: TemplateRef<any>) {
    this.dato.formulario_agregar.reset()
    this.dato.modalRef = this.modalService.show(template);
  }

  Modal_Nuevo_Editar(template: TemplateRef<any>,contacto,posicion) {
    this.dato.modalRef = this.modalService.show(template);
    this.dato.editar(contacto,posicion)
  }
  

}
