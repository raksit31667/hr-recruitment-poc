import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

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

  onAppendInputFilter() {
    this.inputFilterList.appendInputFilter();
  }
}
