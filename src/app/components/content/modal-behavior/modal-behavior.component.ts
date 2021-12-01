import { Component, Input, OnInit } from '@angular/core';
import { BasketCart, Cart } from "src/app/models/CartTool";


@Component({
  selector: 'app-modal-behavior',
  templateUrl: './modal-behavior.component.html',
  styleUrls: ['./modal-behavior.component.css']
})
export class ModalBehaviorComponent implements OnInit {
  @Input()
  item: Cart;
  modal: Cart;

  constructor() { }

  ngOnInit(): void {
  }
}
