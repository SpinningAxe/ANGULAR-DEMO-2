import { Component, Input, Output, EventEmitter } from '@angular/core';
import { item } from '../model/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() cart: item[] = [];
  @Input() itemList: item[] = [];

  @Output() onCloseCart = new EventEmitter();
  @Output() removeStock = new EventEmitter<item>();
  @Output() addStock = new EventEmitter<item>();

  closeCart() {
    this.onCloseCart.emit();
  }

  addMore(item: any) {
    let index = -1;
    for (let i = 0; i < this.itemList.length; i++) {
      if ((this.itemList[i].id == item.id)) {
        index = i;
      }
    }

    if (this.itemList[index].inStock!=0) {
      item.quantity++;
      this.itemList[index].inStock--;
    }
  }

  addLess(item: any) {
    let index = -1;
    for (let i = 0; i < this.itemList.length; i++) {
      if ((this.itemList[i].id == item.id)) {
        index = i;
      }
    }

    if (this.itemList[index].inStock!=0 && item.quantity>0) {
      item.quantity--;
      this.itemList[index].inStock++;
    }
  }

  total() {
    let tempTotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      tempTotal += this.cart[i].price * this.cart[i].quantity;
    }

    alert(`Tổng tiền là: ${tempTotal}.000 đ`);
    this.cart.length = 0;
    this.onCloseCart.emit();
  }
}
