import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material.module';
import { SidenavAppendersComponent } from './sidenav-appenders.component';
import { FieldAppenderComponent } from '../field-appender/field-appender.component';
import { InputFilterListComponent } from '../input-filter-list/input-filter-list.component';

describe('SidenavAppendersComponent', () => {
  let component: SidenavAppendersComponent;
  let fixture: ComponentFixture<SidenavAppendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, HttpClientModule ],
      declarations: [
        SidenavAppendersComponent,
        FieldAppenderComponent,
        InputFilterListComponent ]
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
