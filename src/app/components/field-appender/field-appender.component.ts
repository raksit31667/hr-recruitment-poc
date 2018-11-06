import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'field-appender',
  templateUrl: './field-appender.component.html',
  styleUrls: ['./field-appender.component.css']
})
export class FieldAppenderComponent implements OnInit {

  @Output() append = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickAppend() {
    this.append.emit();
  }
}
