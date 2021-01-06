import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/models/datos';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss']
})
export class NuevoContactoComponent implements OnInit {

  constructor(public dato:DatosService) { }

  ngOnInit(): void {
    this.dato.crear_contacto()         
  }//OnInit
  
  get fecha(){    
    
    let x = new Date
    let dia,mes:number
    dia = x.getDate()
    mes = x.getMonth()+1        
    
    let cont:number = 0
    
    let Data_fecha:Datos[] = JSON.parse(localStorage.getItem("contactos"))    
    
    Data_fecha.forEach((res)=>{
      let y = new Date(res.fecha_cumpleanos)
      if(dia == y.getDate()+1 && mes == y.getMonth()+1)      
        cont++
    })
      return cont  
  }//fecha

}
