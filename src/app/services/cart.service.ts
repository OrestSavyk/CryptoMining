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
  getTool(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`http://localhost:3000/minerTools`)
  }
  removeTool(id): Observable<{}> {
    return this.httpClient.delete(`http://localhost:3000/minerTools/${id}`)
  }
  addTool(newTool: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(`http://localhost:3000/minerTools`, newTool)
  }
  editTool(id: string, editedCart: Cart): Observable<Cart> {
    return this.httpClient.put<Cart>(`http://localhost:3000/minerTools/${id}`, editedCart)
  }
}
