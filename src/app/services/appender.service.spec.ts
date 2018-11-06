import { TestBed, inject } from '@angular/core/testing';

import { AppenderService } from './appender.service';

describe('AppenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppenderService]
    });
  });

  it('should be created', inject([AppenderService], (service: AppenderService) => {
    expect(service).toBeTruthy();
  }));
});
