import { Component, OnInit } from '@angular/core';
import { BuildFormHelper } from '../../../architecture/validation/BuildFormHelper';
import { ChildComplexEligibilityValidation } from './ChildComplexEligibilityValidator';
import { FormBuilder } from '@angular/forms';
import { ChildComplexEligibilty } from '../../../child-benefits/domain/ChildComplexEligibilty'
import { ChildComplexEligibilityService } from './ChildComplexEligibilityService';

@Component({
  selector: 'child-complex-eligibility',
  templateUrl: './child-complex-eligibility.component.html',
  styleUrls: ['./child-complex-eligibility.component.css']
})

export class ChildComplexEligibilityComponent extends BuildFormHelper implements OnInit {

  childComplexEligibilty: ChildComplexEligibilty;
  UserName = "MR K BOLAM";
  formSubmittedMessage;

  constructor(public fb: FormBuilder, public service: ChildComplexEligibilityService) {

    super(new ChildComplexEligibilityValidation(fb))
  }

  ngOnInit() { }

  onSubmit() {

    this.childComplexEligibilty = this.getSubmittedValues();
    this.formSubmittedMessage = this.service.postData(this.childComplexEligibilty);
    this.formSubmittedMessage = "Details Saved Successfully";
  }

  reset() {
    this.childComplexEligibilty = new ChildComplexEligibilty();
    this.resetInput();
    this.formSubmittedMessage = "";
  }
}
