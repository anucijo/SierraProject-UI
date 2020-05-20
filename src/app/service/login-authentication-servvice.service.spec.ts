import { TestBed } from '@angular/core/testing';

import { LoginAuthenticationServviceService } from './login-authentication-servvice.service';

describe('LoginAuthenticationServviceService', () => {
  let service: LoginAuthenticationServviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAuthenticationServviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
