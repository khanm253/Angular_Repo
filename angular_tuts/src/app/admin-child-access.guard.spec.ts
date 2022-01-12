import { TestBed } from '@angular/core/testing';

import { AdminChildAccessGuard } from './admin-child-access.guard';

describe('AdminChildAccessGuard', () => {
  let guard: AdminChildAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminChildAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
