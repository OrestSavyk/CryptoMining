import { Component, Input, OnInit } from '@angular/core';
import { BasketCart, Cart } from 'src/app/models/CartTool';
import { CartService } from 'src/app/services/cart.service';
import { ModalService } from 'src/app/services/modal.service';
import { FILTER_ITEM, SORT_ITEM } from './cart.constant';
import { MatDialog } from '@angular/material/dialog';
import { BasketService } from 'src/app/services/basket.service';
import { ModalBehaviorComponent } from '../modal-behavior/modal-behavior.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  filterItems = FILTER_ITEM;
  sortItems = SORT_ITEM;
  @Input()
  cardItem: Cart[] = [];
  basketItem: BasketCart[] = [];
  item: any;
  startIndex: number;
  endIndex = 6;
  constructor(
    private cartService: CartService,
    public modal: MatDialog,
    private modalHelperService: ModalService,
    public basketService: BasketService
    ) {}
    
    ngOnInit(): void {
      this.loadCards();
    }
    
  private loadCards(): void {
    this.cartService.getTool().subscribe((value: Cart[]) => {
      this.cardItem = value;
    });
  }
  onFilterHash(event): void {
    this.cardItem = this.cardItem.filter((value) => value.hash > event.value);
  }
  onSortItem(event): void {
    this.cardItem.sort((a, b) => {
      if (a[event.value] > b[event.value]) {
        return 1;
      }
      return -1;
    });
  }
  onResetFilter(): void {
    this.loadCards();
  }
  onEnterSearchTool(event) {
    console.log(event.target.value);
    event.target.value = '';
  }
  onOpenModal(item: Cart): void {
    this.modalHelperService.selectedItem$.next(item);
    let dialogRef = this.modal.open(ModalBehaviorComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  addToBasket(item: Cart): void {
    const selectedItem = {
      id: item.id,
      image: item.image,
      headname: item.headname,
      name: item.name,
      amount: 1,
      price: item.price,
      amountPrice: 0,
    };
    const toolAlreadyExist = this.basketItem.find(
      (item) => item.id === selectedItem.id
    );
    if (toolAlreadyExist) {
      toolAlreadyExist.amount++;
    } else {
      this.basketItem = [...this.basketItem, selectedItem];
    }
    localStorage.setItem('basketItems', JSON.stringify(this.basketItem));
    this.basketService.basketItemsLength$.next(this.basketItem.length);
  }
  onPageChange(event: PageEvent) {
    console.log(event);
    
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
  }
}
