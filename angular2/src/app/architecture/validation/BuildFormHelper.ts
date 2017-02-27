
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorInterface } from './ValidatorInterface'

export abstract class BuildFormHelper {
    public validationForm: FormGroup;
    public customValidator: ValidatorInterface
    public formErrors;


    constructor(customValidator: ValidatorInterface) {

        this.customValidator = customValidator;

        this.formErrors = customValidator.getFormError();

        this.build(this.customValidator, this.formErrors);

    }

    public build(customValidator: ValidatorInterface, formErrors): void {
        //this.validationForm= new FormGroup(customValidator.BuildFormControl());

        this.validationForm = customValidator.BuildFormControl();

        customValidator.subscribeChanges(this.validationForm, formErrors);
    }


    public resetInput() {
        this.build(this.customValidator, this.formErrors);
    }

    public getSubmittedValues(): any {
        return this.validationForm.value;
    }
}