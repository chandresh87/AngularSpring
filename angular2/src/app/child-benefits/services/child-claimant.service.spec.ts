/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChildClaimantService } from './child-claimant.service';

describe('ChildClaimantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildClaimantService]
    });
  });

  it('should ...', inject([ChildClaimantService], (service: ChildClaimantService) => {
    expect(service).toBeTruthy();
  }));
});
