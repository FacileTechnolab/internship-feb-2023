import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sliderchild',
  templateUrl: './sliderchild.component.html',
  styleUrls: ['./sliderchild.component.css']
})
export class SliderchildComponent implements OnInit {
  @Input() slider: any;
  constructor(private http: HttpClient) { }
  url: string = "/assets/json/slider.json"
  ngOnInit() {


  }

}
