import { TestBed } from '@angular/core/testing';

import { JobsdataService } from './jobsdata.service';

describe('JobsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobsdataService = TestBed.get(JobsdataService);
    expect(service).toBeTruthy();
  });
});
