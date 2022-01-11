import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_FOOT_BTN, ICON_FOOTER } from './footer.constants';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  navFootBtn: any[] = NAV_FOOT_BTN;
  iconFoot: any[] = ICON_FOOTER;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  link(link: string) {
    this.router.navigate([`${link}`]);
  }
}
