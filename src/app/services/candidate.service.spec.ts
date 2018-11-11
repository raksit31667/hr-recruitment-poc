import { TestBed, getTestBed,  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CandidateService } from './candidate.service';
import { Candidate } from '../models/candidate';
import { CandidateStatus } from '../models/candidate-status';

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
        candidateStatus: null
      };

      const requestUrl = service.getQueryParameter(filterFormValue);

      expect(requestUrl).toEqual('firstName=John&lastName=Doe');
    });
  });

  describe('getCandidates', () => {
    it('should return list of candidates correctly', () => {

      const mockCandidates: Candidate[] = [
        { firstName: 'John', lastName: 'Doe', candidateStatus: CandidateStatus.NOT_PASS },
        { firstName: 'Mike', lastName: 'Doe', candidateStatus: CandidateStatus.PENDING_DOCUMENT },
        { firstName: 'John', lastName: 'Doraemon', candidateStatus: CandidateStatus.NOT_PASS },
      ];

      service.getCandidates('').subscribe(candidates => {
        expect(mockCandidates).toEqual(candidates);
      });

      const req = httpMock.expectOne(`${service.CANDIDATES_URL}/`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCandidates);
    });
  });
});
