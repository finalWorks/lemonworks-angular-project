import { TestBed } from '@angular/core/testing';

import { AnotherProduct1Service } from './another-product1.service';

describe('AnotherProduct1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherProduct1Service = TestBed.get(AnotherProduct1Service);
    expect(service).toBeTruthy();
  });
});
