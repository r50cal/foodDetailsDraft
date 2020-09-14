import { Injectable, EventEmitter } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  
  countries=[{name:'Thailand',img:'../assets/images/countryFlags/flag-of-thailand.jpg'},
  {name:'China',img:'../assets/images/countryFlags/Flag_of_China.png'},
  {name:'Dominican Republic',img:'../assets/images/countryFlags/Flag_of_the_Dominican_Republic.svg'},
  {name:'Philippines',img:'../assets/images/countryFlags/2000px-Flag_of_the_Philippines.svg_.png'}];


  countrySelect(country:string){
    // this.service.errmessage.emit(country);
    console.log(country);
    // this.countrySelected=country;
  }
  // constructor() { }
  errmessage: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this. errmessage = new EventEmitter<any>();
  }

  getValue(): Observable<String> {
    return this.errmessage.asObservable();
  }
  setValue(newValue): void {
    this.errmessage.next(newValue);
  }
}
