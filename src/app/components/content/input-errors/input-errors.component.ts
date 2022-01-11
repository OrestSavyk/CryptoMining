import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FieldErrors } from './error-maping.const';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.scss'],
})
export class InputErrorsComponent implements OnChanges {
  @Input() showErrors: boolean;
  @Input() error: any;
  @Input() errorMapingKey: string;

  errorText: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.error) {
      this.defineErrorMsg(this.error);
    }
  }

  private defineErrorMsg(err): void {
    if (!err) {
      return;
    }
    const fieldErr = Object.keys(err)[0];
    this.errorText = FieldErrors[fieldErr];
  }
}
