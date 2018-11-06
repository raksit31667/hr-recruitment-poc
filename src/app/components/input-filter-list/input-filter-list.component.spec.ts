import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilterListComponent } from './input-filter-list.component';

describe('InputFilterListComponent', () => {
  let component: InputFilterListComponent;
  let fixture: ComponentFixture<InputFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFilterListComponent ]
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
