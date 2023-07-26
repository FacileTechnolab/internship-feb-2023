import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projectdetailslider',
  templateUrl: './projectdetailslider.component.html',
  styleUrls: ['./projectdetailslider.component.css']
})
export class ProjectdetailsliderComponent implements OnInit {
  url: string= "/assets/json/projectdetailslider.json"
  sliderdata: any;
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(result=>{
  
      this.sliderdata =result
    });
 console.log(this.sliderdata)
   }

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
    navText: ['<span class="bi bi-chevron-left" aria-hidden="true"></span>', '<span class="bi bi-chevron-right" aria-hidden="true"></span>'],
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
    nav: true
  }

}
