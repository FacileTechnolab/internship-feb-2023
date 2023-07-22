import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Slider-home',
  templateUrl: './Slider-home.component.html',
  styleUrls: ['./Slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {
url: string="/assets/json/sliderhome.json"
slider:any
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.url).subscribe(res => {this.slider = res; console.log(this.slider); })
  }

}
