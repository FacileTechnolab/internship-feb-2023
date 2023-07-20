import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-child',
  templateUrl: './slider-child.component.html',
  styleUrls: ['./slider-child.component.css']
})
export class SliderChildComponent implements OnInit {
  url: string = "/assets/json/slider.json";
  constructor() { }
  @Input() child: any
  ngOnInit() {
    console.log(this.child);
  }

}
