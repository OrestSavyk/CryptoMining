import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contactData';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  contactValue: Contact[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.initContactForm();
  }

  ngOnInit(): void {}

  onGetContactValue(contact: FormGroup): void {
    this.initContactForm();
  }

  private initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', (Validators.required, Validators.minLength(3))],

      company: [''],

      email: ['', (Validators.required, Validators.email)],

      phone: ['', (Validators.required, Validators.minLength(9))],

      country: ['', (Validators.required, Validators.minLength(3))],

      socialChain: ['', Validators.required],

      message: [''],
    });
  }
}
