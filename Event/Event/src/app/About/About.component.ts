import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {
  title = "About The Event";
  desc = " Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in est ut optio sequi unde.";
  tit1 = "Where";
  t1desc = "Downtown Conference Center, New York";
  tit2 = "When";
  t2desc = "Monday to Wednesday";
  t22desc = "10-12 December"
  constructor() { }

  ngOnInit() {
  }

}
