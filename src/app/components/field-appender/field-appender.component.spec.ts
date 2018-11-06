import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material.module';
import { FieldAppenderComponent } from './field-appender.component';

describe('FieldAppenderComponent', () => {
  let component: FieldAppenderComponent;
  let fixture: ComponentFixture<FieldAppenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ FieldAppenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAppenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
