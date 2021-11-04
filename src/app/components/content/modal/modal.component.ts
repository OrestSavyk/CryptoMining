import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/CartTool';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input()
  modal: Cart;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.modal);
    
  }
  onCloseModal() {
    document.getElementById('modalWin').style.display = 'none';
  }

}
