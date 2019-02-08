import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { TarjetaRoutingModule } from './tarjeta-routing.module';

import { ListTarjetaComponent } from './list-tarjeta/list-tarjeta.component';

const componentes = [
  ListTarjetaComponent,
]

const modulos = [
  MaterialModule, SharedModule, TarjetaRoutingModule
]

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [componentes],
  imports: [
    CommonModule,
    modulos
  ],
  exports: [componentes]
})
export class TarjetaModule { }
