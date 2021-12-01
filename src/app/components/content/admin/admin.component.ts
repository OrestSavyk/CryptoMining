import {
  Component,
  EventEmitter,
  AfterViewInit,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cart } from "src/app/models/CartTool";
import { CartService } from "src/app/services/cart.service";
import { MatSort, Sort } from "@angular/material/sort";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import * as uuid from "uuid";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  public cartForm: FormGroup;
  buttonEdit: boolean;
  selectedItem: any;
  displayedColumns: string[] = [
    "id",
    "headname",
    "name",
    "hash",
    "power",
    "date",
    "algorithm",
    "size",
    "weight",
    "price",
    "availability",
    "edit",
    "delete",
  ];
  @Input()
  cardItem: Cart[] = [];
  
  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.devCartForm();
  }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadCards();
  }
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
  }
  private devCartForm(): void {
    this.cartForm = this.formBuilder.group({
      headname: ["", (Validators.required, Validators.minLength(3))],
      name: ["", (Validators.required, Validators.minLength(3))],
      image: [""],
      hash: ["", (Validators.required, Validators.min(1))],
      power: ["", (Validators.required, Validators.min(1))],
      date: ["", Validators.required],
      algorithm: ["", Validators.required],
      size: ["", Validators.required],
      weight: ["", Validators.required],
      price: ["", (Validators.required, Validators.min(1))],
      availability: ["", Validators.required],
    });
  }
  private loadCards(): void {
    this.cartService.getTool().subscribe((value) => {
      this.cardItem = value;
    });
  }
  onDeleteCard(id): void {
    this.cartService.removeTool(id).subscribe(() => {
      this.cardItem = this.cardItem.filter((cart) => cart.id !== id);
    });
  }
  onAddCartTool(): void {
    const newCartTool = { id: uuid.v4(), ...this.cartForm.value };
    this.cartService.addTool(newCartTool).subscribe((tool: Cart) => {
      this.cardItem = [...this.cardItem, tool];
    });
    this.cartForm.reset();
  }
  onSaveEdit(): void {
    this.cartService
      .editTool(this.selectedItem.id, this.cartForm.value)
      .subscribe((newEditedCart: Cart) => {});
    this.cartForm.reset();
  }

  editCurrentCart(item): void {
    this.selectedItem = item;
    this.buttonEdit = true;
    this.cartForm.patchValue(this.selectedItem);
  }
  onTableSortChange(event: Sort): void {
    if (event.direction) {
      this.liveAnnouncer.announce(`Sorted ${event.direction} ending`);
    } else {
      this.liveAnnouncer.announce(`Sorted cleared`);
    }
  }
}
