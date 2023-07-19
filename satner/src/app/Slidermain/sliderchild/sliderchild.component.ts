import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-sliderchild',
  templateUrl: './sliderchild.component.html',
  styleUrls: ['./sliderchild.component.css']
})
export class SliderchildComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url: string = "assets/json/slider.json";
  @Input() slider: any
  ngOnInit() {

    console.log(this.slider);

  }

}



