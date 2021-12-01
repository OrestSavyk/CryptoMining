import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contactData';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  contactValue: Contact[] = [];

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { 
    this.initContactForm()
  }

  ngOnInit(): void {
    this.loadContactValue();
  }
  onGetContactValue(contact: FormGroup): void {
    console.log(contact.value);
    contact.reset()
  }
  private initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', (Validators.required, Validators.minLength(3))],
      company: [''],
      email: ['', (Validators.required, Validators.email)],
      phone: ['', (Validators.required, Validators.minLength(9))],
      country: ['', (Validators.required, Validators.minLength(3))],
      socialChain: ['', (Validators.required)],
      message: ['']
    })
  }
  private loadContactValue(): void {
    this.contactService.getContactValue().subscribe((value) => {
      this.contactValue = value;
      console.log(value);
      
    })
  }
}
