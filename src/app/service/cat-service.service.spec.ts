import { TestBed } from '@angular/core/testing';

import { CatServiceService } from './cat-service.service';

describe('CastServiceService', () => {
  let service: CatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
