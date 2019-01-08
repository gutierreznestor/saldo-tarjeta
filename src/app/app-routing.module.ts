import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "tarjeta",
    loadChildren: './tarjeta/tarjeta.module#TarjetaModule'
  },
  {
    path: "",
    redirectTo: "tarjeta/lista",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
