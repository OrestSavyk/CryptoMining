import { Component, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';
import { EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  cardItem: Cart[] = [];

  @Output()
  // cardItem: Cart[] = [];
  bubbleUp = new EventEmitter<Cart>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCards();

  }
  private loadCards(): void {
    this.cartService.getCart().subscribe((value: Cart[]) => {
      this.cardItem = value;
    });
  }
  onOpenModal(item: Cart): void {
    this.bubbleUp.emit(item);
    // console.log(item);
    document.getElementById('modalWin').style.display = 'flex';
  }

}
