import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CandidateStatus } from '../../models/candidate-status';
import { University } from '../../models/university';

@Component({
  selector: 'input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css'],
})
export class InputFilterComponent implements OnInit {

  candidateStatuses = [];
  universities = [];

  @Input() filterForm: FormGroup;
  @Input() type: String;

  constructor() {}

  ngOnInit() {
    this.candidateStatuses = Object.keys(CandidateStatus).map(key => CandidateStatus[key]);
    this.universities = Object.keys(University).map(key => University[key]);
  }
}
