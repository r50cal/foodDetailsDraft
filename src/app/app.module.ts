import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodDetailPageComponent } from './food-detail-page/food-detail-page.component';
import { CountryComponent } from './country/country.component';
import {FoodServiceService} from '../app/food-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodDetailPageComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FoodServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
