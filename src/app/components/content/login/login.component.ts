import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EnterUserService } from 'src/app/services/enter-user.service';
import { Login } from 'src/app/models/oldUser';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formSubmited: boolean;
  showError;
  loginsFromBase: Login[] = [];
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private enterUserService: EnterUserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.getLoginUser();
    this.initLoginForm();
  }

  ngOnInit(): void {}
  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      isRobot: [false, [Validators.requiredTrue]],
    });
  }
  login(): void {
    const user = this.loginsFromBase.find((user: Login) => {
      return (
        user.email === this.loginForm.value.email &&
        user.password === this.loginForm.value.password
      );
    });
    if (
      this.loginForm.value.email == 'admin@gmail.com' &&
      this.loginForm.value.password == 'admin1111'
    ) {
      alert('Hello Admin');
      this.loginForm.reset();
      this.authService.isAdmin$.next(true);
      localStorage.setItem('isAdmin', JSON.stringify(true));
      this.router.navigate(['admin']);
    } else if (user) {
      alert('Login Successfull');
      this.loginForm.reset();
      this.enterUserService.isLoginUser$.next(true);
      localStorage.setItem('isUser', JSON.stringify(true));
      this.router.navigate(['home']);
    } else {
      console.log('please, sign in!');
      this.loginForm.reset();
      alert('user not fount!');
    }
  }

  private getLoginUser() {
    this.enterUserService.getLogins().subscribe((value) => {
      this.loginsFromBase = value;
    });
  }
  showErrors(field: AbstractControl): boolean {
    return field.invalid && (field.touched || this.formSubmited);
  }
}
