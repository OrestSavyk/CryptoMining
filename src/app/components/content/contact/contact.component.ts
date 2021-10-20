import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initContactForm()
  }
  onGetContactValue(contactForm: FormGroup): void {
    console.log(contactForm.value);
  }
  initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      country: ['', [Validators.required, Validators.maxLength(20)]],
      socialChain: [''],
      message: ['']
    })
  }

  // initContactForm(): void {
  //   this.contactForm = this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(4)]],
  //     company: ['', [Validators.required, Validators.minLength(5)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', [Validators.required, Validators.maxLength(10), Validators.maxLength(13)]],
  //     country: ['', [Validators.required, Validators.minLength(4)]],
  //     socialChain: ['', [Validators.required, Validators.minLength(7)]]
  //   })
  // }
  // sendContactForm(): void {
  //   console.log(this.contactForm.value);
  //   const newFormData = {id: uuid.v4(), ...this.contactForm.value}
  //   this.contactService.populateUserDataArray(newFormData).subscribe((value: LOG_DATA) => {
  //     this.contactPage = [...this.contactPage, value]
  //   })
  //   this.contactForm.reset();
  // }

}
