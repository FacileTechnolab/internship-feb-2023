import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bannerslider',
  templateUrl: './bannerslider.component.html',
  styleUrls: ['./bannerslider.component.css']
})
export class BannersliderComponent implements OnInit {
  bannertitle= 'Welcome to'
  bannertitle1='UpConstruction'
  bannerdesc= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  bannerbutton = 'Get Started'
  getlink = '#get-started'

  url:string= "/assets/json/bannerslider.json" ;
  bannerbox: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.bannerbox =result
    });
 console.log(this.bannerbox)
  }

}
