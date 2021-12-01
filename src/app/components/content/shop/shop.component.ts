import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  @Output()
  dataModal: Cart;
  // @Input()
  // cardItem: any;
  constructor() {}

  ngOnInit(): void {}
  getModal(data: any): void {
    console.log(data);
    this.dataModal = data;
  }
}
