import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { FilterFormValue } from '../models/filter-form-value';
import { Candidate } from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  readonly CANDIDATES_URL = 'api/candidates';

  constructor(private http: HttpClient) { }

  public getQueryParameter(filterFormValue: FilterFormValue): string {

    const requestList = [];
    const dateFormat = 'MM-DD-YYYY';

    Object.keys(filterFormValue).forEach(key => {
      if (filterFormValue[key] != null) {

        if (moment.isMoment(filterFormValue[key])) {
          filterFormValue[key] = moment(filterFormValue[key]).format(dateFormat);
        }

        requestList.push(`${key}=${filterFormValue[key]}`);
      }
    });

    return `?${requestList.join('&')}`;
  }

  public getCandidates(queryParameter: string): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.CANDIDATES_URL}${queryParameter}`);
  }
}
