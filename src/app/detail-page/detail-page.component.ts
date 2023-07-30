import { Component, Input } from '@angular/core';
import {item} from 'src/app/model/item.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
  @Input() item!: item;
  
}
