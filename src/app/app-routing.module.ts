import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaContactosComponent } from './component/lista-contactos/lista-contactos.component';
import { PrincipalComponent } from './component/principal/principal.component';

const routes: Routes = [
  {
    path:'', component: PrincipalComponent
  },
  {
    path:'lista-contacto', component: ListaContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
