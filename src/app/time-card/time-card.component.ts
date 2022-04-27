import { AfterViewInit, Component, OnInit } from '@angular/core';
import userData from '../../assets/other/data.json'
import { TimeService } from '../services/time.service';

interface USERS {
  title: string,
  timeframes:{
    daily:{
      current: number,
      previous: number
    },
    weekly:{
      current: number,
      previous: number
    },
    monthly:{
      current: number,
      previous: number
    }
  }
}

@Component({
  selector: 'time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.css']
})
export class TimeCardComponent {
  
  Users: USERS[] = userData;

  usertime:any

  constructor(private timeService:TimeService ) {

    this.timeService.getTime().subscribe(res => {
      this.usertime = res;
    })

  }

  
}
