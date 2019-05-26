import { TestBed } from '@angular/core/testing';

import { Product1Service } from './product1.service';

describe('Product1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Product1Service = TestBed.get(Product1Service);
    expect(service).toBeTruthy();
  });
});
