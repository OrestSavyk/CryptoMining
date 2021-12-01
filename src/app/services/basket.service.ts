import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketItemsLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

}
