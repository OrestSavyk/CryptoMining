import { Component, OnInit } from '@angular/core';
import { PROFIT_VALUE, RATE_VALUE } from './immersion.constant';

@Component({
  selector: 'app-immersion',
  templateUrl: './immersion.component.html',
  styleUrls: ['./immersion.component.scss'],
})
export class ImmersionComponent implements OnInit {
  rateValue = RATE_VALUE;
  profitValue = PROFIT_VALUE;
  constructor() {}

  ngOnInit(): void {}
}
