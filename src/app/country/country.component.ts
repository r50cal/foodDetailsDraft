import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
   inputs:[`ountrySelected`]
})
export class CountryComponent implements OnInit {
  countrySelected:string;
  countries=[{name:'Thailand',img:'../assets/images/countryFlags/flag-of-thailand.jpg'},
  {name:'China',img:'../assets/images/countryFlags/Flag_of_China.png'},
  {name:'Dominican Republic',img:'../assets/images/countryFlags/Flag_of_the_Dominican_Republic.svg'},
  {name:'Philippines',img:'../assets/images/countryFlags/2000px-Flag_of_the_Philippines.svg_.png'}];
  constructor(private router: Router, private service: FoodServiceService) {

   }

  ngOnInit(): void {
  }
  countrySelect(country){
    this.service.errmessage.emit(country);
    console.log(country);
    this.countrySelected=country;
  }


}
