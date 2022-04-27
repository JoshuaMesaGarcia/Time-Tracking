import { Component, OnInit } from '@angular/core';
import userData from '../../assets/other/data.json'

interface USERS {
  title: string
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Users: USERS[] = userData;

  constructor() {console.log(this.Users) }

  ngOnInit(): void {
  }

}
