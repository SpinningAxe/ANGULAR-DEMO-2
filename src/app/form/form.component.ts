import { Component, Input, Output, EventEmitter } from '@angular/core';
import { item } from 'src/app/model/item.model'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() onItemAdd = new EventEmitter()

  public nameInput='';
  public imageInput='';
  public descriptionInput='';
  public priceInput=0;
  public inStockInput=0;
  public boxSizeInput=0;
  public quantityInput=0;

  submit() {
    let newItem: item = {
      id: Date.now(),
      name: this.nameInput,
      image: this.imageInput,
      description: this.descriptionInput,
      price: this.priceInput,
      inStock: this.inStockInput,
      boxSize: this.boxSizeInput,
      quantity: this.quantityInput
    }

    if (newItem.name=='' && newItem.price==0 && newItem.boxSize==0 && newItem.inStock==0)
    {
      alert("ITEM HAS TOO MANY EMPTY ATTRIBUTE")
    }
    else 
    {
      this.onItemAdd.emit(newItem);
    };
  }
}
