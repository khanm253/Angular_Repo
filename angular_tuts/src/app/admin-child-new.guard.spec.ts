import { TestBed } from '@angular/core/testing';

import { AdminChildNewGuard } from './admin-child-new.guard';

describe('AdminChildNewGuard', () => {
  let guard: AdminChildNewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminChildNewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
