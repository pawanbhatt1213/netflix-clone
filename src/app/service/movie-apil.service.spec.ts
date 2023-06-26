import { TestBed } from '@angular/core/testing';

import { MovieApilService } from './movie-apil.service';

describe('MovieApilService', () => {
  let service: MovieApilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
