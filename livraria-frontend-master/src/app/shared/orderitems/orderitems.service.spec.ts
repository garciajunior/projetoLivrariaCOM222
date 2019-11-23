import { TestBed } from '@angular/core/testing';

import { OrderitemsService } from './orderitems.service';

describe('OrderitemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderitemsService = TestBed.get(OrderitemsService);
    expect(service).toBeTruthy();
  });
});
