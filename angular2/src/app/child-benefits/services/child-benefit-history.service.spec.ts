/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChildBenefitHistoryService } from './child-benefit-history.service';

describe('ChildBenefitHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildBenefitHistoryService]
    });
  });

  it('should ...', inject([ChildBenefitHistoryService], (service: ChildBenefitHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
