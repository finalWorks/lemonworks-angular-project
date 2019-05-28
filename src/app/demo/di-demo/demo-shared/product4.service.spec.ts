import { TestBed } from '@angular/core/testing';

import { Product4Service } from './product4.service';

describe('Product4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Product4Service = TestBed.get(Product4Service);
    expect(service).toBeTruthy();
  });
});
