import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive} from '@angular/core';

@Directive({
    selector: '[appConfirmEqual]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualDirective,
        multi: true
    }]
})
export class ConfirmEqualDirective implements Validator {

    validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
        const passwordField = passwordGroup.parent.get("password");
        const confirmPasswordField = passwordGroup.parent.get("confirmPassword");
        if (passwordField && confirmPasswordField && passwordField.value !== passwordField.value) {
            return { 'notEqual': true };
        }
        return null;
    }
}