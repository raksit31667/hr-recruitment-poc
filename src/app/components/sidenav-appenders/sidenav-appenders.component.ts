import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { InputFilterComponent } from '../input-filter/input-filter.component';

@Component({
  selector: 'sidenav-appenders',
  templateUrl: './sidenav-appenders.component.html',
  styleUrls: ['./sidenav-appenders.component.css']
})
export class SidenavAppendersComponent implements OnInit {

  @ViewChild('inputFilterList') inputFilterList;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  appendInputFilter() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputFilterComponent);
    const viewContainerRef = this.inputFilterList.viewContainerRef;
    viewContainerRef.createComponent(componentFactory);
  }
}
