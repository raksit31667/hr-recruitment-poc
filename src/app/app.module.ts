import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './/material.module';

import { AppComponent } from './app.component';
import { FieldAppenderComponent } from './components/field-appender/field-appender.component';
import { SidenavAppendersComponent } from './components/sidenav-appenders/sidenav-appenders.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { InputFilterListComponent } from './components/input-filter-list/input-filter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldAppenderComponent,
    SidenavAppendersComponent,
    InputFilterComponent,
    InputFilterListComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  entryComponents: [ InputFilterComponent ],
  bootstrap: [AppComponent],
})
export class AppModule { }
