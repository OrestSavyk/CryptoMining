import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import * as uuid from 'uuid'
import { Observable } from "rxjs";
import { Login } from "src/app/models/loginData";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  LoginArray: Login[] = [];
  public loginForm: FormGroup;
  adminIn: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {
    this.onLoadUser()
  }
  onAddLogin(): void {
    if (this.loginForm.value.email == 'admin@gmail.com' && this.loginForm.value.password == 'admin1111') {
      this.adminIn = true;      
    } else {
      const newLoginUser = {id: uuid.v4(), ...this.loginForm.value};      
      this.loginService.addLogin(newLoginUser).subscribe((login: Login) => {
      this.LoginArray = [...this.LoginArray, login]
      })
      this.loginForm.reset();
    } 
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  private onLoadUser(): void{
    this.loginService.getLogins().subscribe((value) => {
      this.LoginArray = value;
    })
  }
}
