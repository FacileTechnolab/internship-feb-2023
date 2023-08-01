import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sliderbox',
  templateUrl: './sliderbox.component.html',
  styleUrls: ['./sliderbox.component.css']
})
export class SliderboxComponent implements OnInit {
 
   @Input () sli: any

  constructor() { }

  ngOnInit() {
    console.log("tetw", this.sli);
    
  }


}
