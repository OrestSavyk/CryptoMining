import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/loginData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getLogins(): Observable<Login[]> {
    return this.httpClient.get<Login[]>(`http://localhost:3000/userLogin`);
  }
  addLogin(newUser: Login): Observable<Login> {
    return this.httpClient.post<Login>(`http://localhost:3000/userLogin`, newUser);
  }
}
