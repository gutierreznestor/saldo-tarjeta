import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { MaterialModule } from './../material/material.module';

import { ListTarjetaComponent } from './list-tarjeta/list-tarjeta.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const componentes = [
  ListTarjetaComponent,
]

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [componentes],
  imports: [
    CommonModule,
    TarjetaRoutingModule,
    MaterialModule
  ],
  exports: [componentes]
})
export class TarjetaModule { }
