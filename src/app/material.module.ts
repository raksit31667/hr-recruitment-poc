import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule } from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
