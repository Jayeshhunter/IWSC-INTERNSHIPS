import { TestBed, async, inject } from '@angular/core/testing';

import { AdminauthGuard } from './adminauth.guard';

describe('AdminauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminauthGuard]
    });
  });

  it('should ...', inject([AdminauthGuard], (guard: AdminauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
