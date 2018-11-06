import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class MaterialModule { }
