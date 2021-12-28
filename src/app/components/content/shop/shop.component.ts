import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  constructor(private cartService: CartService) {}
  carts: Cart[] = [];
  ngOnInit(): void {
    this.loadCarts();
  }
  private loadCarts() {
    this.cartService.getTool().subscribe((value) => (this.carts = value));
  }
}
