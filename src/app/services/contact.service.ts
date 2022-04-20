import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contactData';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  url = 'https://crypto-miningbest.herokuapp.com/contactData';
  constructor(private httpClient: HttpClient) {}

  getContactValue(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.url);
  }

  addContactValue(contactValue: Contact): Observable<Contact> {

    return this.httpClient.post<Contact>(this.url, contactValue);
  }
}
