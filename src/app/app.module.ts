import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import {FoodServiceService} from '../app/food-service.service';
import { ChineseFoodComponent } from './chinese-food/chinese-food.component';
import { ThaiFoodComponent } from './thai-food/thai-food.component';
import { DominicanFoodComponent } from './dominican-food/dominican-food.component';
import { FilipinoFoodComponent } from './filipino-food/filipino-food.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    ChineseFoodComponent,
    ThaiFoodComponent,
    DominicanFoodComponent,
    FilipinoFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FoodServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
