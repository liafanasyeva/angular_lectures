import { TestBed } from '@angular/core/testing';

import { CloseEditFormGuard } from './close-edit-form.guard';

describe('CloseEditFormGuard', () => {
  let guard: CloseEditFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CloseEditFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
