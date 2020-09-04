import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FoodServiceService} from '../food-service.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-food-detail-page',
  templateUrl: './food-detail-page.component.html',
  styleUrls: ['./food-detail-page.component.css'],
  inputs:[]
})
export class FoodDetailPageComponent implements OnInit {
countrySelected:string;
  foodService:FoodServiceService;
  // country:CountryComponent;
  thaiFoods=[{name:"Fried Chicken", decs:"simple fried chicken",author:"Thita C."}];
  chineseFoods=[{name:"General Tso", decs:"Sweet and Tangy Chicken",author:"Shawn"}];
  dominicanFoods=[{name:"Empanada with Mangu", decs:"Empanadas with Mangu",author:"Edward R"}];
  filipinoFoods=[{name:"Kare-Kare", decs:"Philippine stew complemented with a thick savory peanut sauce",author:"Raymond C"}];
  constructor(private service: FoodServiceService) { 
    
    
  }

  ngOnInit(): void { 
    this.service.errmessage.subscribe((user) => {
      this.countrySelected = user;
      console.log(this.countrySelected);
     // this.isLogged = user != null
    });
  }
   
  }




