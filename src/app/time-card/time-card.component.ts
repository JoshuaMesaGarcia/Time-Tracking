import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.css']
})
export class TimeCardComponent implements OnInit {
  
  cardData = [
    {
      title:"Work",
      time: 32
    },
    {
      title:"Play",
      time: 10
    },
    {
      title:"Study",
      time: 4
    },
    {
      title:"Exercise",
      time: 4
    },
    {
      title:"Social",
      time: 5
    },
    {
      title:"Self Care",
      time: 2
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
