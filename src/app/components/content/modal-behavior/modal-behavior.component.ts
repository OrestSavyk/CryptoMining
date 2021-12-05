import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-behavior',
  templateUrl: './modal-behavior.component.html',
  styleUrls: ['./modal-behavior.component.css'],
})
export class ModalBehaviorComponent implements OnInit {
  @Input()
  item: Cart;
  modal: Cart;

  constructor(
    private modalService: ModalService
    ) {}

  ngOnInit(): void {
    this.loadDataModal()
  }
  loadDataModal() {
    this.item = this.modalService.selectedItem$.getValue()
    console.log(this.item);
    
  }
}
