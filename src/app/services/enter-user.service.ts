import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUp } from '../models/newUser';
import { Login } from '../models/oldUser';

@Injectable({
  providedIn: 'root',
})
export class EnterUserService {
  isLoginUser$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}
  getLogins(): Observable<Login[]> {
    return this.httpClient.get<Login[]>(`http://localhost:3000/userData`);
  }
  addNewUser(newUser: SignUp): Observable<SignUp> {
    return this.httpClient.post<SignUp>(
      `http://localhost:3000/userData`,
      newUser
    );
  }
}
