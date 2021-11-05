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

  bubbleUp = new EventEmitter<Cart>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCards();

  }
  private loadCards(): void {
    this.cartService.getTool().subscribe((value: Cart[]) => {
      this.cardItem = value;
    });
  }
  onSortItemHash(): void {
    console.log(this.cardItem);
    this.cardItem = this.cardItem.sort((a, b) => {
      return a.hash < b.hash ? 1 : -1;
    })
    
  }
  onSortItemEfficiency(): void {
    this.cardItem = this.cardItem.sort((a, b) => {
      return a.power < b.power ? 1 : -1;
    })
  }
  onResetFilter(): void {
    
  }
  onEnterSearchTool(event) {
    console.log(event.target.value);
    event.target.value = '';
  }
  onOpenModal(item: Cart): void {
    this.bubbleUp.emit(item);
    document.getElementById('modalWin').style.display = 'flex';
  }

}
