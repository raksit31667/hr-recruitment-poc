import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './/material.module';

import { AppComponent } from './app.component';
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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
