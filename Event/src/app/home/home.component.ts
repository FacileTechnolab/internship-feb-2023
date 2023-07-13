import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  "title1" = "The Annual";
  "title2" = "Marketing";
  "title3" = "Conference";
  "desc" = "10-12 December, Downtown Conference Center, New York";
  "link" = ""
  constructor() { }

  ngOnInit() {
  }

}
