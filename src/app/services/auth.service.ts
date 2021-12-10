import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
