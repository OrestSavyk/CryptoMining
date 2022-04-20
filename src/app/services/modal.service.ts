import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/models/CartTool';

const MODAL_CART_DATA: Cart = {
  id: '',
  image: '',
  headname: '',
  name: '',
  hash: 0,
  power: 0,
  price: 0,
  availability: '',
  date: '',
  algorithm: '',
  size: '',
  weight: '',
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  selectedItem$: BehaviorSubject<Cart> = new BehaviorSubject(MODAL_CART_DATA);

  constructor() {}
}
