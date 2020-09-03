import { TestBed } from '@angular/core/testing';

import { ConfirmCanactivateGuard } from './confirm-canactivate.guard';

describe('ConfirmCanactivateGuard', () => {
  let guard: ConfirmCanactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmCanactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
