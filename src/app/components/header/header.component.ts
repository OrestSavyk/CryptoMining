import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';
import { EnterUserService } from 'src/app/services/enter-user.service';
import { NAV_BUTTON } from './header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navButton = NAV_BUTTON;
  isUser: boolean;
  isAdmin: boolean;
  basketItemLength: number;
  constructor(
    private enterUserService: EnterUserService,
    private basketService: BasketService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    })
    this.enterUserService.loginUserIs$.subscribe((isUser) => {
      this.isUser = isUser;
    })
    this.basketService.basketItemsLength$.subscribe((length) => {
      this.basketItemLength = length;
    })
  }
  logOut() {
    this.authService.isAdmin$.next(false);
    this.enterUserService.loginUserIs$.next(false);
  }
}
