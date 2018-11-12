import { TestBed, getTestBed,  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CandidateService } from './candidate.service';
import { Candidate } from '../models/candidate';
import { CandidateStatus } from '../models/candidate-status';
import { University } from '../models/university';
import * as moment from 'moment';

describe('CandidateService', () => {

  let injector: TestBed;
  let service: CandidateService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CandidateService]
    });

    injector = getTestBed();
    service = injector.get(CandidateService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getQueryParameter', () => {
    it('should generate request url to get candidate data correctly', () => {
      const filterFormValue = {
        firstName: 'John',
        lastName: 'Doe',
        candidateStatus: null,
        university: null,
        shortlistDate: moment('01-31-2018')
      };

      const requestUrl = service.getQueryParameter(filterFormValue);

      expect(requestUrl).toEqual('?firstName=John&lastName=Doe&shortlistDate=01-31-2018');
    });
  });

  describe('getCandidates', () => {
    it('should return list of candidates correctly', () => {

      const mockCandidates: Candidate[] = [
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

      service.getCandidates('?lastName=Doe').subscribe(candidates => {
        expect(mockCandidates).toEqual(candidates);
      });

      const req = httpMock.expectOne(`${service.CANDIDATES_URL}?lastName=Doe`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCandidates);
    });
  });
});
