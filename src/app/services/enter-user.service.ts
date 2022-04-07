import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUp } from '../models/newUser';
import { Login } from '../models/oldUser';

@Injectable({
  providedIn: 'root',
})
export class EnterUserService {
  url = 'https://crypto-miningbest.herokuapp.com/userData';
  isLoginUser$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}
  getLogins(): Observable<Login[]> {
    return this.httpClient.get<Login[]>(this.url);
  }
  addNewUser(newUser: SignUp): Observable<SignUp> {
    return this.httpClient.post<SignUp>(this.url, newUser);
  }
}
