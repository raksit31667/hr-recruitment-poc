import { TestBed, getTestBed,  } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CandidateService } from './candidate.service';

describe('CandidateService (Integration)', () => {

  let injector: TestBed;
  let service: CandidateService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CandidateService]
    });

    injector = getTestBed();
    service = injector.get(CandidateService);
  });

  describe('getCandidates', () => {
    it('should return list of candidates correctly', () => {
      service.getCandidates('?lastName=Doe').subscribe(candidates => {
        expect(candidates.length).toEqual(2);
      });
    });

    it('should return list of candidates w/ multiple query parameters correctly', () => {
      service.getCandidates('?firstName=John&lastName=Doe').subscribe(candidates => {
        expect(candidates.length).toEqual(1);
      });
    });
  });
});
