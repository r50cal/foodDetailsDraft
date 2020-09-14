import { Injectable,EventEmitter } from '@angular/core';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
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
