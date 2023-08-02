/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicedetailService } from './servicedetail.service';

describe('Service: Servicedetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicedetailService]
    });
  });

  it('should ...', inject([ServicedetailService], (service: ServicedetailService) => {
    expect(service).toBeTruthy();
  }));
});
