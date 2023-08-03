import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatBlogComponent } from './cat-blog.component';

const routes: Routes = [{ path: '', component: CatBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatBlogRoutingModule { }
