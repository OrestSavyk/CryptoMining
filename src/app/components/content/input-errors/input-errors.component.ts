import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { FieldErrors } from './error-mapping.const';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.scss'],
})
export class InputErrorsComponent implements OnChanges {
  @Input() showErrors: boolean;
  @Input() fieldErrors: ValidationErrors;
  @Input() errorMappingKey: string;

  errorText: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fieldErrors) {
      this.defineErrorMsg(this.fieldErrors);
    }
  }

  private defineErrorMsg(err): void {
    if (!err) {
      return;
    }
    const fieldErr = Object.keys(err)[0];
    this.errorText = this.errorMappingKey
      ? FieldErrors[this.errorMappingKey][fieldErr]
      : FieldErrors[fieldErr];
  }
}
