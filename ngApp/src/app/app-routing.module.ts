import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: "tarjetas",
    loadChildren: './tarjeta/tarjeta.module#TarjetaModule'
  },
  {
    path: "usuarios",
    loadChildren: './usuario/usuario.module#UsuarioModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
