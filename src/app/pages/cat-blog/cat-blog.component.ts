import { Component } from '@angular/core';
import { catFacts } from 'src/app/model/catFacts.model';
import { CatServiceService } from 'src/app/service/cat-service.service';

@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.scss']
})
export class CatBlogComponent {
  listFacts: catFacts[] = [];
  constructor(private catSv: CatServiceService) {
    this.getCatFacts();
  }

  async getCatFacts(){
    let result = await this.catSv.getCatFacts(140,10);
    this.listFacts = result;
    return result;
  }
}
