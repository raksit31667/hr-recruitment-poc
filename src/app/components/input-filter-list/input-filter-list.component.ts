import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputFilterComponent } from '../input-filter/input-filter.component';
import { InputFilterListPlaceholderDirective } from './input-filter-list-placeholder.directive';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../models/candidate';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'input-filter-list',
  templateUrl: './input-filter-list.component.html',
  styleUrls: ['./input-filter-list.component.css']
})
export class InputFilterListComponent {

  @ViewChild(InputFilterListPlaceholderDirective)
  inputFilterListPlaceholder: InputFilterListPlaceholderDirective;

  filterForm = this.formBuilder.group({
    firstName: null,
    lastName: null,
    candidateStatus: null,
    university: null,
    shortlistDate: null
  });

  candidates: Candidate[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private formBuilder: FormBuilder,
    private candidateService: CandidateService,
    private excelService: ExcelService) {}

  onSubmit() {
    const queryParameters = this.candidateService.getQueryParameter(this.filterForm.value);
    this.candidateService.getCandidates(queryParameters).subscribe(
      candidates => this.candidates = candidates);
  }

  exportAsExcelFile() {
    this.excelService.exportAsExcelFile(this.candidates, 'candidates');
  }

  appendInputFilter(type: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputFilterComponent);
    const viewContainerRef = this.inputFilterListPlaceholder.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.filterForm = this.filterForm;
    componentRef.instance.type = type;
    componentRef.instance.remove.subscribe(() => {

      this.filterForm.patchValue({[type] : null });
      componentRef.destroy();
    });
  }
}
