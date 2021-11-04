import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Output()
  dataModal: Cart;
  @Input()
  cardItem: any;
  constructor() { }

  ngOnInit(): void {
    
  }
  sortItemByHash(event): void {
    console.log(event);

    // this.cardItem.sort((a, b) => {
    //   if(a[this.cardItem.btnTH] > b[this.cardItem.btnTH]) {
    //     return 1
    //   }
    //   return -1
    // })
  }
  sortItemByEfficiency(event): void {
    // console.log(event);
  }
  sortItemReset(event): void {
    // console.log(event);
  }
  getModal(data: any): void {
    console.log(data); 
    this.dataModal = data;
  }
  onEnterSearchTool(event) {
    // console.log(event.target.value);
  }
}
