import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.scss']
})
export class ActualizarContactoComponent implements OnInit {

  constructor(public dato:DatosService,private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    // this.dato.crear_contacto() 
    // this.dato.leer_contacto()        
    // this.dato.editar(this.rutaActiva.snapshot.params.contacto,this.rutaActiva.snapshot.params.posicion)
    this.dato.editar(this.dato.dato_contacto_temporal,this.dato.posicion_temporal)    
  }

}
