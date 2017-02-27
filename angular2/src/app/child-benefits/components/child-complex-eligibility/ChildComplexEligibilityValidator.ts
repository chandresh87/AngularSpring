import { ValidationHelper } from '../../../architecture/validation/ValidationHelper'
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, FormControl, FormGroup } from '@angular/forms';

export class ChildComplexEligibilityValidation extends ValidationHelper {


  BuildFormControl(input?: any): any {

    this.validationForm = this.fb.group({
      line1: ['', [Validators.required]],
      line2: ['', [Validators.required,]],
      line3: ['', [Validators.required]],
      line4: ['', [Validators.required]],
      postcode: ['', [Validators.required, this.PostCodeValidator()]]

    });


    return this.validationForm;

  }

  public PostCodeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const postcode = control.value;


      const regNI = /(GIR 0AA)|((([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][0-9]?)|(([ABCDEFGHIJKLMNOPRSTUWYZ][0-9][ABCDEFGHJKSTUW])|([ABCDEFGHIJKLMNOPRSTUWYZ][ABCDEFGHKLMNOPQRSTUVWXY][0-9][ABEHMNPRVWXY])))) [0-9][ABDEFGHJLNPQRSTUWXYZ]{2})/;
      const no = regNI.test(postcode);
      return !no ? { 'invalidPostCode': { postcode } } : null;
    };
  }

  public validationMessages = {

    'default': {
      'required': 'default is required.',
      'minlength': 'default must be at least 4 characters long.',
      'maxlength': 'default cannot be more than 24 characters long.'

    },
    'line1': {
      'required': 'Line 1 is required.'
    },

    'line2': {
      'required': 'Line 2 is required.'
    },

    'line3': {
      'required': 'Line 3 is required.'

    },
    'line4': {
      'required': 'Line 4 is required.'

    },

    'postcode': {
      'required': 'Postcode is required.',
      'invalidPostCode': 'Postcode is not Valid'

    }
  };

  public formErrors = {
    'default': '',
    'line1': '',
    'line2': '',
    'line3': '',
    'line4': '',
    'postcode': ''
  };

}

