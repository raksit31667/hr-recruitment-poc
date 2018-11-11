import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sidenav-appenders',
  templateUrl: './sidenav-appenders.component.html',
  styleUrls: ['./sidenav-appenders.component.css']
})
export class SidenavAppendersComponent implements OnInit {

  @ViewChild('inputFilterList') inputFilterList;

  constructor() { }

  ngOnInit() {
  }

  onAppendInputFilter(type: String) {
    this.inputFilterList.appendInputFilter(type);
  }
}
