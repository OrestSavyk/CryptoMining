import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketCart } from 'src/app/models/CartTool';
import { BasketService } from 'src/app/services/basket.service';

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
  constructor(
    private toastr: ToastrService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.updateTotalPrice();
    this.basketService.basketItemsLength$.next(this.cardItem.length);
  }

  loadCartItems(): void {
    if (JSON.parse(localStorage.getItem('basketItems'))) {
      this.cardItem = JSON.parse(localStorage.getItem('basketItems'));
      let i = 1;
      for (const item of this.cardItem) {
        item.position = i++;
      }
    } else {
      this.cardItem = [];
    }
  }
  updateTotalPrice() {
    if (this.cardItem) {
      this.totalAmount = this.cardItem.reduce(function (acc, value) {
        return acc + value.amount * value.price;
      }, 0);
    } else {
      this.totalAmount = 0;
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
    this.basketService.basketItemsLength$.next(this.cardItem.length);
    this.loadCartItems();
    this.updateTotalPrice();
  }
  onOrderItem() {
    this.toastr.success(`Your order has been successfully accepted !`);
    localStorage.removeItem('basketItems');
    this.loadCartItems();
    this.updateTotalPrice();
    this.basketService.basketItemsLength$.next(0);
  }
}
