import { Component, OnInit } from '@angular/core';
import { TimeService } from '../services/time.service';
@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(private timeService:TimeService) { }

  ngOnInit(): void {
    
  }


  currentTime(userTime:any){
    this.timeService.updateTime(userTime);
   
  }
}
