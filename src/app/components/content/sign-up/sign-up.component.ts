import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/newUser';
import { EnterUserService } from 'src/app/services/enter-user.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Input()
  formSubmited: boolean;
  userDataArr: SignUp[] = [];
  public signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private enterUserService: EnterUserService,
    private router: Router
  ) {
    this.initSignUpForm();
  }

  ngOnInit(): void {}
  private initSignUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      secondName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  signUp(): void {
    const newUser = { id: uuid.v4(), ...this.signUpForm.value };
    this.enterUserService.addNewUser(newUser).subscribe(
      (sign: SignUp) => {
        alert('Sign In Successfull');
        this.userDataArr = [...this.userDataArr, sign];
        this.router.navigate(['login']);
        this.signUpForm.reset();
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
  showErrors(field: AbstractControl) {
    return field.invalid && (field.touched || this.formSubmited);
  }

  getErrorText(field: string): ValidationErrors {
    return this.signUpForm.get(field).errors;
  }

  isValidEmail(email: any) {
    const regex = /^[\w\+\.\-]+\@(([\w\-])+\.)+[a-z\-]+$/;
    return regex.test(email.value) ? false : true;
  }
}
