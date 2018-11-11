import { Injectable } from '@angular/core';
import { FilterFormValue } from '../models/filter-form-value';
import { Observable, of } from 'rxjs';
import { Candidate } from '../models/candidate';
import { CANDIDATES } from '../models/mock-candidates';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor() { }

  public getQueryParameter(filterFormValue: FilterFormValue): string {

    const requestList = [];

    Object.keys(filterFormValue).forEach(key => {
      if (filterFormValue[key] != null) {
        requestList.push(`${key}=${filterFormValue[key]}`);
      }
    });

    return requestList.join('&');
  }

  public getCandidates(queryParameter: string): Observable<Candidate[]> {
    return of(CANDIDATES);
  }
}
