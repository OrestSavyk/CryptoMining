import { Component, OnInit } from '@angular/core';
import { BasketCart } from 'src/app/models/CartTool';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  displayedColumns: any[] = [
    'position',
    'image',
    'headname',
    'name',
    'amount',
    'price',
    'totalPrice',
    'delete',
  ];
  cardItem: BasketCart[] = [];
  totalAmount: number = 0;
  newItem;
  constructor() {}

  ngOnInit(): void {
    this.loadCartItems();
    this.updateTotalPrice();
  }

  loadCartItems(): void {
    this.cardItem = JSON.parse(localStorage.getItem('basketItems'));
    let i = 1;
    for (const item of this.cardItem) {
      item.position = i++;
    }
  }
  updateTotalPrice() {
    if (this.cardItem) {
      this.totalAmount = this.cardItem.reduce(function (acc, value) {
        return acc + value.amount * value.price;
      }, 0);
    }
  }
  addOnePieces(item: BasketCart): void {
    item.amount++;
    this.cardItem = [...this.cardItem];
    this.updateTotalPrice();
  }

  minusOnePieces(item: BasketCart): void {
    if (item.amount > 1) {
      item.amount--;
      this.cardItem = [...this.cardItem];
    }
    this.updateTotalPrice();
  }

  onDeleteOneItem(item: BasketCart) {
    let basketArray = localStorage.getItem('basketItems')
      ? JSON.parse(localStorage.getItem('basketItems'))
      : [];
    let index;
    for (let i = 0; i < basketArray.length; i++) {
      if (basketArray[i].id === item.id) {
        index = i;
        break;
      }
    }
    basketArray.splice(index, 1);
    localStorage.setItem('basketItems', JSON.stringify(basketArray));
    this.cardItem = basketArray;
    this.loadCartItems();
    this.updateTotalPrice();
  }
}
