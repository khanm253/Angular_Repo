import { TestBed } from '@angular/core/testing';

import { ACGuard } from './ac.guard';

describe('ACGuard', () => {
  let guard: ACGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ACGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
