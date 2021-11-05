import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }
  login(loginForm: FormGroup): void {
    if (loginForm.value.email == 'admin@gmail.com' && loginForm.value.password == 'admin1111') {
      console.log('hello admin');
      
      
    }
    console.log(loginForm.value)
    
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  // login() {
  //   this.httpClient.get<any>("http://localhost:3000/login")
  //   .subscribe(res =>{
  //     const user = res.find((a: any)=> {
  //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  //     });
  //     if(user) {
  //       alert('Login Success!');
  //       this.loginForm.reset();
  //       this.router.navigate(['dashboard'])
  //     }else {
  //       alert("user not found");
  //     }
  //   },err=>{
  //     alert("something went wrong!")
  //   })
  // }
}
