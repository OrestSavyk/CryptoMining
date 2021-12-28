import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';
import { CartService } from 'src/app/services/cart.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css'],
})
export class CartInfoComponent implements OnInit {
  item: Cart;
  constructor(private modalService: ModalService, private cart: CartService) {}

  ngOnInit(): void {
    this.loadDataModal();
  }
  loadDataModal() {
    this.item = this.modalService.selectedItem$.getValue();
  }
}