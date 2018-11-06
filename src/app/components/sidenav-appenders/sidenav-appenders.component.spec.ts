import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatCardModule, MatIconModule } from '@angular/material';
import { SidenavAppendersComponent } from './sidenav-appenders.component';
import { FieldAppenderComponent } from '../field-appender/field-appender.component';

describe('SidenavAppendersComponent', () => {
  let component: SidenavAppendersComponent;
  let fixture: ComponentFixture<SidenavAppendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSidenavModule, MatCardModule, MatIconModule, BrowserAnimationsModule ],
      declarations: [ SidenavAppendersComponent, FieldAppenderComponent ]
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
