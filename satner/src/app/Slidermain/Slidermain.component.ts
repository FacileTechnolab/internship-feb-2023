import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-Slidermain',
  templateUrl: './Slidermain.component.html',
  styleUrls: ['./Slidermain.component.css']
})
export class SlidermainComponent implements OnInit {
  home: any;
  sliders: any;
  url: string = "assets/json/home.json"
  url1: string = "assets/json/slider.json"
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.home = res;
    });
    this.http.get(this.url1).subscribe(res => {
      this.sliders = res;
    });

  }
}
