import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from "./detail-page/detail-page.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
    // {
    //     path:'itemPage', component: DetailPageComponent
    // },{
    //     path:'home', component: AppComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const itemPageRoutes = [DetailPageComponent, AppComponent]