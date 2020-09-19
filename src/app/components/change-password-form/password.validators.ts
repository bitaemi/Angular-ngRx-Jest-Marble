import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class PasswordValidators {
    static oldPasswordDoesNotMatch(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.value !== '123') {
                setTimeout(() => {
                    resolve({ oldPassNotMatch: true});
            }, 1000);
            } else {
                resolve(null);
            }
        });
    }

}
