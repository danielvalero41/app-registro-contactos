import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Datos } from 'src/app/models/datos';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  
  constructor(public dato:DatosService,private modalService: BsModalService,public Ruta:Router) { }

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
  
  _editar(contacto:Datos,posicion:number){
    this.dato.dato_contacto_temporal = contacto
    this.dato.posicion_temporal = posicion
    this.Ruta.navigateByUrl('/actualizar-contacto')
  }

}
