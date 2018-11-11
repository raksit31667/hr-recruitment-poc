import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { TableCandidatesComponent } from '../table-candidates/table-candidates.component';
import { InputFilterListComponent } from './input-filter-list.component';

describe('InputFilterListComponent', () => {
  let component: InputFilterListComponent;
  let fixture: ComponentFixture<InputFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, HttpClientModule ],
      declarations: [ InputFilterListComponent, TableCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
