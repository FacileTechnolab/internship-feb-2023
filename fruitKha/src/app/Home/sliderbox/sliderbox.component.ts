import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderbox',
  templateUrl: './sliderbox.component.html',
  styleUrls: ['./sliderbox.component.css']
})
export class SliderboxComponent implements OnInit {
  url: string="/assets/json/sliderhome.json"
   @Input () sli: any

  constructor() { }

  ngOnInit() {
  }

}
