import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  carts: Cart[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCarts();
  }

  private loadCarts() {
    this.cartService.getTool().subscribe((value) => (this.carts = value));
  }
}
