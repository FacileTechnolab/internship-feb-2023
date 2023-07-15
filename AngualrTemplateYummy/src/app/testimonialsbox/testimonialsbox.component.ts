import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonialsbox',
  templateUrl: './testimonialsbox.component.html',
  styleUrls: ['./testimonialsbox.component.css']
})
export class TestimonialsboxComponent implements OnInit {

  url: string = "/assets/json/testimonialsdata.json" ;
  
  @Input() value: any;
  testimonibox: any;
 constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      },
     
    },
    nav: false
  }

}
