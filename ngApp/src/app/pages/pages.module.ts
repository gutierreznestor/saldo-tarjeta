import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from './../material/material.module';
import { UsuarioModule } from './../usuario/usuario.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';

const componentes = [HomeComponent]

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [componentes],
  imports: [CommonModule, MaterialModule, UsuarioModule, PagesRoutingModule, RouterModule],
  exports: [RouterModule, componentes],
})
export class PagesModule {}
