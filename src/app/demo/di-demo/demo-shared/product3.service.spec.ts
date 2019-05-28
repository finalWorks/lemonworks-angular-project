import { TestBed } from '@angular/core/testing';

import { Product3Service } from './product3.service';

describe('Product3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Product3Service = TestBed.get(Product3Service);
    expect(service).toBeTruthy();
  });
});
