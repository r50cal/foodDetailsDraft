import { Component, OnInit, Input, Output } from '@angular/core';
import {CountryService} from '../country.service';
import { Router } from '@angular/router';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  // providers:[CountryService]
})
export class CountryComponent implements OnInit {
  countrySelected=' ';
  countries=[{name:'Thailand',img:'../assets/images/countryFlags/flag-of-thailand.jpg'},
  {name:'China',img:'../assets/images/countryFlags/Flag_of_China.png'},
  {name:'Dominican Republic',img:'../assets/images/countryFlags/Flag_of_the_Dominican_Republic.svg'},
  {name:'Philippines',img:'../assets/images/countryFlags/2000px-Flag_of_the_Philippines.svg_.png'}];
// countries:{name:string,img:string}[] =[];
  constructor(private router: Router) {
    // private router: Router, 
    // private countryservice:CountryService
   }

  ngOnInit(): void {
    // this.countries=this.countryservice.countries;
  }
  countrySelect(country){
   if(country==='China'){
    this.router.navigate(['chineseFood'])
   }
   else if(country==='Thailand'){
    this.router.navigate(['thaiFood'])
   }
   if(country==='Dominican Republic'){
    this.router.navigate(['dominicanFood'])
   }
   if(country==='Philippines'){
    this.router.navigate(['filipinoFood'])
   }
  
    
  
  }


}
