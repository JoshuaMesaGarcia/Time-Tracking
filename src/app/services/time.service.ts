import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  public usertime: BehaviorSubject<string> = new BehaviorSubject("daily");
  
  constructor() { }

  updateTime(timeVariable:string){
    
    this.usertime.next(timeVariable);
    return this.usertime
  }

  getTime(){

    return this.usertime.asObservable()

  }
}
