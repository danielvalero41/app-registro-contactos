import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Datos } from '../models/datos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  formulario_agregar:FormGroup  
  contactos:Datos[] = new Array<Datos>()
  ban:boolean = true
  posicion_editar:number = -1
  cantidad_contactos:number
  modalRef: BsModalRef; 

  constructor(private fb:FormBuilder,private modalService: BsModalService) { }


  crear_contacto(){

    this.formulario_agregar = this.fb.group({
      numero_identificacion: ['',Validators.required],
      nombre_completo: ['',Validators.required],
      numero_celular: ['',Validators.required],
      direccion: ['',Validators.required],
      fecha: ['',Validators.required]
    })

  }//agregar_contacto

  guardar_contacto(){

    this.contactos = JSON.parse(localStorage.getItem('contactos'))
    
      this.contactos.push({
        numero_identificacion: this.formulario_agregar.value.numero_identificacion,
        celular: this.formulario_agregar.value.numero_celular,
        direccion: this.formulario_agregar.value.direccion,
        fecha_cumpleanos: this.formulario_agregar.value.fecha,
        nombre: this.formulario_agregar.value.nombre_completo
      })
          
      localStorage.setItem('contactos',JSON.stringify(this.contactos))     
    
    this.formulario_agregar.reset({
      numero_identificacion: '',
      nombre_completo: '',
      numero_celular: '',
      direccion: '',
      fecha: ''
    })
    this.modalService.hide()
  }//guardar_contacto

  leer_contacto(){        
    this.contactos = JSON.parse(localStorage.getItem('contactos'))     
  }//leer_contacto

  eliminar_contacto(contacto_eliminar:Datos){
    let i = this.contactos.indexOf(contacto_eliminar)
    this.contactos.splice(i,1)
    localStorage.setItem('contactos',JSON.stringify(this.contactos))
    this.leer_contacto()
  }//eliminar_contacto

  editar(contacto_actualizar:Datos,posicion:number){
    this.ban = false  
    this.formulario_agregar.setValue({
      numero_identificacion: contacto_actualizar.numero_identificacion,
      nombre_completo: contacto_actualizar.nombre,
      numero_celular: contacto_actualizar.celular,
      direccion: contacto_actualizar.direccion,
      fecha: contacto_actualizar.fecha_cumpleanos
    })
    this.posicion_editar = posicion
  }//editar

  actualizar_contacto(){      
      
    this.contactos[this.posicion_editar].numero_identificacion = this.formulario_agregar.value.numero_identificacion
    this.contactos[this.posicion_editar].nombre = this.formulario_agregar.value.nombre_completo
    this.contactos[this.posicion_editar].celular = this.formulario_agregar.value.numero_celular
    this.contactos[this.posicion_editar].direccion = this.formulario_agregar.value.direccion
    this.contactos[this.posicion_editar].fecha_cumpleanos = this.formulario_agregar.value.fecha
   
    localStorage.setItem('contactos',JSON.stringify(this.contactos))

    this.formulario_agregar.reset({
      numero_identificacion: '',
      nombre_completo: '',
      numero_celular: '',
      direccion: '',
      fecha: ''
    })

    this.posicion_editar = -1
    this.ban = true
    this.modalService.hide()
  }//actualizar_contacto

  get ContactosLocales():number{
    let clientesLocalStorage:Datos[] = JSON.parse(localStorage.getItem("contactos"))

    if(!clientesLocalStorage){
      return 0
    }
    else{
      return clientesLocalStorage.length
    }
  }//Get ContactosLocales
}
