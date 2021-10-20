import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_BUTTON } from './header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navButton = NAV_BUTTON;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(nav: any): void {
    console.log('nav',nav.link);
    
    this.router.navigate([nav.link]);
    nav.active = true;
  }


}
