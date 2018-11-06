import {
  Injectable,
  Inject,
  ComponentFactoryResolver,
  ViewContainerRef
 } from '@angular/core';

import { InputFilterComponent } from '../components/input-filter/input-filter.component';

@Injectable({
  providedIn: 'root'
})
export class AppenderService {

  private factoryResolver: ComponentFactoryResolver;
  private rootViewContainer: ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addInputFilter() {
    const factory = this.factoryResolver.resolveComponentFactory(InputFilterComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}
