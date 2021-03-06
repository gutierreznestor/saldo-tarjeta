import { ListTarjetaComponent } from './list-tarjeta/list-tarjeta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "lista",
    pathMatch: "full"
  },
  {
    path: 'lista',
    component: ListTarjetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetaRoutingModule { }
