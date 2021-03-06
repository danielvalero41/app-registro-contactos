import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosService } from './service/datos.service';
import { ListaContactosComponent } from './component/lista-contactos/lista-contactos.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NuevoContactoComponent } from './component/nuevo-contacto/nuevo-contacto.component';
import { ActualizarContactoComponent } from './component/actualizar-contacto/actualizar-contacto.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    PrincipalComponent,
    NuevoContactoComponent,
    ActualizarContactoComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    // BsDatepickerModule.forRoot()
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
