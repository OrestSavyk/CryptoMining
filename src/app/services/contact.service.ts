import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
// import { LOG_DATA } from '../models/contactData';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // realName = '';
  // company = '';
  // email = '';
  // phone = '';
  // country = '';
  // socialChain = '';

  constructor(private httpClient: HttpClient) { }
  
  // populateUserDataArray(newFormData: LOG_DATA): Observable<LOG_DATA>{
  //   return this.httpClient.post<LOG_DATA>('http://localhost:3000/contact_page_data', newFormData)
  // }

  // onRealName(event: RouterEvent, target: any) {
  //   this.realName = (<HTMLInputElement>event.target).value;
  // }
  // onCompany(event: Event) {
  //   this.company = (<HTMLInputElement>event.target).value;
  // }
  // onEmail(event: Event) {
  //   this.email = (<HTMLInputElement>event.target).value;
  // }
  // onPhone(event: Event) {
  //   this.phone = (<HTMLInputElement>event.target).value;
  // }
  // onCountry(event: Event) {
  //   this.realName = (<HTMLInputElement>event.target).value;
  // }
  // onSocialChain(event: Event) {
  //   this.socialChain = (<HTMLInputElement>event.target).value;
  // }
  

}


