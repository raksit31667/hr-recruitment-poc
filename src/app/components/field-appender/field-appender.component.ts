import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'field-appender',
  templateUrl: './field-appender.component.html',
  styleUrls: ['./field-appender.component.css']
})
export class FieldAppenderComponent implements OnInit {

  @Input() placeholder: String;
  @Output() append = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickAppend() {
    this.append.emit();
  }
}
