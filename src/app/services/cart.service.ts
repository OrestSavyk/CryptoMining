import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/CartTool';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) {

  }
  getCart(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`http://localhost:3000/minerTools`)
  }
  removeCart(id): Observable<{}> {
    return this.httpClient.delete(`http://localhost:3000/minerTools/${id}`)
  }
  addCart(newTool: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(`http://localhost:3000/minerTools`, newTool)
  }
}
// cartItemsLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
