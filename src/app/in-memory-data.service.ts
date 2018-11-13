import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CandidatesData } from './models/candidates-data';
import { Candidate } from './models/candidate';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const candidates: Candidate[] = CandidatesData;
    return { candidates };
  }
}
