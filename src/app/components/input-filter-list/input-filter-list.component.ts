import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'input-filter-list',
  templateUrl: './input-filter-list.component.html',
  styleUrls: ['./input-filter-list.component.css']
})
export class InputFilterListComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
