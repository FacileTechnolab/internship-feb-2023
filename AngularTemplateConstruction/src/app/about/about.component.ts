import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string
  brList: any
  constructor() {
    this.title = "About"
    this.brList = [
      {
        title: 'About',
        url: "/about",
        active: true
      }
    ]
  }

  ngOnInit() {
  }

}
