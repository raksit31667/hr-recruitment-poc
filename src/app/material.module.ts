import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  DateAdapter} from '@angular/material';

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
    MatDatepickerModule,
    MatMomentDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class MaterialModule { }
