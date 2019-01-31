import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UsuarioRoutingModule } from './usuario-routing.module';
import { MaterialModule } from './../material/material.module';

import { SignupComponent } from './signup/signup.component';

const componentes = [
  SignupComponent,
]

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [componentes],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    MaterialModule,
  ],
  exports: [componentes]
})
export class UsuarioModule {}
