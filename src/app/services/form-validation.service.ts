import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor() {}

  isValidEmail(control: AbstractControl): ValidationErrors {
    const currentEmailValue = control.value;

    if (
      !currentEmailValue ||
      /^[\w\+\.\-]+\@(([\w\-])+\.)+[a-z\-]+$/.test(currentEmailValue)
    ) {
      return null;
    }

    return { email: true };
  }
}
