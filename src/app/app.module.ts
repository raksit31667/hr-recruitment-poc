import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MaterialModule } from './/material.module';

import { AppComponent } from './app.component';
import { FieldAppenderComponent } from './components/field-appender/field-appender.component';
import { SidenavAppendersComponent } from './components/sidenav-appenders/sidenav-appenders.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { InputFilterListComponent } from './components/input-filter-list/input-filter-list.component';

import { InputFilterListPlaceholderDirective } from './components/input-filter-list/input-filter-list-placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    FieldAppenderComponent,
    SidenavAppendersComponent,
    InputFilterComponent,
    InputFilterListComponent,
    InputFilterListPlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  entryComponents: [ InputFilterComponent ],
  bootstrap: [AppComponent],
})
export class AppModule { }
