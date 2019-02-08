import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatSelectModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule, MatTableModule, MatMenuModule, MatTabsModule, MatFormField, MatFormFieldModule } from "@angular/material";

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
  MatIconModule,
  MatFormFieldModule,
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
