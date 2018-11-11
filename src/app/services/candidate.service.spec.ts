import { TestBed,  } from '@angular/core/testing';

import { CandidateService } from './candidate.service';
import { CandidateStatus } from '../models/candidate-status';
import { CANDIDATES } from '../models/mock-candidates';

describe('CandidateService', () => {

  let service: CandidateService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [CandidateService]
    });

    service = new CandidateService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getQueryParameter', () => {
    it('should generate request url to get candidate data correctly', () => {
      const filterFormValue = {
        firstName: 'John',
        lastName: 'Doe',
        candidateStatus: null
      };

      const requestUrl = service.getQueryParameter(filterFormValue);

      expect(requestUrl).toEqual('firstName=John&lastName=Doe');
    });
  });

  describe('getCandidates', () => {
    it('should return list of candidates correctly', () => {
      service.getCandidates('').subscribe(candidates => {
        expect(CANDIDATES).toEqual(candidates);
      });
    });
  });
});
