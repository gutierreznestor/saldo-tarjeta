import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { ListTarjetaComponent } from './list-tarjeta/list-tarjeta.component';

@NgModule({
  declarations: [ListTarjetaComponent],
  imports: [
    CommonModule,
    TarjetaRoutingModule
  ]
})
export class TarjetaModule { }
