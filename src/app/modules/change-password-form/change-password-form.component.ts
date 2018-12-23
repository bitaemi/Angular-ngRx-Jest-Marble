import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

    changePassForm;

    constructor(private fb: FormBuilder) {
        this.changePassForm = fb.group({
            oldPassword: ['',
                Validators.required,
                PasswordValidators.oldPasswordDoesNotMatch],
            newPass: fb.group({
                newPassword: ['', Validators.required],
                confirmPassword: ['',
                    Validators.required]
            })
        });
    }


    ngOnInit() {
    }

    get oldPassword() {
        return this.changePassForm.get('oldPassword');
    }

    get newPassword() {
        return this.changePassForm.get('newPass.newPassword');
    }
    get confirmPassword() {
        return this.changePassForm.get('newPass.confirmPassword');
    }

    changePass() {
        // const newPassword = group.get('newPassword').value || '';
        // const confirmPassword = group.get('confirmPassword').value || '';

        if (this.newPassword.value !== this.confirmPassword.value) {
            this.changePassForm.setErrors({
                passNotMatch: true
            });
        }
  }

}
