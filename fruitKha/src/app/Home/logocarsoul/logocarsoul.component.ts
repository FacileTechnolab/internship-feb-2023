import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logocarsoul',
  templateUrl: './logocarsoul.component.html',
  styleUrls: ['./logocarsoul.component.css']
})
export class LogocarsoulComponent implements OnInit {
  url : string="assets/json/logo.json"  
  logocarsoul : any
  
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.logocarsoul = res; console.log(this.logocarsoul); })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    dots: false, 
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
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
