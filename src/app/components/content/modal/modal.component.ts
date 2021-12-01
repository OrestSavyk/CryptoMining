import { Component, Inject, Input, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BasketCart, Cart } from "src/app/models/CartTool";
import { BasketService } from "src/app/services/basket.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  itemsBasket: BasketCart[] = [];
  @Input()
  modal: Cart;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}
  onCloseModal() {
    document.getElementById("modalWin").style.display = "none";
  }
  addToBasket(item: Cart): void {
    const cart = {
      id: item.id,
      image: item.image,
      headname: item.headname,
      name: item.name,
      amount: 1,
      price: item.price,
      amountPrice: 0,
    };
    const cartAlreadeExist = this.itemsBasket.find(
      (value) => value.id === cart.id
    );
    if (cartAlreadeExist) {
      cartAlreadeExist.amount++;
    } else {
      this.itemsBasket = [...this.itemsBasket, cart];
    }
    localStorage.setItem("cartItems", JSON.stringify(this.itemsBasket));
    this.basketService.basketItemsLength$.next(this.itemsBasket.length);
  }
}
