import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-error-state-matcher',
  templateUrl: './error-state-matcher.component.html',
  styleUrls: ['./error-state-matcher.component.css']
})
export class ErrorStateMatcherComponent implements OnInit {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  constructor() { }

  ngOnInit(): void {
  }

}
