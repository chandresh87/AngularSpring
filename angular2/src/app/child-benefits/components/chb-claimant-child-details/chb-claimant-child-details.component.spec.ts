/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChbClaimantChildDetailsComponent } from './chb-claimant-child-details.component';

describe('ChbClaimantChildDetailsComponent', () => {
  let component: ChbClaimantChildDetailsComponent;
  let fixture: ComponentFixture<ChbClaimantChildDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChbClaimantChildDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChbClaimantChildDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
