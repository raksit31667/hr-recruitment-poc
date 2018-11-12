import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material.module';
import { SidenavAppendersComponent } from './sidenav-appenders.component';
import { FieldAppenderComponent } from '../field-appender/field-appender.component';
import { InputFilterListComponent } from '../input-filter-list/input-filter-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SidenavAppendersComponent', () => {
  let component: SidenavAppendersComponent;
  let fixture: ComponentFixture<SidenavAppendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, HttpClientModule ],
      declarations: [
        SidenavAppendersComponent,
        FieldAppenderComponent,
        InputFilterListComponent ],
        schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAppendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
