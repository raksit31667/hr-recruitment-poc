import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableCandidatesDataSource } from './table-candidates-datasource';
import { Candidate } from 'src/app/models/candidate';

@Component({
  selector: 'table-candidates',
  templateUrl: './table-candidates.component.html',
  styleUrls: ['./table-candidates.component.css'],
})
export class TableCandidatesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() candidates: Candidate[];
  dataSource: TableCandidatesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'candidateStatus'];

  ngOnInit() {
    this.dataSource = new TableCandidatesDataSource(this.paginator, this.sort, this.candidates);
  }
}
