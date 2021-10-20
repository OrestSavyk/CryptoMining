import { Component, OnInit } from '@angular/core';
import { NAV_FOOT_BTN, ICON_FOOTER } from './footer.constants';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  navFootBtn: any[] = NAV_FOOT_BTN;
  iconFoot: any[] = ICON_FOOTER;
  constructor() { }

  ngOnInit(): void {
  }

}
