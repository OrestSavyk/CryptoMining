import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CryptoMining';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     console.log('event: ', event);
    //   }
    //   if (event instanceof NavigationEnd) {
    //     console.log('event: ', event);
    //   }
    // });
  }
}
