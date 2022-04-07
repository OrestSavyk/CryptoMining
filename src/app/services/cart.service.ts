import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/CartTool';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  url = 'https://crypto-miningbest.herokuapp.com/minerTools';
  constructor(private httpClient: HttpClient) {}
  getTool(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.url);
  }
  removeTool(id): Observable<{}> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  addTool(newTool: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(this.url, newTool);
  }
  editTool(id: string, editedCart: Cart): Observable<Cart> {
    return this.httpClient.put<Cart>(`${this.url}/${id}`, editedCart);
  }
}
