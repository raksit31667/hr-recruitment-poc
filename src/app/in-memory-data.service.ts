import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Candidate } from './models/candidate';
import { CandidateStatus } from './models/candidate-status';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const candidates: Candidate[] = [
      { firstName: 'John', lastName: 'Doe', candidateStatus: CandidateStatus.NOT_PASS },
      { firstName: 'Mike', lastName: 'Doe', candidateStatus: CandidateStatus.PENDING_DOCUMENT },
      { firstName: 'John', lastName: 'Doraemon', candidateStatus: CandidateStatus.NOT_PASS },
    ];

    return { candidates };
  }
}
