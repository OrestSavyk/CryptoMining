import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CARD_ITEM } from '../components/content/cart/cart.constant';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  // data = CARD_ITEM;

  constructor() { }

  // getCards(): Observable<CART_ITEM_MODEL[]> {
  //   return this.httpClient.get<CART_ITEM_MODEL[]>(this.data);
  // } 
  // getCardId(): Observable<CART_ITEM_MODEL> {
  //   return this.httpClient.get<CART_ITEM_MODEL>(this.data);
  // }
}
