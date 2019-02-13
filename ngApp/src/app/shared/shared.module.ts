import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';

const componentes = [NavComponent]

@NgModule({
  declarations: [componentes],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [componentes, RouterModule]
})
export class SharedModule { }
