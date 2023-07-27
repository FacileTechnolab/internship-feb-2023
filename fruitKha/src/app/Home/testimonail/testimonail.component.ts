import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonail',
  templateUrl: './testimonail.component.html',
  styleUrls: ['./testimonail.component.css']
})
export class TestimonailComponent implements OnInit {
url: string= "assets/json/testimonail.json"
testibox :any


constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get(this.url).subscribe(res =>{this.testibox = res; console.log("Testimonial",this.testibox);} )
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
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
      940: {
        items: 1
      }
    },
    nav: true
  }
}
