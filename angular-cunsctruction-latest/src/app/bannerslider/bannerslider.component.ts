import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bannerslider',
  templateUrl: './bannerslider.component.html',
  styleUrls: ['./bannerslider.component.css']
})
export class BannersliderComponent implements OnInit {
  url1:string="/assets/json/bannerslidertext.json"
  bannertext:any;
  url:string= "/assets/json/bannerslider.json" ;
  bannerbox: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(result=>{
      this.bannerbox =result
    });
 console.log(this.bannerbox)


 this.http.get(this.url1).subscribe(result=>{
  this.bannertext =result
});
console.log(this.bannertext)
  }

}

