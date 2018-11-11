import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputFilterComponent } from '../input-filter/input-filter.component';
import { InputFilterListPlaceholderDirective } from './input-filter-list-placeholder.directive';

@Component({
  selector: 'input-filter-list',
  templateUrl: './input-filter-list.component.html',
  styleUrls: ['./input-filter-list.component.css'],
})
export class InputFilterListComponent {

  @ViewChild(InputFilterListPlaceholderDirective)
  inputFilterListPlaceholder: InputFilterListPlaceholderDirective;

  filterForm = this.formBuilder.group({
    company: null,
    state: null,
    postalCode: null,
  });

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private formBuilder: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }

  appendInputFilter() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputFilterComponent);
    const viewContainerRef = this.inputFilterListPlaceholder.viewContainerRef;
    viewContainerRef.createComponent(componentFactory);
  }
}
