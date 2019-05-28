import { TestBed } from '@angular/core/testing';

import { Product2Service } from './product2.service';

describe('Product2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Product2Service = TestBed.get(Product2Service);
    expect(service).toBeTruthy();
  });
});
