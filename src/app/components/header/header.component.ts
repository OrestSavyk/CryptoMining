import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isBurgerMenu: boolean = false;

  constructor(
    private enterUserService: EnterUserService,
    private basketService: BasketService,
    private authService: AuthService,
    public element: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.basketLength();
    this.admin();
    this.user();
  }
  admin() {
    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
  }
  user() {
    this.enterUserService.isLoginUser$.subscribe((isUser) => {
      this.isUser = isUser;
    });
    this.isUser = JSON.parse(localStorage.getItem('isUser'));
  }
  logOut() {
    this.authService.isAdmin$.next(false);
    this.enterUserService.isLoginUser$.next(false);
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isUser');
  }
  onCloseMenu(): void {
    this.isBurgerMenu = !this.isBurgerMenu;
  }
  routeToBasket() {
    this.router.navigate(['/basket']);
  }
  basketLength() {
    this.basketService.basketItemsLength$.subscribe((length) => {
      this.basketItemLength = length;
    });
    if (JSON.parse(localStorage.getItem('basketItems'))) {
      const basketItem = JSON.parse(localStorage.getItem('basketItems'));
      this.basketItemLength = basketItem.length;
    } else {
      this.basketItemLength = 0;
    }
  }
}
