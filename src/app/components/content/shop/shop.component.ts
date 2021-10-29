import { Component, OnInit } from '@angular/core';
import { CARD_ITEM } from './shop.constant';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cardItem = CARD_ITEM;

  constructor() { }

  ngOnInit(): void {
  }
  onEnterSearchTool(event) {
    console.log(event.target.value);
  }
  onOpenModal(id) {
    const currentCard = this.cardItem.find(card => card.id == id )
    document.getElementById('modalWin').style.display = 'flex';
     
  }
  onCloseModal() {
    document.getElementById('modalWin').style.display = 'none';
  }
}
