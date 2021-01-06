import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarContactoComponent } from './component/actualizar-contacto/actualizar-contacto.component';
import { ListaContactosComponent } from './component/lista-contactos/lista-contactos.component';
import { NuevoContactoComponent } from './component/nuevo-contacto/nuevo-contacto.component';
import { PrincipalComponent } from './component/principal/principal.component';

const routes: Routes = [
  {
    path:'', component: PrincipalComponent
  },
  {
    path:'lista-contacto', component: ListaContactosComponent
  },
  {
    path:'nuevo-contacto', component: NuevoContactoComponent
  },
  {
    path:'actualizar-contacto', component:ActualizarContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
