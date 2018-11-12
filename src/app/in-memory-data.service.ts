import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as moment from 'moment';
import { Candidate } from './models/candidate';
import { CandidateStatus } from './models/candidate-status';
import { University } from './models/university';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const candidates: Candidate[] = [
      {
        firstName: 'John',
        lastName: 'Doe',
        candidateStatus: CandidateStatus.NOT_PASS,
        university: University.CU,
        shortlistDate: '01-31-2018'
      },
      {
        firstName: 'Mike',
        lastName: 'Doe',
        candidateStatus: CandidateStatus.PENDING_DOCUMENT,
        university: University.CU,
        shortlistDate: '01-31-2018'
      },
      {
        firstName: 'John',
        lastName: 'Doraemon',
        candidateStatus: CandidateStatus.NOT_PASS,
        university: University.CU,
        shortlistDate: '02-09-2018'
      },
    ];

    return { candidates };
  }
}
