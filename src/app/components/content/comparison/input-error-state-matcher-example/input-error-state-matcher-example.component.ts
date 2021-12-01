import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-error-state-matcher-example',
  templateUrl: './input-error-state-matcher-example.component.html',
  styleUrls: ['./input-error-state-matcher-example.component.css'],
})
export class InputErrorStateMatcherExampleComponent implements OnInit {
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();

  constructor() {}

  ngOnInit(): void {}
  hiGuy(): string {
    return 'today is snowly'
  }
}
