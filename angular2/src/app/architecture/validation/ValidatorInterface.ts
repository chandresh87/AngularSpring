import { FormGroup, FormBuilder } from '@angular/forms';
export interface ValidatorInterface {

    getValidationMessages(): any;
    getFormError(): any;
    onValueChanged(validationForm: FormGroup, formErrors: any, data?: any);
    subscribeChanges(validationForm: FormGroup, formErrors: any);
    BuildFormControl(input?: any): any;

}