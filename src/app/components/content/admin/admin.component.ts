import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cart } from 'src/app/models/CartTool';
import { CartService } from 'src/app/services/cart.service';
import * as uuid from 'uuid'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public cartForm: FormGroup;
  buttonEdit: boolean;
  selectedItem: any;
  @Input()
  cardItem: Cart[] = [];

  @Output()

  bubbleUp = new EventEmitter<Cart>();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) { 
      this.devCartForm();
    }

  ngOnInit(): void {
    this.loadCards();    
  }
  private devCartForm(): void {
    this.cartForm = this.formBuilder.group({
      id: [ '', (Validators.required,Validators.min(1))],
      manufacturer: [ '', (Validators.required,Validators.minLength(3))],
      model: [ '', (Validators.required, Validators.minLength(3))],
      image: [ ''],
      hash: [ '', (Validators.required, Validators.min(1))],
      power: [ '', (Validators.required, Validators.min(1))],
      date: [ '', (Validators.required)],
      algorithm: [ '', (Validators.required)],
      size: [ '', (Validators.required)],
      weight: [ '', (Validators.required)],
      price: [ '', (Validators.required, Validators.min(1))],
      availability: [ '', (Validators.required)]
    })
  }
  private loadCards(): void {
    this.cartService.getTool().subscribe((value) => {
      this.cardItem = value;
    })
    
  }
  onDeleteCard(id): void {
    // this.cardItem.splice((item.id - 1), 1)
    this.cartService.removeTool(id).subscribe(() => {
      this.cardItem = this.cardItem.filter((cart) => cart.id !== id)
    })
    
  }
  onAddCartTool(): void {
    const newCartTool = {id: uuid.v4(), ...this.cartForm.value};
    this.cartService.addTool(newCartTool).subscribe((tool: Cart) => {
      this.cardItem = [...this.cardItem, tool];
      this.cartForm.reset();
    })
    
  }
  onSaveEdit(): void {
    this.cartService.editTool(this.selectedItem.id, this.cartForm.value)
      .subscribe((newEditedCart: Cart) => {

    })
    this.cartForm.reset(); 
  }

  editCurrentCart(item): void {
    this.selectedItem = item;
    this.buttonEdit = true;
    this.cartForm.patchValue(this.selectedItem);
  }

}
