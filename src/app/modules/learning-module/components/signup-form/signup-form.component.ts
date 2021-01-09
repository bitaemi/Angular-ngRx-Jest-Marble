import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  myReactiveForm = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        UsernameValidators.cannotContainSpace
        ],
      UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
    })
  });

  get username() {
    return this.myReactiveForm.get('account.username');
  }

  get password() {
    return this.myReactiveForm.get('account.password');
  }

  login() {
    // let isValid = AuthorsService.login(this.myReactiveForm.value);
    if (true) {
      this.myReactiveForm.setErrors({
        invalidLogin: true
      });

    }
  }
}
