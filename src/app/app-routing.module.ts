import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import {ChineseFoodComponent} from '../app/chinese-food/chinese-food.component';
import {DominicanFoodComponent} from '../app/dominican-food/dominican-food.component';
import {ThaiFoodComponent} from '../app/thai-food/thai-food.component';
import {FilipinoFoodComponent} from '../app/filipino-food/filipino-food.component';

const routes: Routes = [
  {path: "", component: CountryComponent},
  {path: 'chineseFood', component: ChineseFoodComponent},
  {path: 'thaiFood', component: ThaiFoodComponent},
  {path: 'dominicanFood', component: DominicanFoodComponent},
  {path: 'filipinoFood', component: FilipinoFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
