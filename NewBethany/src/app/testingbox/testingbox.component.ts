import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testingbox',
  templateUrl: './testingbox.component.html',
  styleUrls: ['./testingbox.component.css']
})
export class TestingboxComponent implements OnInit {
  url:string= "/assets/json/testi.json"
  data:any;
  @Input () value:any

  constructor(
    private http:HttpClient
  ) {}

  ngOnInit() {
      console.log("child", this.data);
  }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 5
  //     }
  //   },
  //   nav: false
  // }
}
