import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  url : string="assets/json/ads.json"
  advs:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url). subscribe(res => {this.advs = res; console.log(this.advs);})
  }

}
