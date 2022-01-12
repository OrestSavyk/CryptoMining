import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/CartTool';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-behavior',
  templateUrl: './modal-behavior.component.html',
  styleUrls: ['./modal-behavior.component.scss'],
})
export class ModalBehaviorComponent implements OnInit {
  @Input()
  item: Cart;

  constructor(private modalService: ModalService, private router: Router) {}

  ngOnInit(): void {
    this.loadDataModal();
  }
  loadDataModal() {
    this.item = this.modalService.selectedItem$.getValue();
  }
  redirectTo(id: any) {
    this.router.navigateByUrl(`/shop/${id}`);
  }
}
