import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatSelectModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule, MatTableModule, MatMenuModule, MatTabsModule } from "@angular/material";

const modulos = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatMenuModule,
  MatTabsModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulos
  ],
  exports: [
    modulos
  ]
})
export class MaterialModule { }
