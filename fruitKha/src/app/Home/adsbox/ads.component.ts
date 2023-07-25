import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  url : string="assets/json/ads.json"
@Input () adsbox :any;
  constructor() { }

  ngOnInit() {
  }

}
