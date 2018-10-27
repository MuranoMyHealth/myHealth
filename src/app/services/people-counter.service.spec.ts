import { TestBed } from '@angular/core/testing';

import { PeopleCounterService } from './people-counter.service';

describe('PeopleCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleCounterService = TestBed.get(PeopleCounterService);
    expect(service).toBeTruthy();
  });
});
