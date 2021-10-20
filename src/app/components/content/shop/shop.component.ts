import { Component, OnInit } from '@angular/core';
import { CARD_ITEM } from './shop.constant';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cardItem = CARD_ITEM
  constructor() { }

  ngOnInit(): void {
  }

}
