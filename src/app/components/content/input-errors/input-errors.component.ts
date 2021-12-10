import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.css']
})
export class InputErrorsComponent implements OnInit {
  @Input()
  showErrors: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
