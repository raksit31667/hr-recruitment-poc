import { Injectable } from '@angular/core';
import { FilterFormValue } from '../models/filter-form-value';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor() { }

  generateRequestUrl(filterFormValue: FilterFormValue): string {

    const requestList = [];

    Object.keys(filterFormValue).forEach(key => {
      if (filterFormValue[key] != null) {
        requestList.push(`${key}=${filterFormValue[key]}`);
      }
    });

    return requestList.join('&');
  }
}
