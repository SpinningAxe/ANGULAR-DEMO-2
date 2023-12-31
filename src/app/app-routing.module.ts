import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { AppComponent } from './app.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

const routes: Routes = [
  {
    path: 'detailPage',
    component: DetailPageComponent,
  },
  { path: 'menuPage', component: MenuPageComponent },
  { path: 'cat-blog', loadChildren: () => import('./pages/cat-blog/cat-blog.module').then(m => m.CatBlogModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RouteComponents = [DetailPageComponent, MenuPageComponent,AppComponent];
