import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Slider',
  templateUrl: './Slider.component.html',
  styleUrls: ['./Slider.component.css']
})
export class SliderComponent implements OnInit {
  url: string = "/assets/json/slider.json";
  slider: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.slider = result

      console.log(this.slider)
    });
  }

}
