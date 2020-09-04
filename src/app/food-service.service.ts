import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  errmessage: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
