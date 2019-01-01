import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { HomeComponent } from './home/home.component';

const componentes = [HomeComponent]
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [componentes],
  imports: [CommonModule, MaterialModule],
  exports: [componentes],
})
export class PagesModule {}
