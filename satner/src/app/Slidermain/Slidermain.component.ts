import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-Slidermain',
  templateUrl: './Slidermain.component.html',
  styleUrls: ['./Slidermain.component.css']
})
export class SlidermainComponent implements OnInit {
  url: string = "/assets/json/slider.json";
  main: any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
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
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result => {
      this.main = result
      debugger
      console.log(this.main)
    });
  }

}
