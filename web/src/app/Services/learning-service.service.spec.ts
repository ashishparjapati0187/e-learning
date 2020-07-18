import { TestBed } from '@angular/core/testing';

import { LearningServiceService } from './learning-service.service';

describe('LearningServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningServiceService = TestBed.get(LearningServiceService);
    expect(service).toBeTruthy();
  });
});
