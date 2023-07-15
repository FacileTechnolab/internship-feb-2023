import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  title="Your New Online Presence with Bethany"
  subtitle="We are team of talented designers making websites with Bootstrap"
  btn="Get Started"



  constructor() { }

  ngOnInit() {
  }

}
