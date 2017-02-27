import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorInterface } from './ValidatorInterface';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, FormControl } from '@angular/forms';

export abstract class ValidationHelper implements ValidatorInterface {

  public validationForm: FormGroup;
  /* Must overide this property to add custom validation messages specific to your model  */
  public validationMessages = {
    'default': {
      'required': 'default is required.',
      'minlength': 'default must be at least 4 characters long.',
      'maxlength': 'default cannot be more than 24 characters long.'
    }
  };
  /* Must overide this property to add fields used in validation specific to your model  */
  public formErrors = {
    'default': '',

  };

  constructor(public fb: FormBuilder) { }
  /* Returns  */
  getValidationMessages(): any {
    return this.validationMessages;

  }

  getFormError(): any {

    return this.formErrors;

  }
  onValueChanged(validationForm: FormGroup, formErrors: any, data?: any) {
    if (!validationForm) { return; }
    const form = validationForm;
    const validationMessages = this.getValidationMessages();

    console.log(formErrors);
    for (const field in formErrors) {
      // clear previous error message (if any)

      formErrors[field] = '';
      const control = form.get(field);


      if (control && control.dirty && !control.valid) {
        const messages = validationMessages[field];
        for (const key in control.errors) {

          formErrors[field] += messages[key] + ' ';
        }

      }


    }

  }

  subscribeChanges(validationForm: FormGroup, formErrors: any) {
    validationForm.valueChanges
      .subscribe(data => this.onValueChanged(validationForm, formErrors, data));

    this.onValueChanged(validationForm, formErrors); // (re)set validation messages now
  }
  /* Implemenent this method to build form control for your component .See BuildFormHelperControlExpample as a refernce */
  abstract BuildFormControl(input?: any): FormGroup;


  private BuildFormControlExpample(input?: any): FormGroup {
    this.validationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      nino: ['', [Validators.required, Validators.minLength(9)]],
      surname: ['', [Validators.required, Validators.minLength(4)]],
      dob: ['', [Validators.required]],
      dateOfEmp: ['', [Validators.required]],
    });


    return this.validationForm;

  }

}