import { Component,Input, Output, EventEmitter } from '@angular/core';
import { item } from '../model/item.model';
import { AuthService } from 'src/app/service/authentication.service'


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item!: item;
  @Output() onCart = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() buy = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor (public AuthService: AuthService){}

  updateDetail(){
    this.update.emit()
  }

  removeFromList(){
    this.remove.emit()
  }

  addToCart(){
    this.onCart.emit()
  }

  buyNow() {
    this.buy.emit()
  }
}
