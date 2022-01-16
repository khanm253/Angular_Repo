import { TestBed } from '@angular/core/testing';

import { ObsvService } from './obsv.service';

describe('ObsvService', () => {
  let service: ObsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
