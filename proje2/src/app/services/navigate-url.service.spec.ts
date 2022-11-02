import { TestBed } from '@angular/core/testing';

import { NavigateUrlService } from './navigate-url.service';

describe('NavigateUrlService', () => {
  let service: NavigateUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
