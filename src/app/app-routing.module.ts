import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDetailPageComponent } from './food-detail-page/food-detail-page.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {path: "", component: CountryComponent},
  {path: 'foodDetails', component: FoodDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
