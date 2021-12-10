import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contactData';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}
  getContactValue(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`http://localhost:3000/contactData`);
  }
  addContactValue(contactValue: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(`http://localhost:3000/contactData`, contactValue);
  }
}
