import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-galleryinner',
  templateUrl: './galleryinner.component.html',
  styleUrls: ['./galleryinner.component.css']
})
export class GalleryinnerComponent implements OnInit {

  data: any;
  url: string = "/assets/json/galleryimg.json"
  constructor(private http: HttpClient) { }
  @Input() value: any;
  ngOnInit() {
    console.log('child', this.data)
  }
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





}
