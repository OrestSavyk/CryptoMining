import { Component, Input, OnInit, Output } from '@angular/core';
import { CARD_ITEM } from './cart.constant';
import { HttpClient } from '@angular/common/http';
import { Cart } from 'src/app/models/CartTool';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cardItem = CARD_ITEM;
  @Output()
  bubbleUp = new EventEmitter<Cart>();

  constructor() { }

  ngOnInit(): void {
  }
  onOpenModal(item: Cart): void {
    this.bubbleUp.emit(item);
    console.log(item);
    document.getElementById('modalWin').style.display = 'flex';
  }

}
