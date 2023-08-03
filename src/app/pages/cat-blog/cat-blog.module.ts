import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatBlogRoutingModule } from './cat-blog-routing.module';
import { CatBlogComponent } from './cat-blog.component';
import { CardComponent } from './component/card/card.component';


@NgModule({
  declarations: [
    CatBlogComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CatBlogRoutingModule
  ]
})
export class CatBlogModule { }
