import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.module';
import { FieldAppenderComponent } from './components/field-appender/field-appender.component';
import { SidenavAppendersComponent } from './components/sidenav-appenders/sidenav-appenders.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldAppenderComponent,
    SidenavAppendersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
