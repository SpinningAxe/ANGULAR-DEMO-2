import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../service/data-service.service';
import { item } from '../model/item.model';

@Component({
  selector: 'app-update-item-modal',
  templateUrl: './update-item-modal.component.html',
  styleUrls: ['./update-item-modal.component.scss']
})

export class UpdateItemModalComponent {
  @Input() item!: item;
  @Output() onItemUpdate = new EventEmitter()
  @Output() onClose = new EventEmitter()
  constructor(public DataService: DataService){}

  close() {
    this.onClose.emit();
  }
  
  submit() {
    let newItem: item = {
      id: this.item.id,
      name: this.item.name,
      image: this.item.image,
      description: this.item.description,
      price: this.item.price,
      inStock:this.item.inStock,
      boxSize: this.item.boxSize,
      quantity: this.item.quantity
    }
    this.DataService.updateItem(newItem)
    alert("Update Successfully");
    this.close();
  }
  
}
