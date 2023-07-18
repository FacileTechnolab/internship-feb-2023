import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  youlink = 'https://www.youtube.com/watch?v=LXb3EKWsInQ'
  constructor() { }

  ngOnInit() {
  }

}
