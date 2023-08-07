import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
    this.http.get(this.url).subscribe(res => {this.slider = res; console.log("sliderbox",this.slider); })
  }

 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    dots: false, 
    navSpeed: 700,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
