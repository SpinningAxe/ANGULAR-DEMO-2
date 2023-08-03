import { Component, Input } from '@angular/core';
import { catFacts } from 'src/app/model/catFacts.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  fact!: catFacts;
  time: number = Date.now();
}
