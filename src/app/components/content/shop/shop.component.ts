import { Component, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';
import { CARD_ITEM } from '../cart/cart.constant';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // modal: any
  @Input()
  dataModal: Cart;
  constructor() { }

  ngOnInit(): void {
  }
  getModal(data: Cart) {
    this.dataModal = data; 
  }
  onEnterSearchTool(event) {
    console.log(event.target.value);
  }
}
